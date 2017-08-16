import React from 'react';
import { 
  View,
  StyleSheet, 
  Image,
} from 'react-native';

const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');

const imageCircle = () => {
    const {
        circleImage,
        counterRotate,
        borderDev,
    } = styles;
    return (
        <Image style={[circleImage]} source={testPicturePotrait} />
    );
};

const styles = StyleSheet.create({
    circleImage: {
        height: 60,
        width: 60,
        borderRadius: 30,
        margin: 10
    },
    counterRotate: {
        transform: [
            { rotate: '-20deg' }
        ]
    },
    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default imageCircle;
