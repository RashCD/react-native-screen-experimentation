import React, { Component } from 'react';

import { 
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
 
class testFlatlist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            selected: []
        };

        this.addedScroll = 0;
    }

    componentDidMount() {
        const constructArray = Array.from(Array(1000)).map((data, index) => {
            return { id: index, selected: true };
        });
        this.setState({ data: constructArray });
    }

    onPress = (id) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
        // copy the map rather than modifying state.
            const selected = [...state.data];
            selected[id].selected = !selected[id].selected;
            return { selected };
        });
    };

    getItemLayout = (data, index) => (
        { length: 40, offset: 40 * index, index }
    )

    scrollOffSet = () => {
        console.log('here');
        this.addedScroll += 500;
        this.flatList.scrollToOffset({
            animated: true, //can also be false
            offset: this.addedScroll, 
            // viewPosition: 0 //this is the first position that is currently attached to the window
        });
    }

    loadMore = () => {
        console.log('loadmore');
    }
    
    keyExtractor = (item, index) => item.id;

    touch = (item) => {
        const select = item.selected;
        return (
            <TouchableOpacity 
                style={[
                    { height: 40, width: 100, padding: 5 },
                    { borderRadius: 20, borderWidth: 1 },
                    { justifyContent: 'center', alignItems: 'center' },
                        select ? { borderColor: 'black' }
                                : { borderColor: 'white' }]}
                onPress={() => this.onPress(item.id)}
            >
                <Text 
                    style={[
                    { fontSize: 11, backgroundColor: 'transparent' }, 
                        select ? { fontWeight: 'bold', color: 'red' } 
                                : { color: 'black' }]}
                > 
                Index No. { item.id } 
                </Text>
            </TouchableOpacity>
        );
    }
    
    renderItem = ({ item }) => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View
                style={[
                       { height: 100, width: 200, margin: 10, backgroundColor: 'lightblue' },
                       { justifyContent: 'center', alignItems: 'center' }]}
            >
                {this.touch(item)}
            </View>
        </View>
        
    );
    
    render() {
        return (
            <View>
                <TouchableOpacity 
                    onPress={() => this.scrollOffSet()}
                    style={[
                        { height: 30, width: 100 },
                        { borderRadius: 20, borderWidth: 1, borderColor: 'black' },
                        { justifyContent: 'center', alignItems: 'center' }]}
                >
                    <Text>Click Here</Text>
                </TouchableOpacity>
                <FlatList
                    ref={(ref) => { this.flatList = ref; }}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    getItemLayout={this.getItemLayout}
                />
            </View>
            
        );
    }
}


export default testFlatlist;
