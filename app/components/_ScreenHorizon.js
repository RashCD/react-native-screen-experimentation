/* global fetch:false */
import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    ListView,
    FlatList, 
    TouchableOpacity,
    ActivityIndicator 
} from 'react-native';

const picWidth = 200;
const picHeight = 100;

export const loadMore = () => {
    this.setState({
        page: this.state.page + 1
    }, () => {
        this.makeAPIRequest();
    });
};

export const reachTheEnd = (props) => {
    this.setState({ loadMore: true });
    this.loadMore();
};

export const renderFooterEnd = (props) => {
    if (!props.loading) return null;
      return (
        <View style={{ height: picHeight, width: picWidth, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator 
            animating
            size={'small'} 
            color={'blue'}
          />
        </View>
      );
};

const ScreenHorizon = (data, props) => {
    return (
        <View style={{ flex: 1 }}>
            <FlatList 
                horizontal
                data={data}
                renderItem={({ item }) => this.renderRow(item)}
                keyExtractor={item => item.email}
                ListFooterComponent={this.renderFooterEnd(props)}
                onEndReached={this.loadMore(props)}
                onEndReachedThreshold={0}
            />
        </View>
    );
};

export default ScreenHorizon;
