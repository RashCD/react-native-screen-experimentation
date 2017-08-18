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
            cardContainer,
            cardContent,
            cardContentImage,
            cardContentText,
            cardShadow,
            // borderDev, // for dev layout
        } = styles;

        return (
            <View style={[generalContainer]} >
                <View style={[cardContainer, cardShadow]} >
                    <View style={cardContent} >
                        <Image 
                            style={cardContentImage}
                            source={{ uri: imageSample }} 
                            resizeMode={'cover'}
                        />
                        <Text style={cardContentText}> Greate place for a picnic! </Text>
                        <CardRating />
                    </View>
                </View>

                <View style={[cardContainer, cardShadow]} >
                    <View style={cardContent} >
                        <Image 
                            style={cardContentImage}
                            source={{ uri: imageSample }} 
                            resizeMode={'cover'}
                        />
                        <Text style={cardContentText}> Greate place for a picnic! </Text>
                        <CardRating />
                    </View>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    cardContainer: {
        width: '90%',
        height: 200,
        borderRadius: 5,
        marginBottom: 20,
    },
    cardContent: { 
        flex: 1, 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        overflow: 'hidden'
    },
    cardContentImage: {
        width: '100%',
        height: '75%',
        ...Platform.select({
            android: {
                borderTopLeftRadius: 5, 
                borderTopRightRadius: 5, 
            },
        }),
    },
    cardContentText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        margin: 5,
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
    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default Screen;
