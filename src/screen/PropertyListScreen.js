import React, {Component, Fragment} from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  basicFetch as fetchData,
  GET,
  PROPERTY_LIST_END_POINT,
} from '../lib/FetchService';
import MyListItem from '../components/MyListItem';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export default class PropertyListScreen extends Component {
  state = {
    loading: false,
    properties: [],
  };

  getPropertyList = () => {
    this.setState({loading: true}, async () => {
      const res = await fetchData(PROPERTY_LIST_END_POINT, null, GET);
      // await delay(3000);
      this.setState({
        loading: false,
        properties: res.data.results,
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

  onPressItem = id => {
    console.log(id);
  };

  renderItem = ({item}) => {
    // console.log('>>>>>>item');
    // console.log(item);
    return (
      <MyListItem id={item.id} property={item} onPressItem={this.onPressItem} />
    );
  };

  componentDidMount() {
    this.getPropertyList();
  }

  render() {
    return (
      <View>
        {/* <Text>{'property list'}</Text> */}
        {this.state.loading ? (
          <Text>Loading</Text>
        ) : (
          <FlatList
            data={this.state.properties}
            extraData={this.state}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}
