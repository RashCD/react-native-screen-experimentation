import React, { Component } from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

import CardRating from '../components/_ScreenCardRating';

const imageSample = 'https://res.cloudinary.com/demo/image/upload/w_500/sample.jpg';


class Screen extends Component {

    render() {
        const {
            generalContainer,
            cardContent,
            cardContentImage,
            cardContentText,
            cardShadow,
        } = styles;

        return (
            <View style={[generalContainer]} >
                <View style={[cardContent, cardShadow]} >
                    <Image 
                        style={[cardContentImage]} 
                        source={{ uri: imageSample }} 
                        resizeMode={'cover'}
                    />
                    <Text style={cardContentText}> Greate place for a picnic! </Text>
                    <CardRating />
                </View>

                {/* ignore below section for listview */}
                <View style={[cardContent, cardShadow]} >
                    <Image 
                        style={[cardContentImage]} 
                        source={{ uri: imageSample }} 
                        resizeMode={'cover'}
                    />
                    <Text style={cardContentText}> Mystic Falls! </Text>
                    <CardRating />
                </View>
                {/* untill here */}

            </View>
        );
    }

}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    cardContent: {
        width: '90%',
        height: 200,
        marginBottom: 15,
    },
    cardContentImage: {
        width: '100%',
        height: '70%',
    },
    cardContentText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        margin: 7,
        marginBottom: 5,
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
                shadowColor: 'black'
            },
            android: {
                // for android version 5.0+ only
                backgroundColor: 'white',
                elevation: 5,
            },
        }),
        
    },
});

export default Screen;
