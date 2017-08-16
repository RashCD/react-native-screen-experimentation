import React, { Component } from 'react';
import {
  View, 
  Text,
  StyleSheet,
  Image, 
  Platform,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


const testPicture = require('../images/people.jpg');
const testPicturePotrait = require('../images/potrait.jpg');

class Screen extends Component {

    static navigatorStyle = {
        ...Platform.select({
            ios: {
                drawUnderNavBar: true,
                navBarTranslucent: true,
                navBarTransparent: true,
                navBarTextColor: 'white',
            },
            android: {
                drawUnderNavBar: true,
                navBarTransparent: true,
                navBarTextColor: 'white',
            },
        }),
    };

  render() {
    const { 
      container,  
      imageTopSection, 
      linearGradient,
      containerGeneral,
      topPart,
      middlePart,
      middlePartDescription,
      middlePartImage,
      middlePartImageText,
      endPart,
      textEndContainer,
      textEndPart,
      buttonEndPartStyle,
      textShadow,
    } = styles;

    return (
    
      <View style={container}>
        <Image 
            source={testPicturePotrait} 
            style={imageTopSection} 
            resizeMode={'cover'}
        > 
            <LinearGradient  
                colors={['transparent', 'black', 'black']} 
                locations={[0.3, 0.9, 1.3]} 
                style={linearGradient} 
            />
        </Image> 
        
         <View style={containerGeneral} >
            <View style={topPart} />
            <View style={middlePart} >
                <View style={middlePartDescription} >
                    <Text style={[textShadow, { color: 'white', fontSize: 35 }]} > Jeniffer </Text>
                    <Text 
                        style={[textShadow, { color: 'burlywood', fontSize: 13 }]} 
                    > Ajax Developer </Text>
                </View>
                <View style={middlePartImage} >
                    <View style={middlePartImageText} >
                        <Text 
                            style={{ fontSize: 30, fontWeight: 'bold', color: 'burlywood' }}
                        >36</Text>
                        <Text>Posts</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Image 
                            style={{ marginRight: 20, 
                                     height: 180, 
                                     width: 180, 
                                     overflow: 'hidden' }} 
                                     
                            source={testPicture} 
                            borderRadius={10}
                            resizeMode={'cover'}
                        />
                        <Image 
                            style={{ height: 180, 
                                     width: 180, 
                                     borderColor: 'black', 
                                     borderRadius: 10 }} 

                            source={testPicture} 
                            borderRadius={10} 
                        />
                    </View>
                </View>
            </View>
            <View style={endPart} >
                <View style={textEndContainer}>
                    <Text style={textEndPart} > 2041 </Text>
                    <Text 
                        style={[textEndPart, 
                        { fontSize: 15, fontWeight: '300', color: 'orange' }]}
                    > Following </Text>
                </View>
                <View style={textEndContainer}>
                    <Text style={textEndPart} > 302K </Text>
                    <Text 
                        style={[textEndPart, 
                        { fontSize: 15, fontWeight: '300', color: 'orange' }]}
                    > Followers </Text>
                </View>
                <View style={textEndContainer}>
                    <TouchableOpacity onPress={() => {}} style={buttonEndPartStyle} >
                        <Text style={{ color: 'black', fontWeight: 'bold' }}> Following </Text>
                    </TouchableOpacity>
                </View>
                <View style={[textEndContainer, { width: 50 }]}>
                    <TouchableOpacity 
                        style={[buttonEndPartStyle, 
                        { height: 30, width: 42, backgroundColor: 'white' }]} 
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold' }}> Text </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    linearGradient: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    container: {
        flex: 1,
        // alignItems: 'center'
    },
    imageTopSection: {
        height: '100%',
        width: '100%',
    },
    containerGeneral: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    topPart: {
        height: '40%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    middlePart: {
        width: '100%',
        height: '47%',
        
    },
    middlePartDescription: {
        height: '30%',
        paddingRight: 30,
        alignItems: 'flex-end'
    },
    middlePartImage: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    middlePartImageText: {
        height: 70, 
        width: 50, 
        backgroundColor: 'white', 
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    endPart: {
        height: '13%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    textEndContainer: {
        width: 100,
        alignItems: 'center',
    },
    textEndPart: {
        fontSize: 25,
        fontWeight: 'bold',
        ...Platform.select({
            ios: {
                color: 'white',
                backgroundColor: 'transparent',
            },
            android: {
                color: 'white',
            },
        }),
    },
    buttonEndPartStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 100,
        backgroundColor: 'burlywood',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff'
    },
    textShadow: {
        backgroundColor: 'transparent',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowColor: 'black',
        textShadowRadius: 1,
    },
    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
  

});

export default Screen;
