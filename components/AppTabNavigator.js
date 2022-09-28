import * as React from 'react'
import {View} from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ExchangeScreen from '../screens/Exchangescreen'
import HomeScreen from '../screens/Homescreen'


export const BottomTab= createBottomTabNavigator({
    ExchangeScreen: {screen:ExchangeScreen},
    HomeScreen: {screen:HomeScreen}
})