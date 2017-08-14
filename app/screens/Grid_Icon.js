import React, { Component } from 'react';
import { 
  Text, 
  View,
  StyleSheet, 
  ListView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import { Metrics } from '../../Themes';
import CardUI from '../components/_CardUI';

const REQUEST_URL = 'https://api.github.com/search/repositories?q=language:react+native';
let arrayMany = [];


class Screen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadMore: true,
      isLoading: true,
      ds: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    };
  }

  componentDidMount() {
    this.fetchData(REQUEST_URL);
  }
  
  fetchData = (url) => {
     fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        arrayMany = [...arrayMany, ...responseJson.items];
        this.setState({
          loadMore: false,
          isLoading: false,
          dataSource: this.state.ds.cloneWithRows(arrayMany),
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false, loadMore: false });
        console.error(error);
      })
      .done();
  }

  handlePress = (dataProps) => {
    this.props.navigator.push({
      screen: 'Screen3',
      title: 'Screen 3',
      passProps: {
          dataProps
      },
      animated: true, 
      animationType: 'fade',
    });
  };

  reachTheEnd = () => {
    console.log('reach end ');
    this.setState({ loadMore: true });
    this.fetchData(REQUEST_URL);
  }

  renderRow = (rowData) => (
    <TouchableOpacity onPress={() => this.handlePress(rowData.owner)}>  
        <CardUI dataFromUrl={rowData} />
    </TouchableOpacity>
  );

  renderHeader = () => (
      <View style={styles.container} >
          <Text style={styles.welcome}>
              React-Native repositories 
          </Text>
          <Text style={styles.instructions}>
              Listed below is React-Native repositories
          </Text>
      </View>
  )

  renderFooterEnd = () => {
    if (this.state.loadMore) {
      return (
        <View style={{ height: 50, width: 100, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
  };

  //// render function ////
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
          <ListView
            contentContainerStyle={styles.listBox}
            dataSource={this.state.dataSource}
            renderHeader={this.renderHeader}
            renderRow={this.renderRow}
            renderFooter={this.renderFooterEnd}
            onEndReached={this.reachTheEnd}
            onEndReachedThreshold={10}
          />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    backgroundColor: 'rgb(224,224,224)',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(224,224,224)',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: 'dimgrey',
    marginBottom: 5,
  },
  
  listBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgb(224,224,224)',
    alignItems: 'flex-start',
  },
});

export default Screen;
