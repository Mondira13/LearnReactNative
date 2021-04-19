import React, { useState } from "react";
import { Button,Text, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";



class DateTimePickerExample extends React.Component{

  state={
    visibility:false,
    DateDisplay:""
  }

  showDatePicker = () => {
    this.setState({visibility:true})
  };

  hideDatePicker = () => {
    this.setState({visibility:false})
  };

  handleConfirm = (date) => {
    this.setState({DateDisplay:date})
  };

  render(){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
        <Button title="Pick Date and Time" onPress={this.showDatePicker} />
        <Text  style={{fontSize:15,marginTop:20}} > A date and time has been picked :  {this.state.DateDisplay.toString()} </Text>
        <DateTimePickerModal
          isVisible={this.state.visibility}
          // mode="date"
          // mode="time"
          mode="datetime"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />
      </View>
    );
  };

}

export default DateTimePickerExample;
