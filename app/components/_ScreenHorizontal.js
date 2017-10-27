/* global fetch:false */
/*eslint quote-props: ["error", "as-needed", { "keywords": true, "unnecessary": false }]*/
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    FlatList, 
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

import CardUI from './_ScreenHorizontalCard';

const cardHeight = 300;
const cardWidth = 200;
const colorFollow = 'royalblue';

class ScreenHorizontal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
        };
        this.page = 1;
        
        this.API = props.propUrl;
        this.API_OBJ = props.propObj;
    }

    componentDidMount() {
        this.setState({ loading: true }, console.log('componentdidmount render'));
        this.makeAPIRequest();   
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.data !== this.state.data) {
            // console.log('shouldComponentUpdate -- Update');
            return nextState.data;
        } 
        // console.log('shouldComponentUpdate -- Not');
        return null;
    }

    getItemLayout = (data, index) => {
        return { length: cardHeight, offset: cardHeight * index, index };
    }

    makeAPIRequest = () => {
        const API_ENDPOINT = this.API;
        
        const object = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'CategoryID': this.API_OBJ.CategoryID,
                'CategoryTypeID': this.API_OBJ.CategoryTypeID,
                'ProfileID': '1081',
                'Page': this.page,
                'Size': '15',
                'Languages': ['en'],
                'isMicroApp': false,
                'MicroAppProfileID': null,
            })
        };

        fetch(API_ENDPOINT, object)
        .then(res => res.json())
        .then(res => {
            const { Items } = res.Result;

            this.setState({
                data: [...this.state.data, ...Items],
                error: res.error || null,
                loading: false,
                refreshing: false,
            }, console.log('makeAPIRequest render'));
        })
        .catch(error => {
            this.setState({ error, loading: false }, console.log('error render'));
            console.log(error);
        });

        this.page += 1;
    }

    loadMore = () => {
        this.setState({ loading: true }, console.log('loadMore render'));
        this.makeAPIRequest();
    }

    flipFollow = (AlbumID) => {
        const tempArray = this.state.data;
        // const indexOfAlbumID = tempArray.map(x => x.AlbumID).indexOf(AlbumID);

        tempArray.forEach((data, index) => {
            if (data.AlbumID === AlbumID) {
                tempArray[index].canRepost = !data.canRepost;
            } 
            return data;
        });
        this.setState({ data: tempArray }, console.log('flipFollow render'));
        // this.forceUpdate();
    }

    buttonFollow(canRepost, AlbumID) {
        const follow = canRepost;

        const textFollow = follow ? 'Following' : 'Follow';

        return (
            <TouchableOpacity 
                onPress={() => this.flipFollow(AlbumID)}
                style={follow ? styles.onFollow : styles.notFollow}
            >
                <Text 
                    style={follow ? { fontSize: 11, color: 'white', fontWeight: 'bold' } 
                                  : { fontSize: 11, color: colorFollow }} 

                > {textFollow} </Text>
            </TouchableOpacity>
        );
    }
    
    renderFooterEnd = () => {
        if (!this.state.loading) { return null; }
        return (
            <View 
                style={{ height: cardHeight, 
                         width: cardWidth, 
                         justifyContent: 'center', 
                         alignItems: 'center' }} 
            >
                <ActivityIndicator 
                    animating
                    size={'small'} 
                    color={'blue'}
                />
            </View>
        );
    }

    renderRow = (item) => {
        const { AlbumCover, AlbumName, MomentDate, AlbumID, canRepost } = item.item;

        return (
            <CardUI style={[{ height: cardHeight, width: cardWidth, borderRadius: 0 }]}>
            
                <View style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <Image 
                        source={{ uri: AlbumCover }} 
                        style={{ flex: 3 }} 
                        resizeMode={'cover'}
                    />
                    <View 
                        style={{ height: 25, 
                                 width: '100%', 
                                 alignItems: 'flex-end', 
                                 paddingTop: 5 }} 
                    >
                    {this.buttonFollow(canRepost, AlbumID)}
                    </View>
                    <Text 
                        numberOfLines={3}
                        ellipsizeMode={'tail'}
                        style={{ flex: 1, 
                                color: 'black', 
                                backgroundColor: 'transparent', 
                                marginTop: 10 }}
                    > 
                        {AlbumName} 
                    </Text>
                    
                    <Text style={{ textAlign: 'right', color: 'darkslategrey', fontSize: 11 }} >
                        {MomentDate} 
                    </Text>
                </View>
            
            </CardUI>
        );
    }
    
    render() {
        // console.log('render');
        return (
            <View style={{ flex: 1 }}>
                <FlatList 
                    horizontal
                    removeClippedSubviews
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={(rowData) => this.renderRow(rowData)}
                    keyExtractor={item => item.AlbumID}
                    ListFooterComponent={this.renderFooterEnd}
                    onEndReached={this.loadMore}
                    //onEndReachedThreshold={5} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    onFollow: {
        height: 25, 
        width: 70, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderRadius: 15,
        borderColor: 'white',
        backgroundColor: colorFollow,
    },
    notFollow: {
        height: 25, 
        width: 70, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: colorFollow,
        borderRadius: 15
    }
});

export default ScreenHorizontal;
