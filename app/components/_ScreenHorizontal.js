/* global fetch:false */
/*eslint quote-props: ["error", "as-needed", { "keywords": true, "unnecessary": false }]*/
import React, { PureComponent } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Animated } from 'react-native';

import Animation from 'lottie-react-native';

import CardUI from './_ScreenHorizontalCard';

import TwitterHeart from '../../animations/TwitterHeart.json';

const cardHeight = 300;
const cardWidth = 200;
const colorFollow = 'royalblue';

class ScreenHorizontal extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            progress: new Animated.Value(0)
        };

        this.page = 1;

        this.API = props.propUrl;

        this.API_OBJ = props.propObj;

        this.isShowingAnimation = false;
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.makeAPIRequest();
    }

    // shouldComponentUpdate = (nextProps, nextState) => nextState.data !== this.state.data;

    // shouldItemUpdate = (nextProps, nextState) => nextState.data !== this.state.data;

    getItemLayout = (data, index) => ({ length: cardHeight, offset: cardHeight * index, index });

    setAnim = anim => (this.anim = anim);

    makeAPIRequest = () => {
        const API_ENDPOINT = this.API;

        const object = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                CategoryID: this.API_OBJ.CategoryID,
                CategoryTypeID: this.API_OBJ.CategoryTypeID,
                ProfileID: '1081',
                Page: this.page,
                Size: '5',
                Languages: ['en'],
                isMicroApp: false,
                MicroAppProfileID: null
            })
        };

        fetch(API_ENDPOINT, object)
            .then(res => res.json())
            .then(res => {
                const { Items } = res.Result;

                this.setState(
                    {
                        data: [...this.state.data, ...Items],
                        error: res.error || null,
                        loading: false,
                        refreshing: false
                    },
                    console.log('makeAPIRequest render')
                );
            })
            .catch(error => {
                this.setState({ error, loading: false });
                console.log(error);
            });

        this.page += 1;
    };

    finishedAnim = () => {
        this.state.progress.setValue(0);
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 1000
        }).start(({ finished }) => {
            if (finished) {
                this.isShowingAnimation = false;
                this.forceUpdate();
                this.makeAPIRequest();
            }
        });
    };

    flipFollow = AlbumID => {
        const tempArray = this.state.data;

        tempArray.forEach((data, index) => {
            if (data.AlbumID === AlbumID) {
                tempArray[index].canRepost = !data.canRepost;
            }
            return data;
        });
        this.setState({ data: tempArray }, () => {
            this.forceUpdate();
        });
    };

    buttonFollow = (canRepost, AlbumID) => {
        const follow = canRepost;

        const textFollow = follow ? 'Following' : 'Follow';

        return (
            <TouchableOpacity
                onPress={() => this.flipFollow(AlbumID)}
                style={follow ? styles.onFollow : styles.notFollow}
            >
                <Text
                    style={
                        follow
                            ? { fontSize: 11, color: 'white', fontWeight: 'bold' }
                            : { fontSize: 11, color: colorFollow }
                    }
                >
                    {' '}
                    {textFollow}{' '}
                </Text>
            </TouchableOpacity>
        );
    };

    renderFooterEnd = () => {
        const animationSection = (
            <View
                style={{
                    height: cardHeight,
                    width: cardWidth
                }}
            >
                <Animation
                    ref={this.setAnim}
                    style={{
                        height: 200,
                        width: cardWidth,
                        marginTop: 20
                    }}
                    source={TwitterHeart}
                    progress={this.state.progress}
                    enableMergePathsAndroidForKitKatAndAbove
                />
            </View>
        );

        // if (!this.isShowingAnimation) {
        //     animationSection = <View />;
        // }

        return <View>{animationSection}</View>;
    };

    renderRow = item => {
        const { AlbumCover, AlbumName, MomentDate, AlbumID, canRepost } = item.item;

        return (
            <CardUI style={[{ height: cardHeight, width: cardWidth, borderRadius: 0 }]}>
                <View style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
                    <Image source={{ uri: AlbumCover }} style={{ flex: 3 }} resizeMode={'cover'} />
                    <View
                        style={{
                            height: 25,
                            width: '100%',
                            alignItems: 'flex-end',
                            paddingTop: 5
                        }}
                    >
                        {this.buttonFollow(canRepost, AlbumID)}
                    </View>
                    <Text
                        numberOfLines={3}
                        ellipsizeMode={'tail'}
                        style={{
                            flex: 1,
                            color: 'black',
                            backgroundColor: 'transparent',
                            marginTop: 10
                        }}
                    >
                        {AlbumName}
                    </Text>

                    <Text style={{ textAlign: 'right', color: 'darkslategrey', fontSize: 11 }}>
                        {MomentDate}
                    </Text>
                </View>
            </CardUI>
        );
    };

    render() {
        // console.log('render');
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    horizontal
                    removeClippedSubviews
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={rowData => this.renderRow(rowData)}
                    keyExtractor={item => item.AlbumID}
                    ListFooterComponent={this.renderFooterEnd}
                    onEndReached={() => this.state.progress.setValue(0)}
                    onEndReachedThreshold={0.5}
                    onMomentumScrollEnd={this.finishedAnim}
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
        backgroundColor: colorFollow
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
