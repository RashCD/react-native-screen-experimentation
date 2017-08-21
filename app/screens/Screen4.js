import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, 
  Platform,
  Dimensions,
} from 'react-native';

const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
      floatCardContainer,
      floatCard,
      triangleBackground,
      topPart,
      middlePart,
      endPart,
      clickableButtonContainer,
      clickableButton,
      cardShadow,
      borderDev
    } = styles;

    const {
      textBasic,
      textBold,
    } = basic;

    return (
      <View style={container}>
        <Image source={testPicture} style={imageTopSection} >
          <View style={[floatCardContainer]}>

            <View style={[floatCard, cardShadow]}>
              <View style={[triangleBackground, cardShadow]} />
              <View style={middlePart} />
                <View style={[endPart]}>
                  <Text style={[textBold, { paddingLeft: 15 }]}> Susan Ledger </Text>
                  <Text style={[textBasic, { paddingLeft: 25 }]}> Writer, Curator, Fashion, Researcher </Text>

                  <View style={clickableButtonContainer}>
                    <TouchableOpacity style={[clickableButton]}> 
                      <Text style={textBasic}> + Add </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[clickableButton]} >
                      <Text style={textBasic}> Message </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={[{ justifyContent: 'center', alignItems: 'center', marginTop: 10, }]}>
                    <View style={[{ width: '90%', height: 40, justifyContent: 'center', borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'lightgrey' }]}>
                      <Text style={[textBasic, { textAlign: 'center' }]}> Mutual Friends </Text>
                    </View>
                  </View>

                </View>
            </View>
            <View style={iconFloat}>
                <Image 
                  style={circleIcon} 
                  source={testPicturePotrait} 
                  borderRadius={50} 
                  resizeMode="cover" 
                />
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const basic = {
  textBasic: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
  },
  textBold: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white'
    // alignItems: 'center'
  },
  imageTopSection: {
    // flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  topPart: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconFloat: {
    position: 'absolute',
    left: 40,
    top: 30,

    ...Platform.select({
      android: {
        elevation: 10,
      }
    })
  },
  circleIcon: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  floatCardContainer: {
    // backgroundColor: 'white',
    height: 400,
    width: '100%',
    // marginLeft: 20,
    // marginRight: 20,
    // marginBottom: 20,
  },
  floatCard: {
    // backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  triangleBackground: {
    width: '100%',
    height: 0,
    borderBottomWidth: 100,
    borderBottomColor: 'white',
    borderLeftWidth: (screenWidth - 40),
    borderLeftColor: 'transparent',
  },
  middlePart: {
    height: 40,
    backgroundColor: 'white',
  },
  endPart: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  clickableButtonContainer: {
    // alignItems: 'center',
    flexDirection: 'row', 
    width: '100%', 
    justifyContent: 'space-around', 
    marginTop: 15,
  },
  clickableButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'grey'
  },

  cardShadow: {
    ...Platform.select({
        ios: {
            shadowRadius: 4,
            shadowOffset: {
                width: 0, 
                height: 1,
            },
            shadowOpacity: 0.5,
            shadowColor: 'black',
            backgroundColor: 'transparent',
        },
        android: {
            // for android version 5.0+ only
            // backgroundColor: 'white',
            // elevation: 1,
        },
    }),
    
  },
  borderDev: {
    borderWidth: 1,
    borderColor: 'black',
},

});

export default Screen;
