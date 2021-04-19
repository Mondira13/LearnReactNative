import React, { useState } from 'react';
import {
    Image, Text, View, Button
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './screens/ChatScreen';
import NotificationScreen from './screens/NotificationScreen';
import DrawerNavigationExample from './DrawerNavigationExample';
import TabNavigationExample from './TabNavigationExample';


const MyDrawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


class DrawerWithTabNavigationExample extends React.Component {
    render() {
        return (
            <MyDrawer.Navigator initialRouteName={"TabNavigation"}>
                <MyDrawer.Screen name="Home" component={HomeScreen} />
                <MyDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
                <MyDrawer.Screen name="SettingScreen" component={SettingScreen} />
            </MyDrawer.Navigator>
        );
    }
}
export default DrawerWithTabNavigationExample;