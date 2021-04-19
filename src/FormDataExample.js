import React, { useState } from 'react';
import { Button, Text, View, FlatList, StyleSheet, ActivityIndicator } from "react-native";


class FormDataExample extends React.Component {
    constructor() {
        super();
        this.state = {
            loaderIsVisible: true,
            data: []
        }
    }

    componentDidMount() {
        this.callApi()
    }

    async callApi() {
        // let apiUrl = 'https://reqres.in/api/users/2'
        // try {
        //     let response = await fetch(apiUrl)
        //     let responseJson = await response.json();
        //     this.setState({ data: responseJson, loaderIsVisible: false })
        // }
        // catch (error) {
        //     console.error(error);
        // }


        // const formdata = new FormData();
        // formdata.append("id", "2");
        // formdata.append("id", this.state.id);
        // try {
        //     let response = await fetch(apiUrl, {
        //         method: 'GET',
        //         body: formdata,
        //     })
        //     let responseJson = await response.json();
        //     this.setState({ data: responseJson, loaderIsVisible: false })
        // }
        // catch (error) {
        //     console.error(error);
        // }




        let apiUrl = 'https://demo1.dvconsulting.org/sock3/api/notification-lists'
        try {
            const formdata = new FormData();
            formdata.append("user_id", 10519);
            formdata.append("api_key", "REIxQzMxR2M5MDg5Zmc4N1JGcGoxdndtRVAxdHk2VU5yNWlTaFFlbjY0YnNrVzJ6S0p4NklhZFhMQWx16047671aa29f0");
            formdata.append("language", "en")
            formdata.append("record_count", 10)
            formdata.append("page", 1)

            let response = await fetch(apiUrl, {
                // method: 'GET',
                method: 'POST',
                body: formdata,
            })
            let responseJson = await response.json();
            this.setState({ data: responseJson, loaderIsVisible: false })
            console.warn("data", responseJson)
        }
        catch (error) {
            console.error(error);
        }
    }


    render() {
        return (
            <View>
                { this.state.loaderIsVisible ? (
                    <View style={myStyle.loadingStyle}>
                        <ActivityIndicator size={50} color="#2484E8" />
                    </View>
                ) : null}
            </View>
        );
    }
}

const myStyle = StyleSheet.create({
    fontstyles: {
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 20,
        color: 'purple'
    },
    subfontstyles: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 15,
        color: 'blue'
    },
    loadingStyle: {
        flex: 1, justifyContent: 'center', alignItems: "center"
    }
});
export default FormDataExample;