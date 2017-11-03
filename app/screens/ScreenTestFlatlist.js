import React, { Component } from 'react';

import { View, Text, TextInput, FlatList, TouchableOpacity, Dimensions } from 'react-native';

const dimen = Dimensions.get('window');

class testFlatlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            selected: []
        };

        // this.indexScroll = 0;
        this.maxArray = 1000;
    }

    componentDidMount() {
        const constructArray = Array.from(Array(this.maxArray)).map((data, index) => ({
            id: index,
            selected: true
        }));
        this.setState({ data: constructArray });
        setTimeout(() => this.autoScroll(), 1000);
    }

    onPress = id => {
        // updater functions are preferred for transactional updates
        this.setState(state => {
            // copy the map rather than modifying state.
            const selected = [...state.data];
            selected[id].selected = !selected[id].selected;
            return { selected };
        });
    };

    getItemLayout = (data, index) => ({ length: 120, offset: 120 * index, index });

    autoScroll = indexScroll => {
        let indexToScroll = Number(indexScroll) || 0;

        if (indexToScroll >= this.maxArray) {
            indexToScroll = this.maxArray - 1;
        }

        // scroll offset
        this.flatList.scrollToOffset({
            animated: true,
            offset: 400
        });

        // scroll to index
        // this.flatList.scrollToOffset({
        //     animated: true,
        //     index: indexToScroll,
        //     viewPosition: 0
        // });
    };

    loadMore = () => {
        console.log('loadmore');
    };

    keyExtractor = item => item.id;

    touch = item => {
        const select = item.selected;
        return (
            <TouchableOpacity
                style={[
                    { height: 40, width: 100, padding: 5 },
                    { borderRadius: 20, borderWidth: 1 },
                    {
                        justifyContent: 'center',
                        alignItems: 'center'
                    },
                    select ? { borderColor: 'black' } : { borderColor: 'white' }
                ]}
                onPress={() => this.onPress(item.id)}
            >
                <Text
                    style={[
                        {
                            fontSize: 11,
                            backgroundColor: 'transparent'
                        },
                        select
                            ? {
                                  fontWeight: 'bold',
                                  color: 'red'
                              }
                            : { color: 'black' }
                    ]}
                >
                    Index No. {item.id}
                </Text>
            </TouchableOpacity>
        );
    };

    renderItem = ({ item }) => (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View
                style={[
                    {
                        height: 100,
                        width: 200,
                        margin: 10,
                        backgroundColor: 'lightblue'
                    },
                    { justifyContent: 'center', alignItems: 'center' }
                ]}
            >
                {this.touch(item)}
            </View>
        </View>
    );

    render() {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}
                >
                    {/* <TextInput
                        style={{ height: 40, width: '50%' }}
                        placeholder="Type your index to go to"
                        onChangeText={index => {
                            this.autoScroll(index);
                        }}
                    /> */}
                </View>

                <FlatList
                    ref={ref => {
                        this.flatList = ref;
                    }}
                    data={this.state.data}
                    extraData={this.state}
                    keyExtractor={this.keyExtractor}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    getItemLayout={this.getItemLayout}
                    ListFooterComponent={() => <View style={{ height: dimen.height * (2 / 3) }} />}
                />
            </View>
        );
    }
}

export default testFlatlist;
