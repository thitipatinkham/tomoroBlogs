import React, { useState, useEffect } from 'react'
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from '../stylesheet/input'
import { Button } from 'react-native-elements';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { USER_LOGIN } from '../config/config';
import AsyncStorage from '@react-native-community/async-storage';
function login({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loadingPage, setLoadingPage] = useState();

    const onLoginPress = async () => {
        await SetloadingPage(true);
        user = {
            "username": username.toLocaleLowerCase(),
            "password": password
        }
        axios.post(USER_LOGIN, user)
            .then(response => {
                SetloadingPage(false);
                if (response.data.responseCode === "0000") {
                    storeData(response.data.responseData.userId, response.data.responseData.username, response.data.responseData.name, response.data.responseData.age, response.data.responseData.gender,response.data.responseData.image);
                    navigation.push('MAIN');
                } else {
                    Alert.alert(response.data.responseMessage, "please check login data.");
                }
                console.log(response);
            })
            .catch(error => {
                Alert.alert("Login fail try again.")
                console.log("add erro", error);
            });

    }
    storeData = async (id, username, name, age, gender,image) => {
        try {
            await AsyncStorage.setItem('userId', "" + id);
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('age', age);
            await AsyncStorage.setItem('gender', gender);
            await AsyncStorage.setItem('image', image);
        } catch (e) {
            console.log("save error");
        }
    }
    SetloadingPage = (boolean) => {
        setLoadingPage(boolean);
    }
    if (loadingPage) {
        return (
            <>
                <SafeAreaView>
                    <View style={{ height: '100%', paddingTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                        <ActivityIndicator size="large" color="#000" />
                        <TextInput style={{ marginTop: 5 }}>Loading...</TextInput>
                    </View>
                </SafeAreaView>
            </>
        );
    } else {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.loginFormView}>
                            <SafeAreaView>
                                <Text style={styles.logoText}>LOGIN</Text>
                                <TextInput onChangeText={(username) => setUsername(username)} placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <TextInput onChangeText={(password) => setPassword(password)} placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} />
                                <Button
                                    buttonStyle={styles.loginButton}
                                    onPress={() => onLoginPress()}
                                    title="Login"
                                />
                                <Button
                                    buttonStyle={styles.fbLoginButton}
                                    titleStyle={{ color: "#000" }}
                                    onPress={() => navigation.navigate('CREATE_ACCOUNT')}
                                    title="Create account ?"

                                />
                            </SafeAreaView>
                        </View>
                        <View>
                            <SafeAreaView>
                                <Text style={{ textAlign: 'center' }}>
                                    <Icon3
                                        name="copyright"
                                    />
                                 2020 Tomoroblogs
                            </Text>
                            </SafeAreaView>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

        )
    }
}

export default login
