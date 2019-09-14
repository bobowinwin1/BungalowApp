import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {theme} from '../Themes/ThemeDefault';
import config from '../config';

class MyListItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.property);
  };

  render() {
    const {
      headline,
      availableRoom,
      availableDate,
      images,
    } = this.props.property;

    const imageUrl = images && images[0] ? images[0].lg_url : config.PlaceholderImageURL;

    console.log(imageUrl);
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={styles.card}>
          <View style={styles.image_box}>
            <Image style={styles.thumbnail} source={{uri: imageUrl}} />
          </View>
          <View style={styles.descBox}>
            <Text style={styles.headline}>{headline}</Text>
            <Text style={styles.descText}>{`Earliest Available Date: ${availableDate}`}</Text>
            <Text style={styles.descText}>{`Available Room Count: ${availableRoom}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.color.backgroundGrey,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
  },
  descBox: {
    paddingLeft: 6,
  },
  headline: {
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    fontSize: 18,
    // fontStyle: 'italic',
    // textAlign: 'justify',
  },
  descText: {
    fontFamily: 'Times New Roman',
  },
  thumbnail: {
    flexDirection: 'row',
    flex: 1,
    resizeMode: 'cover',
  },
  image_box: {
    flexDirection: 'row',
    flex: 1,
    height: 220,
  },
});

export default MyListItem;
