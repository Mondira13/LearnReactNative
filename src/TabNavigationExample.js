import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './screens/ChatScreen';
import NotificationScreen from './screens/NotificationScreen';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();
const myIcon = <Icon name="rocket" size={30} color="#900" />;

class TabNavigationExample extends React.Component {
    render() {
        return (
            <Tab.Navigator 
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Chat" component={ChatScreen} options={{
                    tabBarLabel: ({ text }) => (
                        <Text style={{ fontSize: 13, fontStyle: 'italic' }}> Chat </Text>
                    ),
                    tabBarIcon: ({ tontColor }) => (
                        <Image
                            source={require('./images/chat.png')}
                            resizeMode='contain'
                            style={{ width: 20, height: 20 }}
                        />
                    )
                }} />
                <Tab.Screen name="Notification" component={NotificationScreen}
                    options={{
                        tabBarLabel: ({ text }) => (
                            <Text style={{ fontSize: 13, fontStyle: 'italic' }}> Notification </Text>
                        ),
                        tabBarIcon: ({ tontColor }) => (
                            <Image
                                source={require('./images/notificationicon.jpg')}
                                resizeMode='contain'
                                style={{ width: 20, height: 20 }}
                            />
                        )
                    }} />
            </Tab.Navigator>
        );
    }
}

export default TabNavigationExample;