import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    ListView, 
    Dimensions,
    TouchableOpacity,
    Animated,
    ScrollView,
    StyleSheet 
} from 'react-native';

const uriCats = 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';

const arrayList = [...Array(50)];

const ScreenSize = Dimensions.get('window');

let previousScrollHeight = 0;


class Screen extends Component {
    
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows(arrayList),
          scrollY: new Animated.Value(0), 
        };
    }

    onScrollEvents(e) {
        // use animated driver to make scrolling smooth
        this.useAnimatedDriver();
        // capture scroll event and set content off set
        // division is to make scroll length small
        let page = Math.floor(e.nativeEvent.contentOffset.y / 100);
        // ignore negative number registered when bounce effect occurs on ios. it will cause
        // error on android
        if (page <= 0) {
            page = 0;
        }
        // setup blur effect. pass scroll length
        this.setUpBlurElement(page);
    }

    setUpBlurElement(currentScrollHeight) {
        // tickering with number to reduce setState() update for smooth transition
        if (previousScrollHeight + 2 === currentScrollHeight || previousScrollHeight - 2 === currentScrollHeight) {
            // reduce same number being registered in the app. can cause stack overflow
            previousScrollHeight = currentScrollHeight;
            // doing animated manually. takes current scroll position and transform to animated value
            const anim = new Animated.Value(Math.floor(currentScrollHeight / 1));
            // setstate the value of animated to be used in other parts
            this.setState({
                scrollY: anim
            });
        }
    }

    useAnimatedDriver() {
        return Animated.event([{
            // this.state.scrollY must start at 0 position
            nativeEvent: { contentOffset: { y: this.state.scrollY } }
          }], {
            useNativeDriver: true
        });
    }

    renderRow() {
        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
                <TouchableOpacity 
                    style={{ width: 200, height: 100, backgroundColor: 'lightblue' }}
                />
            </View>
        );
    }

    renderScroll() {
        return (
          <Animated.ScrollView
            scrollEventThrottle={15}
            onScroll={
                // pass events to function using onScroll props
                (e) => this.onScrollEvents(e)
            }
          />
        ); 
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Animated.Image
                    source={{ uri: uriCats }}
                    blurRadius={this.state.scrollY}
                    style={[
                        { position: 'absolute', height: (ScreenSize.width / 750) * 800, width: ScreenSize.width }, 
                        {/* { opacity: 
                            this.state.scrollY.interpolate({
                                inputRange: [0, ScreenSize.height],
                                outputRange: [1, 0.7]
                            }),
                            transform: [{
                                scale: this.state.scrollY.interpolate({
                                    inputRange: [-300, 0, 1],
                                    outputRange: [1.4, 1, 1]
                                })
                            }]
                        } */}
                    ]}
                    
                />
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={() => this.renderRow()}
                    renderHeader={() => <View style={{ paddingTop: 250 }} />}
                    enableEmptySections
                    renderScrollComponent={this.renderScroll.bind(this)}
                />
            </View>
        );
    }
}

export default Screen;
