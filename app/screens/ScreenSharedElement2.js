import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { SharedElementTransition } from 'react-native-navigation';

import * as Animatable from 'react-native-animatable';

class Screen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 'bounceInUp'
        };

        // this.props.navigator.setOnNavigatorEvent(this.setOnNavigatorEvent.bind(this));
    }

    // onNavigatorEvent(event) {
    //     if (event.id === 'backPress') {
    //         this.alternate();
    //     }
    // }

    // alternate() {
    //     this.setState({
    //         counter: !this.state.counter
    //     });

    //     if (this.state.counter) {
    //         return 'bounceInUp';
    //     }
    // }

    pressElement = () => {
        console.log('pressed');
        this.props.navigator.push({
            screen: 'Screen13',
            sharedElements: [`sharedImageId${this.props.rowID}`]
        });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SharedElementTransition
                    sharedElementId={`sharedImageId${this.props.rowID}`}
                    showDuration={500}
                    hideDuration={500}
                    showInterpolation={{
                        type: 'path',
                        controlX1: '5',
                        controlY1: '-0.1',
                        controlX2: '5',
                        controlY2: '-0.1',
                        easing: 'fastOutSlowIn'
                    }}
                    hideInterpolation={{
                        type: 'path',
                        controlX1: '5',
                        controlY1: '-0.1',
                        controlX2: '5',
                        controlY2: '-0.1',
                        easing: 'fastOutSlowIn'
                    }}
                >
                    <Image
                        style={{ height: 200, width: 200 }}
                        source={{
                            uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg'
                        }}
                    />
                </SharedElementTransition>
                <Text> Doggo {this.props.rowID} </Text>
                <Animatable.Text
                    animation={'bounceInUp'}
                    easing={'ease-in-out'}
                    direction="alternate"
                    delay={300}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </Animatable.Text>
            </View>
        );
    }
}

export default Screen;
