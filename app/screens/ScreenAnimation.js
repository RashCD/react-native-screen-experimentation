import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    ListView, 
    Dimensions,
    TouchableOpacity,
    Animated,
    ImageBackground,
    ScrollView,
    StyleSheet 
} from 'react-native';

const uriCats = 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';

const dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const ScreenSize = Dimensions.get('window');

class Screen extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows(dataLists),
          scrollY: new Animated.Value(0)
        };
    }

    renderScroll(props) {
        console.log(props);
        return (
          <Animated.ScrollView
            {...props}
            scrollEventThrottle={16}
            onScroll={
              Animated.event([{
                nativeEvent: { contentOffset: { y: this.state.scrollY } }
              }], {
                useNativeDriver: true
              })
            }
          />
        );
    }

    renderRow() {
        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity 
                    style={{ width: 200, height: 100, backgroundColor: 'lightblue' }}
                >

                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Animated.View
                    
                    style={[
                        { position: 'absolute', height: (ScreenSize.width / 750) * 800, width: ScreenSize.width }, 
                        { opacity: 
                            this.state.scrollY.interpolate({
                                inputRange: [0, ScreenSize.width, ScreenSize.height, 1000],
                                outputRange: [1, 0.9, 0.8, 0.7]
                            }),
                            transform: [{
                                scale: this.state.scrollY.interpolate({
                                    inputRange: [-300, 0, 1],
                                    outputRange: [1.4, 1, 1]
                                })
                            }]
                        }
                    ]}
                >
                    <ImageBackground 
                        source={{ uri: uriCats }}
                        resizeMode={'cover'}
                        style={{ width: '100%', height: '100%' }}
                    />
                        
                </Animated.View>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={() => this.renderRow()}
                    renderScrollComponent={() => this.renderScroll()}
                    renderHeader={() => <View style={{ paddingTop: 250 }} />}
                />
            </View>
        );
    }
}

export default Screen;
