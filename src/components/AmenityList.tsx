import React, {Fragment} from 'react';
import {Text, StyleSheet} from 'react-native';
import Amenity from '../models/Amenity'

const AmenityList = (props) =>{
    const {list} = props
    console.log('-------AmenityList-->list------->')
    console.log(list.length)
    const ames = [];
    if(list && list.length){
        ames.push(<Text key='sectionName'>Amenities:</Text>)
        list.forEach((item: Amenity, index:number) => {ames.push(<Text key={index}>{`\u2022 `}<Text>{item.name + (item.type && `(${item.type})`)}</Text></Text>)})        
    }
    console.log(ames)
    return ames;
}

const styles = StyleSheet.create({
    descText: {
        fontFamily: 'Times New Roman',
    }

})

export default AmenityList
