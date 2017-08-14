import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Image, 
} from 'react-native';

const testPicture = require('../images/people.jpg');

class Screen extends Component {
  render() {
    const { 
      container,  
      imageTopSection, 
      topPart,
      endPart,
      boxContainer,
      box,
      basicInfoContainer,
      basicInfoView,
      basicInfoTextStyle,
      containerGeneral,
    } = styles;

    return (
      <View style={container}>
        <View style={topPart}>
          <Image 
            source={testPicture} 
            style={imageTopSection} 
          />
           {/* <View style={middlePart} /> */}
          
          <View style={containerGeneral} >
            <View style={basicInfoContainer} >
              <View style={basicInfoView} >
                <Text style={basicInfoTextStyle} > 350 </Text>
                <Text style={[basicInfoTextStyle, { fontSize: 15 }]}> Views </Text>
              </View>
              <View style={basicInfoView} >
                <Text style={basicInfoTextStyle} > 520 </Text>
                <Text style={[basicInfoTextStyle, { fontSize: 15 }]}> Followers </Text>
              </View>
              <View style={basicInfoView} >
                <Text style={basicInfoTextStyle} > 650 </Text>
                <Text style={[basicInfoTextStyle, { fontSize: 15 }]}> Likes </Text>
              </View>
            </View>
            <View style={boxContainer}>
              <View style={box} />
              <View style={[box, { transform: [{ scaleX: -1 }] }]} />
            </View>
          </View>
          
        </View> 
        <View style={endPart} />        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  imageTopSection: {
    height: '100%',
    width: '100%',
  },
  topPart: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  endPart: {
    flex: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  containerGeneral: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 'auto',

  },
  boxContainer: {
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 30,
  },
  box: {
    width: '50%',
    borderColor: 'transparent',
    borderBottomWidth: 10,
    borderTopWidth: 20,
    // borderLeftWidth: 100,
    // borderRightWidth: 10,
    borderLeftColor: 'white',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
  basicInfoContainer: {
    height: 100,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  basicInfoView: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  basicInfoTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: 'black',
    textShadowRadius: 5,
  },
  bottomInfoContainer: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 100
  },
  bottomInfoBox: {
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
  },


});

export default Screen;
