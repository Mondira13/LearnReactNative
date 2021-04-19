import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';


class BottomsheetExample extends React.Component{
    render(){
      return(
       <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
           <Button title="Show Bottomsheet" onPress={() => alert("show Bottomsheet") }/>
       </View>
      );
    }
  }

export default BottomsheetExample;