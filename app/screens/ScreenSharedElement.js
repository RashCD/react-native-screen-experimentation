import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ListView, TouchableOpacity } from 'react-native';

import { SharedElementTransition } from 'react-native-navigation';

const dataLists = [1, 2, 3, 4, 5, 6];

class Screen extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(dataLists)
        };
    }

    pressElement = rowID => {
        console.log('pressed');
        console.log(rowID);
        this.props.navigator.push({
            screen: 'Screen14',
            sharedElements: [`sharedImageId${rowID}`],
            passProps: {
                rowID
            }
        });
    };

    renderRow(rowID) {
        return (
            <SharedElementTransition
                sharedElementId={`sharedImageId${rowID}`}
                style={{ width: 200, height: 100 }}
            >
                <TouchableOpacity
                    style={{ height: 100, width: 200 }}
                    onPress={() => this.pressElement(rowID)}
                >
                    <Image
                        style={{ flex: 1 }}
                        source={{
                            uri: 'https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/flip.jpg'
                        }}
                    />

                    <Text> Doggo {rowID} </Text>
                </TouchableOpacity>
            </SharedElementTransition>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData, sectionID, rowID) => this.renderRow(rowID)}
            />
        );
    }
}

export default Screen;
