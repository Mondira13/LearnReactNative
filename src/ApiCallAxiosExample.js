import React, { useState } from "react";
import { Button,Text, View,FlatList,StyleSheet,ActivityIndicator} from "react-native";
import axios from 'axios';
import { ScrollView } from "react-native-gesture-handler";


class ApiCallAxiosExample extends React.Component{
    constructor(){
        super();
        this.state = {
            loaderIsVisible:true,
            data: []
        }
    }

    componentDidMount(){
        this.callApi()
    }

   async callApi(){
        let apiUrl = 'https://jsonplaceholder.typicode.com/posts'
        let response = await axios.get(apiUrl)
        // console.warn(response.data)
        this.setState({data:response.data, loaderIsVisible:false})
    }

    setRenderItemView = ({item}) =>{
        <View style={{borderBottomColor:'blue',borderBottomWidth:1}}>
            <Text style={myStyle.fontstyles}> 
                {item.id}.)   {item.title}                  
            </Text>  
        </View>
    }

    render(){
      return(
       <View>
            { this.state.loaderIsVisible ? (
                <View style={myStyle.loadingStyle}>
                    <ActivityIndicator size="large" color="#2484E8" />
                </View>
            ) : null }


            {
                this.state.data.length > 0 ?
                <ScrollView>
                    {
                        this.state.data.map((item) =>  
                            <View style={{borderBottomColor:'blue',borderBottomWidth:1,padding:5}}>
                                    <Text style={myStyle.fontstyles}> 
                                        {item.id}.)   {item.title}                  
                                    </Text>  
                            </View>
                        )
                    }
                </ScrollView> : <Text 
                            style={{color:'green',fontSize:20,
                            alignContent:"center",textAlignVertical:"center",
                            alignItems:"center"}}
                            >The data is loading....</Text>
            }

           
       </View>
      );
    }
  }

  const myStyle = StyleSheet.create({
    fontstyles:{
      marginTop: 5,
      marginLeft:10,
      marginRight:10,
      fontSize:20,
      color:'purple'
    },
    subfontstyles:{
      marginLeft:10,
      marginRight:10,
      fontSize:15,
      color:'blue'
    },
    loadingStyle:{
        flex:1,justifyContent:'center',alignItems:"center"
    }
  });

export default ApiCallAxiosExample;