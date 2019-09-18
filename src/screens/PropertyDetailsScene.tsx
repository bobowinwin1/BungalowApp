import React, {Fragment} from 'react';
import {View, Text, Image, Linking, ScrollView, TouchableOpacity,SafeAreaView, StyleSheet, Modal} from 'react-native'
import {theme} from '../Themes/ThemeDefault';
import config from '../config';
import {get as fetchPropertyDetailsData} from '../lib/PropertyDetailsServices';
import { WebView } from 'react-native-webview';
import AmenityList from '../components/AmenityList'
import ImageViewer from 'react-native-image-zoom-viewer';

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class PropertyDetailsScreen extends React.Component {
  state = {
    loading: false,
    property: null,
    details: null,
    showGallery: false,
  };
  
  static navigationOptions = {
    title: 'Details',
  };

  getPropertyDetails = () => {
    const {slug} = this.props.navigation.getParam('property', 'null');

    this.setState({loading: true}, async () => {
      const res = await fetchPropertyDetailsData(slug);
      // console.log('>>>>>>>>>>>>>..');
      // console.log(res);
      // await delay(3000); //simulate long loading time
      this.setState({
        loading: false,
        details: res,
      });
    });
  };

  renderInlineWebView = (source: any, style: any) => {
    return (
      <View style={style}>
        <WebView
          originWhitelist={['*']}
          style={{ backgroundColor: 'transparent' }}
          source={source}
        />
      </View>)
  }

  toggleGallery = () => {
    this.setState(
      {showGallery: !this.state.showGallery,}
    )
  }

  gotoLink = (url: string) => Linking.openURL(url)

  renderAmenities = (list) =>{
    // const {list} = props
    // console.log('-------AmenityList-->list------->')
    // console.log(list.length)
    const ames = [];
    if(list && list.length){
        ames.push(<Text key='sectionName'>Amenities:</Text>)
        list.forEach((item: Amenity, index:number) => {ames.push(<Text key={index}>{`\u2022 `}<Text>{item.name + (item.type && `(${item.type})`)}</Text></Text>)})        
    }
    // console.log(ames)
    return ames;
  }

  renderDetails = () => {
    const matterportLink = (Platform.OS === 'android')? `3D View: ${this.state.details.matterportUrl}`:`3D View`
    return (
      <Fragment>
        {/* <AmenityList list={this.state.details.amenities} /> */}
        {this.renderAmenities(this.state.details.amenities)}
        <Text style={[styles.descText, {paddingTop: 5, fontWeight:'bold'}]}>Detailed Description: </Text>
        {this.renderInlineWebView({html: this.state.details.descriptionHtml}, styles.descriptionBox)}
        <TouchableOpacity onPress={() => Linking.openURL(this.state.details.matterportUrl)}>
          <Text style={[styles.descText, styles.hyperLink]}>{matterportLink} </Text>
        </TouchableOpacity>
        {this.renderInlineWebView({ uri: this.state.details.matterportUrl }, styles.matterportView)}
      </Fragment>)
  }

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
    const galleryImages = images.map((item)=>{
      return (
        {
          url: item.lg_url,
          props: {
            // headers: ...
          }
        }
      )
    })

    // const name = this.props.navigation.getParam('name', 'Peter');
    return (
      <ScrollView style = {styles.container}>
        <Text style={styles.title}>{headline}</Text>
        <TouchableOpacity style={styles.imagebox} onPress={this.toggleGallery}>
          <Image style={styles.thumbnail} source={{uri: imageUrl}} />
        </TouchableOpacity>
        <View style={styles.contentBox}>
          <Text style={styles.descText}>{`Earliest Available Date: ${availableDate}`}</Text>
          <Text style={styles.descText}>{`Available Room Count: ${availableRoom}`}</Text>
          {this.state.loading ? (
            <Text>Loading...</Text>
          ) : (
            (this.state.details && this.renderDetails())
          )}
        </View>
        <Modal style={styles.galleryContainer} visible={this.state.showGallery} transparent={true}>
          <TouchableOpacity onPress={this.toggleGallery} >
            <Text style={styles.galleryClose}>close</Text>
          </TouchableOpacity>  
          <ImageViewer imageUrls={galleryImages}/>            
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.backgroundGrey,
  },
  
  galleryContainer: {
    marginTop:20,
    backgroundColor: 'black',
    flexDirection: 'row',
    flex: 1,
    borderColor: 'white',
    borderWidth: 2,
  },

  galleryClose: {
    paddingTop: 40,
    // paddingLeft: 100,
    // color: '#fff'
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
    backgroundColor: theme.color.backgroundGrey,
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

  hyperLink: {
    color: theme.color.hyperlinkColor,
    textDecorationLine: 'underline'
  },

  contentBox: {
    marginHorizontal: 16,
  },

  descriptionBox: {
    // marginRight: 14,
    height: 160,
    backgroundColor: theme.color.backgroundGrey,
  },

  matterportView: {
    // marginRight: 14,
    height: 300,
    marginTop: 10,
    marginBottom: 50,
  },

  descText: {
    fontFamily: 'Times New Roman',
  },
});