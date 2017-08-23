import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableHighlight, 
 } from 'react-native';
// import Camera, { constants } from 'react-native-camera';

// const testPicture = require('../images/people.jpg');
// const testPicturePotrait = require('../images/potrait.jpg');

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

    // onPressIn() {
    //     setTimeout(this.takeVideo.bind(this), 100);
    // }
    
    // takeVideo() {
    //     this.camera.capture({
    //         target: constants.CaptureTarget.disk
    //       })
    //         .then(data => {
    //           console.log(data);
    //         })
    //         .catch(err => console.log(err));

    //     console.log('here');
    // }

    // stopVideo() {
    //     this.camera.stopCapture();
    // }

    render() {
        return (
            <View style={styles.container}>
                {/* <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={constants.Aspect.fill}
                    captureMode={constants.CaptureMode.video} 
                    captureTarget={constants.CaptureTarget.disk}
                >
                <TouchableHighlight
                    onPressIn={this.onPressIn.bind(this)}
                    onPressOut={this.stopVideo.bind(this)}
                >
                    <Text style={{ color: 'white' }}> Video </Text>
                </TouchableHighlight>
                </Camera> */}
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    }
});  


export default Screen;
