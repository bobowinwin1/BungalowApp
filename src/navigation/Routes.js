// import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PropertyListScreen from '../screens/PropertyListScreen';
// import Profile from './src/screens/Profile';

export const ROUTE_NAME = {
  ROUTE_HOME: 'Home',
};

const RootNavigator = createStackNavigator({
  Home: {
    screen: PropertyListScreen,
  },
//   Profile: {
//     screen: Profile,
//   },
},
{
    initialRouteName: ROUTE_NAME.ROUTE_HOME,
    // headerMode: 'none',
}
);

export default createAppContainer(RootNavigator);
