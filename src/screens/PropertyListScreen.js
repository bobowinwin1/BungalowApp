import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import {get as fetchPropertyListData} from '../lib/PropertyListServices';
import MyListItem from '../components/MyListItem';
import {ROUTE_NAME} from '../navigation/Routes';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class PropertyListScreen extends Component {
  state = {
    loading: false,
    properties: [],
  };

  static navigationOptions = {
    title: 'Properties',
  };

  getPropertyList = () => {
    this.setState({loading: true}, async () => {
      const res = await fetchPropertyListData();
      // console.log('>>>>>>>>>>>>>..');
      // console.log(res);
      // await delay(3000); //simulate long loading time
      this.setState({
        loading: false,
        properties: res,
      });
    });

    // this.setState({loading: true}, () => {
    //   fetchData(PROPERTY_LIST_END_POINT, null, GET)
    //   .then(response => {
    //     console.log('>>>>>>response');
    //     console.log(response);
    //     if (response) {
    //       this.setState({
    //         loading: false,
    //         properties: response.data.results,
    //       }, console.log(this.state.properties));
    //     }
    //   })
    //   .catch((error: Error) => {
    //     this.setState({loading: false})

    //     console.log('Error getting properties:')
    //     console.log(error)
    //   });
    // });
  };

  keyExtractor = (item, index) => `${item.id}`;

  onPressItem = item => {
    console.log(item);
    this.props.navigation.navigate(ROUTE_NAME.DETAILS, {
      property: item,
    });
  };

  renderItem = ({item, index}) => {
    // console.log('>>>>>>index');
    // console.log(item);
    // console.log(index);
    return (
      <MyListItem id={item.id} property={item} onPressItem={this.onPressItem} />
    );
  };

  componentDidMount() {
    this.getPropertyList();
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView>
          {/* <Text>{'property list'}</Text> */}
          {this.state.loading ? (
            <Text>Loading...</Text>
          ) : (
            <FlatList
              data={this.state.properties}
              extraData={this.state}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
            />
          )}
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
