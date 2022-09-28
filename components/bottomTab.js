import * as React from 'react'
import {View, Text} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from '../screens/Homescreen';
import ExchangeScreen from '../screens/Exchangescreen';

export const TabNavigator = createBottomTabNavigator({ 
    Home:{screen:HomeScreen},
    Exchange:{screen:ExchangeScreen},
  });