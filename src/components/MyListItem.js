import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class MyListItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.property.id);
  };

  render() {
    const {
      headline,
      available_room_count,
      earliest_available_date,
      images,
    } = this.props.property;

    const imageUrl = images && images[0] ? images[0].lg_url : '';
    console.log(imageUrl);
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.card}>
          <View style={styles.image_box}>
            <Image style={styles.thumbnail} source={{uri: imageUrl}} />
          </View>
          <Text>{headline}</Text>
          <Text>{`Earliest Available Date: ${earliest_available_date}`}</Text>
          <Text>{`Available Room Count: ${available_room_count}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.red,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
  thumbnail: {
    flexDirection: 'row',
    flex: 1,
    resizeMode: 'cover',
  },
  image_box: {
    flexDirection: 'row',
    flex: 1,
    height: 260,
  },
});

export default MyListItem;
