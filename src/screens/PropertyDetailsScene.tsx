import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default class PropertyDetailsScreen extends React.Component {
  state = {
    loading: false,
    property: null,
  };
  
  static navigationOptions = {
    title: 'Details',
  };

  componentDidMount() {
      
  }
  
  render() {
    return (
      <View style = {styles.container}>
        <Text>blah blah blah details</Text>
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.red,
  },
});