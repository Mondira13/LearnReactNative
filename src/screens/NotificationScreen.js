import React, { useState } from 'react';
import {
    Image,
    Text,
    View, Button, StyleSheet, Toucha, TouchableOpacity
} from 'react-native';


class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={myStyles.fontStyle}> My Notification Screen </Text>
                </View>
            </View>
        );
    }
}

const myStyles = StyleSheet.create({
    fontStyle: {
        fontSize:30,
        color: 'orange',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});
export default NotificationScreen;