import React, { useState } from "react";
import { Button,Text, View,FlatList,StyleSheet,ActivityIndicator} from "react-native";


class APICallExample extends React.Component{
    constructor(){
        super();
        this.state = {
            loaderIsVisible:true,
            isLoading:false,
            data: []
        }
    }

    componentDidMount(){
        this.callApi()
    }

    async callApi(){
        // let apiUrl = 'https://jsonplaceholder.typicode.com/users'
        // let apiUrl = 'http://dummy.restapiexample.com/api/v1/employees'
        let apiUrl = 'https://jsonplaceholder.typicode.com/posts'

       
        // let response = await fetch(apiUrl)
        // let responseJson = await response.json();
        // this.setState({data:responseJson.beautyAndSpa, loaderIsVisible:false})


        {this.setState({isLoading:true})}
        fetch(apiUrl).then(response => response.json()).then(responseJson => {
            this.setState({data: responseJson,loaderIsVisible:false}) 
            // console.warn("responseJson",responseJson)
        }).finally(() => this.setState({isLoading:false}))

    }

    setRenderItemView = ({item}) =>{
        return(
            <View style={{borderBottomColor:'blue',borderBottomWidth:1,padding:5}}>
                <Text style={myStyle.fontstyles}> {item.id}.)   {item.title}  </Text>  
            </View>
        )
    }


    render(){
      return(
       <View>       
            { this.state.loaderIsVisible ? (
                <View style={myStyle.loadingStyle}>
                    <ActivityIndicator size={50} color="#2484E8" />
                </View>
            ) : null }


            {
                this.state.data.length > 0 ?
                <View>
                    <FlatList 
                        data = {this.state.data}
                        renderItem={this.setRenderItemView}
                        refreshing={this.state.isLoading}
                        onRefresh={this.callApi}
                        keyExtractor={(i,k) => k.toString()}
                    /> 
                </View> : <Text 
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

export default APICallExample;