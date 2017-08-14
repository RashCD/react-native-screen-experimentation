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

    render() {
        <LinearGradient colors={['red', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                Sign in with Facebook
            </Text>
        </LinearGradient>

    }

};