import React, { Component } from 'react';

import { View, Text, Dimensions, Animated, StyleSheet, Easing } from 'react-native';

import Animation from 'lottie-react-native';

import PlayerControls from '../components/_ScreenPlayerControl';

import TwitterHeart from '../../animations/TwitterHeart.json';

const dimen = Dimensions.get('window');

const makeExample = (name, getJson) => ({ name, getJson });

const EXAMPLES = [makeExample('Twitter Heart', () => TwitterHeart)].reduce((acc, e) => {
    // eslint-disable-next-line no-param-reassign
    acc[e.name] = e;
    return acc;
}, {});

class testFlatlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            example: Object.keys(EXAMPLES)[0],
            progress: new Animated.Value(0),
            config: {
                duration: 3000,
                imperative: false
            },
            animShowing: false
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onPlayPress = this.onPlayPress.bind(this);
        this.onResetPress = this.onResetPress.bind(this);
        this.setAnim = this.setAnim.bind(this);

        setTimeout(() => {
            this.setState({ animShowing: true });
            this.onPlayPress();
        }, 10000);
        // setTimeout(() => this.onPlayPress(), 10);
    }

    onValueChange(value) {
        this.state.progress.setValue(value);
    }

    onPlayPress() {
        if (this.state.config.imperative) {
            this.anim.play();
        } else {
            this.state.progress.setValue(0);
            Animated.timing(this.state.progress, {
                toValue: 1,
                duration: this.state.config.duration,
                easing: Easing.linear
            }).start(({ finished }) => {
                if (finished) this.forceUpdate();
            });
        }
    }

    onResetPress() {
        if (this.state.config.imperative) {
            this.anim.reset();
        } else {
            this.state.progress.setValue(1);
            Animated.timing(this.state.progress, {
                toValue: 0,
                duration: this.state.config.duration,
                easing: Easing.linear
            }).start(({ finished }) => {
                if (finished) this.forceUpdate();
            });
        }
    }

    setAnim(anim) {
        this.anim = anim;
    }

    render() {
        let playerWindow = (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 10
                }}
            >
                <View>
                    <Animation
                        ref={this.setAnim}
                        style={{
                            width: 200,
                            height: 200
                        }}
                        source={TwitterHeart}
                        progress={this.state.progress}
                        enableMergePathsAndroidForKitKatAndAbove
                    />
                </View>
            </View>
        );

        if (!this.state.animShowing) {
            playerWindow = (
                <View>
                    <Text> Will be showing twitter heart </Text>
                </View>
            );
        }

        return <View style={{ height: '50%', width: '100%' }}>{playerWindow}</View>;
    }
}

export default testFlatlist;
