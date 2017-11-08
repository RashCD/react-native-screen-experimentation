import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { randomColor } from '../library/RandomColor';

const CardHorizontalUI = props => {
    // const colorForStyle = randomColor(220);

    const { style, children } = props;
    const { card, cardGap } = styles;

    return (
        <View style={[card, style, { backgroundColor: 'lightgrey' }]}>
            <View style={cardGap}>{children}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 300,
        margin: 10,
        borderRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: 'rgb(0, 0, 0)',
                shadowOpacity: 0.5,
                shadowRadius: 3,
                shadowOffset: {
                    height: 1,
                    width: 1
                }
            },
            android: {
                elevation: 5
            }
        })
    },
    cardGap: {
        height: '100%',
        width: '100%',
        padding: 5
    },
    cardImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'lightgrey',
        backgroundColor: 'rgba(0,0,0,0)',
        overflow: 'hidden'
    },
    cardTitle: {
        textAlign: 'center',
        color: 'black',
        textShadowOffset: {
            width: 0.5,
            height: 1
        }
    }
});

export default CardHorizontalUI;
