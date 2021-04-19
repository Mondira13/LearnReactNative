import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

function gotoDateTimePickerExample() {
  
}

function gotoDemo() {
  this.props.navigation.navigate('Demo')
}


class MyMainScreen extends React.Component{
    render(){
      return(
        <SafeAreaView>
          <StatusBar backgroundColor='green'  barStyle={'light-content'} />
        <ScrollView>
        <View style={myStyle.buttonstyle}>
            <ScrollView horizontal={true}>
              <Image source={require('./images/food_one.jpg')}  style={[myStyle.imageStyle]} />
              <Image source={require('./images/food_two.jpg')}  style={[myStyle.imageStyle]} />
              <Image source={require('./images/food_three.jpg')}  style={[myStyle.imageStyle]} />
              <Image source={require('./images/food_four.jpeg')}  style={[myStyle.imageStyle]} />
              <Image source={require('./images/food_five.jpg')}  style={[myStyle.imageStyle]} />
              <Image source={require('./images/food_six.jpeg')}  style={[myStyle.imageStyle]} />
              <Image source={require('./images/food_seven.jpg')}  style={[myStyle.imageStyle]} />
            </ScrollView>
          </View>
  
          <View style={{marginTop:50,marginLeft:10,marginRight:10}}>
            <Button title="Stack Navigation"  onPress={() => this.props.navigation.navigate('Demo')} color='blue'  />
          </View>
          <View style={myStyle.buttonstyle}>
            <Button title="Drawer Navigation" onPress={() => this.props.navigation.navigate('DrawerNavigationExample')} color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
            <Button title="Tab Navigation" onPress={() => this.props.navigation.navigate('TabNavigationExample')} color='blue' />
          </View>
          {/* <View style={myStyle.buttonstyle}>
            <Button title="Drawer With Tab Navigation" onPress={() => this.props.navigation.navigate('DrawerWithTabNavigationExample')} color='blue' />
          </View> */}
          <View style={myStyle.buttonstyle}>
            <Button title="Date and Time Picker" onPress={() => this.props.navigation.navigate('DateTimePickerExample')} color='blue' />
          </View>
          {/* <View style={myStyle.buttonstyle}>
            <Button title="Bottomsheet" onPress={() => this.props.navigation.navigate('BottomsheetExample')}  color='blue' />
          </View> */}
          <View style={myStyle.buttonstyle}>
            <Button title="Modal Popup" onPress={() => this.props.navigation.navigate('ModalPopupExample')}  color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
            <Button title="Flatlist Using Static Data" onPress={() => this.props.navigation.navigate('FlatlistExample')}    color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
              <Button title="API Call using Fetch" onPress={() => this.props.navigation.navigate('APICallExample')} color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
              <Button title="API Call using Axios" onPress={() => this.props.navigation.navigate('ApiCallAxiosExample')} color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
             <Button title="API Call using Form data"  onPress={() => this.props.navigation.navigate('FormDataExample')}  color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
            <Button title="Design sample using static data" onPress={() => this.props.navigation.navigate('DesignSample')} color='blue' />
          </View>
          <View style={myStyle.buttonstyle}>
            <Button title="Open Camera" onPress={() => this.props.navigation.navigate('ImagePickerExample')} color='blue' />
          </View>
          <View style={myStyle.lastbuttonstyle}>
             <Button title="Push Notification"  onPress={() => this.props.navigation.navigate('PushNotificationExample')}  color='blue' />
          </View>
  
        </ScrollView>
        </SafeAreaView>
      );
    }
  }
  
  const myStyle = StyleSheet.create({
    buttonstyle:{
      marginTop: 15,
      marginLeft:10,
      marginRight:10
    },
    lastbuttonstyle:{
      marginTop: 15,
      marginLeft:10,
      marginRight:10,
      marginBottom:50
    },
    imageStyle:{
      height:200,
      width:250,
      marginTop: 10,
      marginLeft:5,
      marginRight:5
  }
  });
  
  
 export default MyMainScreen;