import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity, 
} from 'react-native';

const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');

class Screen extends Component {

    static navigatorStyle = {
        ...Platform.select({
            ios: {
                drawUnderNavBar: true,
                navBarTranslucent: true,
                navBarTransparent: true,
                tabBarHidden: true,
                navBarTextColor: 'white'
            },
            android: {
                drawUnderNavBar: true,
                navBarTransparent: true,
                tabBarHidden: true,
            },
        }),
    };
  
  render() {
    const {  
      container,
      imageTopSection, 
      iconFloat,
      circleIcon,
      endPartContainer,
      endPart,
      endPartMarginText,
      buttonAdd,
      profileDetailsContainer,
      profileDetails,
      profileDetailsNumbers
    } = styles;

    const {
        text,
        cardShadow,
    } = base;

    return (
            <View style={container} >
                <ImageBackground source={testPicture} style={imageTopSection} >
                    <View style={endPartContainer} >
                        <View style={endPart}>
                            <View style={{ marginTop: 60 }}>
                                <Text style={endPartMarginText}> Neel Litoriya </Text>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row', margin: 5, paddingRight: 10, }} >
                                    <View>
                                        <Text style={text}> Photographer </Text>
                                        <Text style={text}> Photographer </Text>
                                    </View>
                                    <TouchableOpacity style={buttonAdd} >
                                        <Text style={{ color: 'white' }}> + ADD </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={profileDetailsContainer} >
                                    <TouchableOpacity style={profileDetails} >
                                        <Text style={text}> Views </Text>
                                        <Text style={profileDetailsNumbers}> 624 </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={profileDetails} >
                                        <Text style={text}> Followers </Text>
                                        <Text style={profileDetailsNumbers}> 142 </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={profileDetails} >
                                        <Text style={text}> Likes </Text>
                                        <Text style={profileDetailsNumbers}> 104 </Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </View> 
                        <View style={[iconFloat]}>
                            <Image 
                                style={circleIcon} 
                                source={testPicturePotrait} 
                                borderRadius={50} 
                                resizeMode="cover" 
                            />
                        </View>
                    </View>
                </ImageBackground>
            </View>
            
    );
  }
}

const base = {
    cardShadow: {
        ...Platform.select({
            ios: {
                shadowRadius: 4,
                shadowOffset: {
                    width: 0, 
                    height: 1,
                },
                shadowOpacity: 0.5,
                shadowColor: 'black'
            },
            android: {
                // for android version 5.0+ only
                backgroundColor: 'white',
                elevation: 5,
            },
        }),
        
    },
    text: {
        fontSize: 12,
        fontWeight: 'normal',
        color: 'black' 
    }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center'
  },
  imageTopSection: {
    // flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: 'black', 

  },
  topPart: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'flex-end',
  },
  triangleBackground: {
    position: 'absolute',
    bottom: 0,
    borderBottomWidth: 150,
    borderBottomColor: 'white',
    borderLeftWidth: 450,
    borderLeftColor: 'transparent',
  },
  endPartContainer: {
    alignItems: 'center',
    width: '100%',
  },
  endPart: {
    width: '90%',
    height: 210,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  endPartMarginText: {
    ...base.text,
    fontSize: 25, 
    fontWeight: 'bold', 
  },
  iconFloat: {
    position: 'absolute',
    top: 0,
    left: 30,
    zIndex: 1,
    transform: [
        { translateY: -50 },
    ]
    
  },
  circleIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  buttonAdd: {
    backgroundColor: 'black', 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, 
    height: 35, 
  },
  profileDetailsContainer: {
    marginTop: 15,
    flexDirection: 'row', 
    justifyContent: 'space-around' 
  },
  profileDetails: {
    width: 100, 
    height: 50, 
    alignItems: 'center', 
  },
  profileDetailsNumbers: {
    ...base.text,
    fontSize: 20,
    fontWeight: '400'
  }

});

export default Screen;
