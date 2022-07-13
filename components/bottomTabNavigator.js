import { StyleSheet, TabBarIOS, Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/transaction';
import SearchScreen from '../screens/search';
import React, { Component } from 'react';

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name='transactionScreen'
                        component={TransactionScreen} />
                    <Tab.Screen
                        name='searchScreen'
                        component={SearchScreen} />   
                        
                </Tab.Navigator>
            </NavigationContainer>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

