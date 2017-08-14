import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

import { Metrics } from '../../Themes';

const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');
const icon1 = require('../images/icon1.png');
const icon2 = require('../images/icon2.png');

class Screen extends Component {

  render() {
    const { 
      container, 
      topSection,  
      imageTopSection, 
      imageCircle,
      curveLine,
      twoIcon,
      circleIcon
    } = styles;

    return (
      <View style={container}>
        <View style={topSection}>
          <Image source={testPicture} style={imageTopSection} />
          
        </View>
        <Image style={imageCircle} source={testPicturePotrait} /> 
        <View style={curveLine} />
        
        <View style={twoIcon}>
          <Image style={circleIcon} source={icon1} />
          <Image style={circleIcon} source={icon2} />
        </View>
        <Text> test </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgrey',
      alignItems: 'center'
    },
    topSection: {
      width: '100%',
      height: 400,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingBottom: 50,
    },
    bottomSection: {
      alignItems: 'center',
      borderColor: 'orange',
      borderWidth: 1,
      width: Metrics.screenWidth,
      height: 200,
      borderRadius: Metrics.screenWidth / 2,
      borderBottomColor: 'transparent',
      transform: [
        { scaleX: 2 }
      ]

    },
    imageTopSection: {
      height: '100%',
      width: '100%'
    },
    imagePlaceholder: {
      alignItems: 'center',
      borderColor: 'blue',
      borderWidth: 1,
      height: 10,
      // justifyContent: 'center',
    },
    imageCircle: {
      position: 'absolute',
      borderColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      top: 150,
      height: 160,
      width: 160,
      borderRadius: 80,
      borderWidth: 1,
      zIndex: 1000,
      // transform: [
      //   { translateY: 50 },
      // ]
    },
    circleIcon: {
      height: 80,
      width: 80,
      borderRadius: 40,
      borderWidth: 1,
      borderColor: 'blue',
      backgroundColor: 'grey'
    },
    curveLine: {
      borderWidth: 1, 
      borderColor: 'black', 
      backgroundColor: 'white',
      height: '100%',
      width: '100%',
      borderTopRightRadius: 300,
      borderTopLeftRadius: 300,
      transform: [
        { translateY: -175 },
        { scaleX: 2 }
      ]
    },
    twoIcon: {
      top: 250,
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',

    }
});

export default Screen;
