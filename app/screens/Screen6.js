import React, { Component } from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

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
                <View style={[rotateLeft, { width: 200, height: 200, top: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute' }]}>
                    <View style={[circleImage, borderDev]} />
                    <View style={{ position: 'absolute' }} >

                        <View style={{ position: 'relative' }}>
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                            <View style={[circleImage, borderDev, { top: -3, left: -80 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                        </View>

                        <View style={[flip, { position: 'absolute' }]}>
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                            <View style={[circleImage, borderDev, { top: -3, left: -80 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                        </View>
                    </View>
                </View>
                <View style={[rotateLeft, { width: 200, height: 200, left: 133, top: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute' }]}>
                    <View style={[circleImage, borderDev]} />
                    <View style={{ position: 'absolute' }} >

                        <View style={{ position: 'relative' }}>
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                            <View style={[circleImage, borderDev, { top: -3, left: -80 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                        </View>

                        <View style={[flip, { position: 'absolute' }]}>
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                            <View style={[circleImage, borderDev, { top: -3, left: -80 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                        </View>
                    </View>
                </View>
                <View style={[rotateLeft, { width: 200, height: 200, left: 266, top: 100, justifyContent: 'center', alignItems: 'center', position: 'absolute' }]}>
                    <View style={[circleImage, borderDev]} />
                    <View style={{ position: 'absolute' }} >

                        <View style={{ position: 'relative' }}>
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                            <View style={[circleImage, borderDev, { top: -3, left: -80 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                        </View>

                        <View style={[flip, { position: 'absolute' }]}>
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -80 }]} />
                            <View style={[circleImage, borderDev, { top: 0, left: -40 }]} />
                        </View>
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
        borderRadius: 30
    },
    flip: {
        transform: [
            { scale: -1 },
        ]
    },
    rotateLeft: {
        transform: [
            { rotate: '25deg' }
        ]
    },
    counterRotate: {
        transform: [
            { rotate: '-25deg' }
        ]
    },


    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
    
  });

export default Screen;
