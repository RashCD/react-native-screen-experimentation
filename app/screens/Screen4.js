import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image 
} from 'react-native';

const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');

class Screen extends Component {
  
  render() {
    const { 
      container,  
      imageTopSection, 
      iconFloat,
      circleIcon,
      triangleBackground,
      topPart,
      middlePart,
      endPart
    } = styles;

    return (
      <View style={container}>
        <View style={topPart}>
          <Image source={testPicture} style={imageTopSection} />
          <View style={triangleBackground} />
          <View style={iconFloat}>
            <Image 
              style={circleIcon} 
              source={testPicturePotrait} 
              borderRadius={50} 
              resizeMode="cover" 
            />
          </View>
        </View> 
        
        <View style={middlePart} />
        <View style={endPart} >
          <Text style={{ paddingLeft: 15, fontSize: 25, fontWeight: 'bold', color: 'black' }}> Susan Ledger </Text>
          <Text style={{ paddingLeft: 25, fontSize: 15, fontWeight: 'normal', color: 'black' }}> Writer, Curator, Fashion, Researcher </Text>
        </View>
        
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
    width: '100%'
  },
  topPart: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconFloat: {
    position: 'absolute',
    left: 20,
    top: 180,
    
  },
  circleIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'blue',
  },
  triangleBackground: {
    position: 'absolute',
    bottom: 0,
    borderBottomWidth: 150,
    borderBottomColor: 'white',
    borderLeftWidth: 450,
    borderLeftColor: 'transparent',
  },
  middlePart: {
    flex: 0.1,
    backgroundColor: 'transparent',
  },
  endPart: {
    flex: 2,
    width: '100%',
    backgroundColor: 'white',
  }

});

export default Screen;
