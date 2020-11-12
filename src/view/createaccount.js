import React, { useState } from 'react'
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import styles from '../stylesheet/createaccount'
import { Button } from 'react-native-elements';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { CREATE_USER } from '../config/config';
function createaccount({ navigation }) {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const onCreateAccount = () => {
        Alert.alert(
            'Confirm create account',
            'please verify data.',
            [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => submitCreateAccount() },
            ],
            { cancelable: false }
        )
    }
    const submitCreateAccount = () => {
        user = {
            "username": username.toLocaleLowerCase(),
            "name": name,
            "age": age,
            "gender": gender,
            "password": password
        }
        axios.post(CREATE_USER, user)
            .then(response => {
                if (response.data.responseCode === "0000") {
                    Alert.alert("Create success");
                    navigation.push('LOGIN');
                }else if(response.data.responseCode === "0002"){
                    Alert.alert("Create fail","username duplicate");
                }else{
                    Alert.alert("Create fail","please try again");
                }
                console.log("response", response);
            })
            .catch(error => {
                console.log("add erro", error);
            });

    }
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.ScreenContainer}>
                    <View style={styles.FormView}>
                        <SafeAreaView>
                            {/* <Text style={styles.logoText}>Create Account</Text> */}
                            <Icon
                                name="account-multiple-plus-outline"
                                size={200}
                                style={styles.logo}
                            />
                            <TextInput onChangeText={(name) => setName(name)} placeholder="name" placeholderColor="#c4c3cb" style={styles.FormTextInput} />
                            <TextInput onChangeText={(username) => setUsername(username)} placeholder="username" placeholderColor="#c4c3cb" style={styles.FormTextInput} />
                            <TextInput onChangeText={(password) => setPassword(password)} placeholder="Password" placeholderColor="#c4c3cb" style={styles.FormTextInput} secureTextEntry={true} />
                            <TextInput onChangeText={(age) => setAge(age)} placeholder="age" placeholderColor="#c4c3cb" style={styles.FormTextInput} keyboardType='numeric' />
                            <RNPickerSelect
                                onValueChange={(gender) => setGender(gender)}
                                style={pickerSelectStyles}
                                items={[
                                    { label: 'male', value: 'male' },
                                    { label: 'female', value: 'female' },
                                ]}
                            />
                            <Button
                                buttonStyle={styles.Button}
                                onPress={() => onCreateAccount()}
                                title="Submit"
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

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    inputAndroid: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
    },
});

export default createaccount
