import React, { useState } from 'react';
import {
  Image, Text, View, Button
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingScreen from './screens/SettingScreen';


const MyDrawer = createDrawerNavigator();

class DrawerNavigationExample extends React.Component {
  render() {
    return (
      <MyDrawer.Navigator>
        <MyDrawer.Screen name="Home" component={HomeScreen} />
        <MyDrawer.Screen name="ProfileScreen" component={ProfileScreen} />
        <MyDrawer.Screen name="SettingScreen" component={SettingScreen} />
      </MyDrawer.Navigator>
    );
  }
}
export default DrawerNavigationExample;