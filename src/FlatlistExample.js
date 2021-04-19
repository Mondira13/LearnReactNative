import React, { useState } from "react";
import { Button, Text, View, FlatList, StyleSheet } from "react-native";


class FlatlistExample extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Mondira Pal',
                    mobile: '988756556'
                },
                {
                    id: 2,
                    name: 'Rahul Roy',
                    mobile: '7854334546'
                },
                {
                    id: 3,
                    name: 'Mou Pal',
                    mobile: '34536565'
                },
                {
                    id: 4,
                    name: 'Poly Pal',
                    mobile: '34665547'
                },
                {
                    id: 5,
                    name: 'Suvo Roy',
                    mobile: '23454657'
                },
                {
                    id: 6,
                    name: 'Piyali Das',
                    mobile: '35465786'
                }
            ]
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) =>
                        <Text style={myStyle.fontstyles}> {item.name}   {item.mobile} </Text>
                    }
                />
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
    }
});

export default FlatlistExample;