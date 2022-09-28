import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer'
import {BottomTab} from './bottomTab'
import CustomSideBar from './customSideBarMenu'
import Settings from '../screens/Settings'

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:BottomTab
    },
    Setting:{
        screen:Settings
    }
},
{
    contentComponent:CustomSideBar
},
{
    initialRouteName:'Home'
})