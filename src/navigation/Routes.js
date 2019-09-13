// import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PropertyListScreen from '../screens/PropertyListScreen';

import PropertyDetailsScene from '../screens/PropertyDetailsScene';

export const ROUTE_NAME = {
  ROUTE_HOME: 'Home',
  DETAILS: 'Details',
};

const RootNavigator = createStackNavigator(
  {
    Home: {
      screen: PropertyListScreen,
    },
    Details: {
      screen: PropertyDetailsScene,
    },
  },
  {
    initialRouteName: ROUTE_NAME.ROUTE_HOME,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#9fd4e7',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null,
    },
    // headerMode: 'none',
  },
);

export default createAppContainer(RootNavigator);
