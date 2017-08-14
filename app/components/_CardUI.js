import React from 'react';
import { 
  Text, 
  View,
  StyleSheet, 
  Platform,
  Image,
} from 'react-native';

import { randomColor } from '../library/RandomColor';


const cardUI = ({ dataFromUrl }) => {
    const colorForStyle = randomColor(220);
    const { 
        avatar_url,
        login,
    } = dataFromUrl.owner; 
    const { card, cardGap, cardImage, cardTitle } = styles;
        
    return (
        <View style={[card, { backgroundColor: colorForStyle }]}>
            <View style={cardGap}>
                <Image 
                    resizeMode="cover"
                    source={{ uri: avatar_url }}
                    style={cardImage}
                />
                <Text numberOfLines={1} style={cardTitle}>{login}</Text>  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        margin: 10,
        borderRadius: 20,
        borderColor: '#ffffff',
        borderWidth: 1,
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(0, 0, 0)',
                shadowOpacity: 0.3,
                shadowRadius: 3,
                shadowOffset: {
                height: 1,
                width: 1,
                },
            },
            android: {
                elevation: 5,
            },
        }),
    },
    cardGap: {
        height: 150,
        width: 150,
        padding: 5,
        paddingBottom: 30,
    }, 
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'lightgrey',
        backgroundColor: 'rgba(0,0,0,0)',
        overflow: 'hidden',
    },
    cardTitle: {
        textAlign: 'center', 
        color: 'black',
        textShadowOffset: { 
            width: 0.5, 
            height: 1 
        },
    },
});

export default cardUI;
