import React, { useState } from 'react';
import {
  Image,Text,View,Modal,Button,StyleSheet
} from 'react-native';


class ModalPopupExample extends React.Component{
    constructor(){
        super();
        this.state={
            show:false
        }
    }
    render(){
      return(
       <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <Button title="Show Modal" onPress={() => {this.setState({show:true})}}/>
           <Modal visible={this.state.show} transparent={true} >
               <View style={{flex:1,backgroundColor:'#000000aa',justifyContent:'center',alignItems:'center'}}>
                   <View style={myStyle.modalBackgroundStyle}>
                        <Image source={require('./images/flower.jpg')}  style={[myStyle.imageStyle]} />
                        <Text style={{fontSize:30,color:'purple',marginTop:20}}>Hello everyone..!!!</Text>
                        <View style={myStyle.buttonstyle}>
                             <Button title="Hide Modal" onPress={() => {this.setState({show:false})}}/> 
                        </View>
                   </View>

               </View>

           </Modal>
       </View>
      );
    }
  }

  const myStyle = StyleSheet.create({
    modalBackgroundStyle:{
        margin:50,
        backgroundColor:'#ffffff',
        borderRadius:10,
        padding:8,
        justifyContent:'center',
        alignItems:'center'
    },
    imageStyle:{
      height:200,
      width:250,
      marginTop: 10,
      marginLeft:5,
      marginRight:5
  },
  buttonstyle:{
    marginTop: 30,
    marginBottom:30
  }
  });
export default ModalPopupExample;