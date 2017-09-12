import React, { Component } from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import ImageCircle from '../components/_ImageCircle';

const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');


class Screen extends Component {

    render() {
        const { 
            mainContainer,  
            circleImage,
            flip,
            rotateLeft,
            counterRotate,
            borderDev,
        } = styles;

        return (

            <ScrollView contentContainerStyle={mainContainer} horizontal >
                <View style={[{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }]}>
                    <View style={[rotateLeft, { top: 0 }]}>
                        <ImageCircle />
                        <ImageCircle />
                    </View>
                    <View style={[rotateLeft, { top: 0 }]}>
                        <ImageCircle />
                        <ImageCircle />
                        <ImageCircle />
                    </View>
                    <View style={[rotateLeft, { top: 0 }]}>
                        <ImageCircle />
                        <ImageCircle />
                    </View>
                    <View style={[rotateLeft]}>
                        <ImageCircle />
                        <ImageCircle />
                        <ImageCircle />
                    </View>
                    
                </View>
               
                
            </ScrollView>

        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    circleImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 10,
    },
    flip: {
        transform: [
            { scale: -1 },
        ]
    },
    rotateLeft: {
        // borderWidth: 1,
        // borderRadius: 1,
        transform: [
            { rotate: '-10deg' },
            // { translateY: -5 }
        ]
    },
    counterRotate: {
        transform: [
            { rotate: '-20deg' },
            // { translateY: -30 }
        ]
    },


    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
    
  });

export default Screen;
