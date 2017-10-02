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

const dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const arrayList = [...Array(50)];

const ScreenSize = Dimensions.get('window');

let previousScrollHeight = 0;

const animationValue = 0;

class Screen extends Component {
    
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows(arrayList),
          scrollY: new Animated.Value(0), 
          test: new Animated.Value(0),
        };
    }

    onScrollEvents(e) {
        this.useAnimatedDriver();
        let page = Math.floor(e.nativeEvent.contentOffset.y / 100);

        if (page <= 0) {
            page = 0;
        }
        this.setUpBlurElement(page);
    }


    setUpBlurElement(currentScrollHeight) {
        if (previousScrollHeight + 2 === currentScrollHeight || previousScrollHeight - 2 === currentScrollHeight) {
            previousScrollHeight = currentScrollHeight;

            // console.log(currentScrollHeight);

            const anim = new Animated.Value(Math.floor(currentScrollHeight / 1));
            // const animationValue = anim.interpolate({
            //     inputRange: [0, ScreenSize.height],
            //     outputRange: [0, 10]
            // });
            console.log(anim);

            this.setState({
                scrollY: anim
            });
        }
    }

    blurRadiusEffect() {
        const scroll = this.state.scrollY.interpolate({
            inputRange: [0, ScreenSize.height],
            outputRange: [0, 10]
        });
        return scroll;
    }

    useAnimatedDriver() {
        return Animated.event([{
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
