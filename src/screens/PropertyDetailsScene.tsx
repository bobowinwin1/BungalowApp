import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native'
import {theme} from '../Themes/ThemeDefault';
import config from '../config';
import {get as fetchPropertyDetailsData} from '../lib/PropertyDetailsServices';

export default class PropertyDetailsScreen extends React.Component {
  state = {
    loading: false,
    property: null,
  };
  
  static navigationOptions = {
    title: 'Details',
  };

  getPropertyDetails = () => {
    const {slug} = this.props.navigation.getParam('property', 'null');

    this.setState({loading: true}, async () => {
      const res = await fetchPropertyDetailsData(slug);
      console.log('>>>>>>>>>>>>>..');
      console.log(res);
      // await delay(3000); //simulate long loading time
      this.setState({
        loading: false,
        property: res,
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

  componentDidMount() {
      this.getPropertyDetails();
  }
  
  render() {
    const {
      headline,
      availableRoom,
      availableDate,
      images,
    } = this.props.navigation.getParam('property', 'null');

    const imageUrl = images && images[0] ? images[0].lg_url : config.PlaceholderImageURL;

    // const name = this.props.navigation.getParam('name', 'Peter');
    return (
      <View style = {styles.container}>
        <Text style={styles.title}>{headline}</Text>
        <View style={styles.imagebox}>
          <Image style={styles.thumbnail} source={{uri: imageUrl}} />
        </View>
        <View style={styles.contentBox}>
          <Text style={styles.descText}>{`Earliest Available Date: ${availableDate}`}</Text>
          <Text style={styles.descText}>{`Available Room Count: ${availableRoom}`}</Text>          
        </View>

      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.backgroundGrey,
  },

  title: {
    // color: Config.color.black,
    fontFamily: 'Georgia',
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: -0.25,
    paddingHorizontal: '12%',
    fontWeight: 'bold',
    marginTop: 10,
  },

  thumbnail: {
    flexDirection: 'row',
    flex: 1,
    resizeMode: 'contain',
  },

  imagebox: {
    flexDirection: 'column',
    // flex: 1,
    height: 240,
  },

  contentBox: {
    marginLeft: 16,
  },

  descText: {
    fontFamily: 'Times New Roman',
  },
});