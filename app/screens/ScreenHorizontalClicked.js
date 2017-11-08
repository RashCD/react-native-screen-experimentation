import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';

import { SharedElementTransition } from 'react-native-navigation';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    render() {
        // console.log('render');
        const { AlbumCover, AlbumName, MomentDate, AlbumID, canRepost } = this.props.AllItems;
        const { text } = styles;
        return (
            <View style={{ flex: 1 }}>
                <SharedElementTransition
                    sharedElementId={`sharedImageId${AlbumID}`}
                    showDuration={500}
                    hideDuration={400}
                    showInterpolation={{
                        type: 'linear',
                        easing: 'FastOutSlowIn'
                    }}
                    hideInterpolation={{
                        type: 'linear',
                        easing: 'FastOutSlowIn'
                    }}
                >
                    <Image style={{ height: 300, width: '100%' }} source={{ uri: AlbumCover }} />
                </SharedElementTransition>
                <Text style={text}> {AlbumName} </Text>
                <Text style={text}> {MomentDate} </Text>
                <Text style={text}> {canRepost} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 13
    }
});

export default Screen;
