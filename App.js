import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignupLoginScreen from './screens/SignupLoginScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TabNavigator } from './components/bottomTab';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBar from './components/customSideBarMenu';
import { Settings } from 'react-native';
import { AppDrawerNavigator } from './components/appDrawer';

export default class App extends React.Component {
  render(){
  return (
  <View style={styles.container}>
   <AppContainer/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});

const Tab = createSwitchNavigator({
  login:SignupLoginScreen,
  bottomTab:TabNavigator
})
const AppContainer = createAppContainer(Tab)

const switchNavigator = createSwitchNavigator({
  AppDrawerNavigator : AppDrawerNavigator
})

const AppContainer = createAppContainer(switchNavigator)
