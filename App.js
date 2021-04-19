import React, { Component } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { screensEnabled } from 'react-native-screens';
import MyMainScreen from './src/MyMainScreen';
import Demo from './src/Demo';
import DateTimePickerExample from './src/DateTimePickerExample';
import BottomsheetExample from './src/BottomsheetExample';
import FlatlistExample from './src/FlatlistExample';
import APICallExample from './src/APICallExample';
import ApiCallAxiosExample from './src/ApiCallAxiosExample';
import ModalPopupExample from './src/ModalPopupExample';
import DesignSample from './src/DesignSample';
import DrawerNavigationExample from './src/DrawerNavigationExample';
import TabNavigationExample from './src/TabNavigationExample';
import ImagePickerExample from './src/ImagePickerExample';
import DrawerWithTabNavigationExample from './src/DrawerWithTabNavigationExample';
import PushNotificationExample from './src/PushNotificationExample';
import FormDataExample from './src/FormDataExample';



const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyMainScreen" component={MyMainScreen} options={{ title: "Main Screen" }} />
        <Stack.Screen name="Demo" component={Demo} options={{ title: "Demo Screen" }} />
        <Stack.Screen name="DateTimePickerExample" component={DateTimePickerExample} options={{ title: "DateTime Picker Example" }} />
        <Stack.Screen name="BottomsheetExample" component={BottomsheetExample} />
        <Stack.Screen name="FlatlistExample" component={FlatlistExample} options={{ title: "Flatlist Using Static Data" }} />
        <Stack.Screen name="APICallExample" component={APICallExample} options={{ title: "Api Call Using Fetch" }} />
        <Stack.Screen name="ApiCallAxiosExample" component={ApiCallAxiosExample} options={{ title: "Api Call Using Axios" }} />
        <Stack.Screen name="FormDataExample" component={FormDataExample} options={{ title: "From Data Using Fetch" }} />
        <Stack.Screen name="ModalPopupExample" component={ModalPopupExample} options={{ title: "Modal Popup" }} />
        <Stack.Screen name="DesignSample" component={DesignSample} options={{headerShown: false}}  />
        <Stack.Screen name="DrawerNavigationExample" component={DrawerNavigationExample} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigationExample" component={TabNavigationExample} options={{ title: "Tab Navigation" }} />
        <Stack.Screen name="DrawerWithTabNavigationExample" component={DrawerWithTabNavigationExample} options={{ headerShown: false }} />
        <Stack.Screen name="ImagePickerExample" component={ImagePickerExample} options={{ title: "Image Picker" }} />
        <Stack.Screen name="PushNotificationExample" component={PushNotificationExample} options={{ title: "Push Notification" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStackNavigator;

