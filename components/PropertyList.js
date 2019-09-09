import React, {Component, Fragment} from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  basicFetch as fetchData,
  GET,
  PROPERTY_LIST_END_POINT,
} from '../lib/FetchService';
import MyListItem from './MyListItem';

export default class PropertyList extends Component {
  state = {
    loading: false,
    properties: [],
  };

  getPropertyList = async () => {
    const res = await fetchData(PROPERTY_LIST_END_POINT, null, GET);
    this.setState({properties: res.data.results});

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
      <Fragment>
        {this.state.loading ? (
          <Text>Loading</Text>
        ) : (
          <MyListItem
            id={item.id}
            property={item}
            onPressItem={this.onPressItem}
          />
        )}
      </Fragment>
    );
  };

  componentDidMount() {
    this.getPropertyList();
  }

  render() {
    return (
      <View>
        {/* <Text>{'property list'}</Text> */}
        <FlatList
          data={this.state.properties}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
      />
      </View>
    );
  }
}
