import React, { Component } from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const DeviceInfo = require('react-native-device-info');

class Screen extends Component {

    deviceInfo = () => {
        console.log('Device Unique ID', DeviceInfo.getUniqueID());
    }

    render() {
        const { 
            mainContainer,  
            borderDev,
        } = styles;

        return (
            <View style={[mainContainer, borderDev]}>
                {this.deviceInfo()}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },

    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default Screen;
