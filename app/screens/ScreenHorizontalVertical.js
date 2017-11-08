import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { SharedElementTransition } from 'react-native-navigation';

import ScreenHorizontal from '../components/_ScreenHorizontal';

class Screen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadEndMore: true,
            isLoading: true,
            page: 1,
            data: []
        };

        this.urlAPI = 'https://gorgiasapp-v2.azurewebsites.net/api/mobile/v2/albums/filter/';
        this.obj = [
            {
                CategoryID: 5,
                CategoryTypeID: 1
            },
            {
                CategoryID: 6,
                CategoryTypeID: 1
            },
            {
                CategoryID: 10,
                CategoryTypeID: 1
            },
            {
                CategoryID: 12,
                CategoryTypeID: 2
            }
            // {
            //     CategoryID: 15,
            //     CategoryTypeID: 1
            // },
            // {
            //     CategoryID: 17,
            //     CategoryTypeID: 2
            // }
        ];
    }

    componentDidMount() {
        const arraySize = this.obj;
        this.arrayMultiplier(arraySize);
    }

    arrayMultiplier(arrayList) {
        const arr = arrayList;

        this.setState(
            {
                data: arr,
                isLoading: false,
                loadEndMore: false
            },
            console.log('parent RENDER')
        );
    }

    newClickedScreen = () => {
        this.props.navigator.push({
            screen: 'Screen22',
            sharedElements: ['SharedTextId']
        });
    };

    // es6 function start
    activityIndicatorCommon = () => (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator animating size={'small'} color={'blue'} />
        </View>
    );

    keyExtractor = (x, index) => index;

    renderHeader = () => (
        <View style={{ flex: 1, paddingTop: 25, paddingBottom: 25, alignItems: 'center' }}>
            <Text style={styles.text}> Listview Horizontal & Vertical </Text>
        </View>
    );

    renderFooterEnd = () => {
        if (this.state.loadEndMore) {
            return this.activityIndicatorCommon();
        }
        return null;
    };

    renderRow = rowID => (
        // console.log();
        <View style={{ flex: 1, marginLeft: 5, marginBottom: 15 }}>
            <Text style={styles.text}> Album {rowID.index + 1}</Text>
            <ScreenHorizontal
                propUrl={this.urlAPI}
                propObj={rowID.item}
                key={rowID.index}
                navigator={this.props.navigator}
            />
        </View>
    );

    render() {
        // console.log('RENDER');
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator animating size={'large'} color={'blue'} />
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.data}
                    renderItem={item => this.renderRow(item)}
                    keyExtractor={this.keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                    ListFooterComponent={this.renderFooterEnd}
                    onEndReached={this.reachTheEnd}
                    onEndReachedThreshold={5}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
});

export default Screen;
