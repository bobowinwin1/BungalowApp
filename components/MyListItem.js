import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class MyListItem extends React.PureComponent {
  onPress = () => {
    this.props.onPressItem(this.props.property.id);
  };

  render() {
    const {
      headline,
      available_room_count,
      earliest_available_date,
    } = this.props.property;
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View>
          <Text>{headline}</Text>
          <Text>{`Earliest Available Date: ${earliest_available_date}`}</Text>
          <Text>{`Available Room Count: ${available_room_count}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default MyListItem;
