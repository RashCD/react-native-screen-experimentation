import React, { Component } from 'react';
import {
  View, 
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from 'react-native';


const imageSample = 'https://res.cloudinary.com/demo/image/upload/w_500/sample.jpg';


class Screen extends Component {

    render() {
        const {
            generalContainer,
            cardContainer,
            cardContent,
            cardProfileSection,
            cardContentImage,
            cardContentText,
            cardShadow,
            profileImage,
            text,
            borderDev, // for dev layout
        } = styles;

        return (
            <View style={[generalContainer]} >
                <View style={[cardContainer, cardShadow, { height: 'auto', alignItems: 'center' }]} >

                    <View style={[{ width: '100%', height: 30, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }]} > 
                        <Text> Hamburger Icon </Text>
                        <Text> Search Icon </Text>
                    </View>

                    {/* profile start here */}
                    <View style={[cardContent]}>
                        <View style={[cardProfileSection]}>
                            <View style={{ flexDirection: 'row' }} >
                                <Image style={profileImage} source={{ uri: imageSample }} />
                                <View style={{ marginLeft: 5 }} >
                                    <Text style={[text, { fontWeight: 'bold' }]}> Allan </Text>
                                    <Text style={{ color: 'grey', fontSize: 12 }}> 2 Hours Ago </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ borderColor: 'black', borderWidth: 1, width: 80, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={[text, { fontSize: 15, fontWeight: 'bold' }]}> Follow </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[{ width: '100%', height: 'auto', paddingBottom: 15 }]} >
                            <View style={{ flexDirection: 'row' }} >
                                <Image 
                                    style={{ height: 150, width: 250, }}
                                    source={{ uri: imageSample }} 
                                    resizeMode={'cover'}
                                />
                            </View>
                            <Text style={[cardContentText]}> The Principle minimal Design </Text>
                            <Text style={[text, { paddingLeft: 2 }]}> brings aline </Text>
                        </View>
                        <View style={{ width: '100%', borderBottomColor: 'grey', borderBottomWidth: 0.5, }} />
                    </View>
                    {/* end here */}

                    <View style={[cardContent]}>
                        <View style={[cardProfileSection]}>
                            <View style={{ flexDirection: 'row' }} >
                                <Image style={profileImage} source={{ uri: imageSample }} />
                                <View style={{ marginLeft: 5 }} >
                                    <Text style={[text, { fontWeight: 'bold' }]}> Allan </Text>
                                    <Text style={{ color: 'grey', fontSize: 12 }}> 2 Hours Ago </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={{ borderColor: 'black', borderWidth: 1, width: 80, height: 30, justifyContent: 'center', alignItems: 'center' }} >
                                <Text style={[text, { fontSize: 15, fontWeight: 'bold' }]}> Follow </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[{ width: '100%', height: 'auto', paddingBottom: 15 }]} >
                            <View style={{ flexDirection: 'row' }} >
                                <Image 
                                    style={{ height: 150, width: 250, }}
                                    source={{ uri: imageSample }} 
                                    resizeMode={'cover'}
                                />
                            </View>
                            <Text style={[cardContentText]}> The Principle minimal Design </Text>
                            <Text style={[text, { paddingLeft: 2 }]}> brings aline </Text>
                        </View>
                        <View style={{ width: '100%', borderBottomColor: 'grey', borderWidth: 1, }} />
                    </View>
                   
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        // alignItems: 'center',
        margin: 20,
        // backgroundColor: 'black'
    },
    cardContainer: {
        width: '100%',
        // height: 200,
        padding: 10
    },
    cardContent: { 
        height: 'auto',
        width: '100%', 
        overflow: 'hidden',
        alignItems: 'center',
        paddingTop: 10,
    },
    cardProfileSection: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%', 
        height: 60, 
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
        fontWeight: 'bold',
        color: 'black',
        paddingTop: 5,
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
    profileImage: {
        // marginLeft: 10,
        width: 40,
        height: 40,
    },
    text: {
        color: 'black'
    },


    borderDev: {
        borderWidth: 1,
        borderColor: 'black',
    },
});

export default Screen;
