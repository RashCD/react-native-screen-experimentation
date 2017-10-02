import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image, 
    ListView, 
    Dimensions,
    TouchableOpacity,
    Animated,
    findNodeHandle,
    ImageBackground,
    ScrollView,
    StyleSheet 
} from 'react-native';

const uriCats = 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg';

const dataLists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const ScreenSize = Dimensions.get('window');

let previousVal = 0;

class Screen extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
          dataSource: ds.cloneWithRows(dataLists),
          scrollY: new Animated.Value(0),
          viewRef: null,
          blur: 0,
          blurAnimated: 0,
        };
    }
    
    setupBlur(e) {
        const page = Math.floor(e.nativeEvent.contentOffset.y / 100);
        this.blurEffect(page);
    }

    imageLoaded() {
        this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
    }
    
    blurEffect(e) {    
        /**
         * to prevent same value being inserted multople time to the variable, a check is needed
         * if the previous value is the same, then ignore. if the value is not, then update
         * this ensure stack is not overflow.
         */
        if (previousVal !== e) {
            previousVal = e;

            let counter = 0;

            if (between(previousVal, 0, 2)) {
                counter = 0;
            } else if (between(previousVal, 3, 5)) {
                counter = 2;
            } else if (between(previousVal, 6, 10)) {
                counter = 4;
            } else if (between(previousVal, 11, 15)) {
                counter = 6;
            } else if (between(previousVal, 16, 20)) {
                counter = 8;
            } else if (between(previousVal, 21, 25)) {
                counter = 10;
            } else if (previousVal >= 26) {
                counter = 12;
            } else {
                counter = 0;
            }
            /**
             * until the check is done, then can the state be updated. 
             * if not the maximum call stack error is thrown
             */
            if (this.state.blur !== counter) {
                this.setState({ blur: counter });
            }
        }
        // normal function to check the range of value
        function between(x, min, max) {
             return x >= min && x <= max;
        }
    }

    renderScroll(props) {
        return (
          <Animated.ScrollView
            {...props}
            scrollEventThrottle={1}
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
                />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.absolute}>
                
                <ImageBackground
                    ref={'backgroundImage'}
                    source={{ uri: uriCats }}
                    style={[styles.absolute, { width: '100%', height: '70%' }]}
                    onLoadEnd={this.imageLoaded.bind(this)}
                    resizeMode={'cover'}
                    blurRadius={this.state.blur}
                />
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={() => this.renderRow()}
                    onScroll={(e) => this.setupBlur(e)}
                    renderHeader={() => <View style={{ paddingTop: 250 }} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    absolute: {
      position: 'absolute',
      top: 0, 
      left: 0, 
      bottom: 0, 
      right: 0,
    },
});

export default Screen;
