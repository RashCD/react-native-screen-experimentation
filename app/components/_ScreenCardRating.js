import React from 'react';
import { 
  View,
  Text,
  StyleSheet, 
} from 'react-native';

const cardRating = () => {
    const {
        textGeneral,
    } = styles;
    return (
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
            <Text style={textGeneral}> Circle here </Text>
            <Text style={textGeneral}> 4.2 / 5.0 </Text>
            <Text style={textGeneral}> * </Text>
            <Text style={textGeneral}> 1.3 KM NEARBY </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textGeneral: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
    },

    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default cardRating;
