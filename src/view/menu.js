import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native'
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from 'react-native-paper';
function menu({ navigation }) {
    const onLogout = () => {
        Alert.alert(
            'Confirm Logout',
            'are you sure ?',
            [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => deleteUserId() },
            ],
            { cancelable: false }
        )
    }
    deleteUserId = async () => {
        try {
            await AsyncStorage.removeItem('userId');
            await AsyncStorage.removeItem('username');
            await AsyncStorage.removeItem('name');
            await AsyncStorage.removeItem('age');
            await AsyncStorage.removeItem('gender');
            await AsyncStorage.removeItem('blogId');
            await AsyncStorage.removeItem('blogTitle');
            await AsyncStorage.removeItem('blogImage');
            navigation.push('LOGIN');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }

    const navigateChangepassword = () => {
        
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextInput>My Account</TextInput>
            <View style={{ flex: 1 }}>
                <Button
                    buttonStyle={{ marginTop:10,marginLeft: 10, marginRight: 10 }}
                    titleStyle={{ color: "#fff" }}
                    onPress={() => navigateChangepassword()}
                    title="Change password"
                />
                <Button
                    buttonStyle={{ marginTop:10,marginLeft: 10, marginRight: 10 }}
                    titleStyle={{ color: "#fff" }}
                    onPress={() => onLogout()}
                    title="Logout"
                />
            </View>
        </SafeAreaView>
    )
}

export default menu
