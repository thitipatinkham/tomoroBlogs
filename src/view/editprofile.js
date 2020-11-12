import React, { useEffect, useState } from 'react'
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, StyleSheet, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import styles from '../stylesheet/createaccount'
import AsyncStorage from '@react-native-community/async-storage';
import { Button, Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import axios from 'axios';
import RNPickerSelect from 'react-native-picker-select';
import { EDIT_USER } from '../config/config';

function editprofile({ navigation }) {
    const [userId, setUserId] = useState();
    const [username, setUsername] = useState('');
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [image, setImage] = useState();
    useEffect(() => {
        getData();
    }, [])
    getData = async () => {
        try {
            const id = await AsyncStorage.getItem('userId');
            const username = await AsyncStorage.getItem('username');
            const name = await AsyncStorage.getItem('name');
            const age = await AsyncStorage.getItem('age');
            const gender = await AsyncStorage.getItem('gender');
            const image = await AsyncStorage.getItem('image');
            if (id !== null) {
                setUserId(id);
                setUsername(username);
                setName(name);
                setAge(age);
                setGender(gender);
                setImage(image);
            } else {
                deleteUserId();
            }
        } catch (e) {
            console.log("read error");
        }
    }
    const onEditImage = () => {

    }
    const onEditProfile = () => {
        Alert.alert(
            'Confirm edit profile',
            'please verify data.',
            [
                { text: 'Cancel' },
                { text: 'OK', onPress: () => submitEditProfile() },
            ],
            { cancelable: false }
        )
    }
    const submitEditProfile = () => {
        axios({
            url: EDIT_USER,
            method: 'put',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'key': userId
            },
            data: {
                "name": name,
                "age": age,
                "gender": gender,
                "image": image
            }
        }).then(response => {
            if (response.data.responseCode === "0000") {
                Alert.alert("Edit success");
                storeDataEditProfile(name, age, gender, image);
            } else if (response.data.responseCode === "0002") {
                Alert.alert("Edit fail", "not found user");
            } else {
                Alert.alert("Edit fail", "please try again");
            }
            console.log("response", response);
        })
            .catch(error => {
                console.log("Edit erro", error);
            });
    }
    storeDataEditProfile = async (name, age, gender, image) => {
        try {
            await AsyncStorage.setItem('name', name);
            await AsyncStorage.setItem('age', age);
            await AsyncStorage.setItem('gender', gender);
            await AsyncStorage.setItem('image', image);
        } catch (e) {
            console.log("merge error");
        }
    }
    deleteUserId = async () => {
        try {
            await AsyncStorage.removeItem('userId');
            await AsyncStorage.removeItem('username');
            await AsyncStorage.removeItem('name');
            await AsyncStorage.removeItem('age');
            await AsyncStorage.removeItem('gender');
            await AsyncStorage.removeItem('image');
            navigation.push('LOGIN');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.ScreenContainer}>
                    <View style={styles.FormView}>
                        <SafeAreaView>
                            {/* <Text style={styles.logoText}>Create Account</Text> */}
                            <View style={{ textAlign: 'center', marginTop: 30, marginBottom: 30, alignItems: 'center' }}>
                                <Avatar
                                    rounded
                                    source={{
                                        uri: "data:image/jpg;base64," + image,
                                    }}
                                    size={130}
                                    showEditButton
                                    onEditPress={() => onEditImage()}
                                />
                            </View>
                            <Text style={{ paddingLeft: 10, marginLeft: 10, marginRight: 15, marginTop: 5, marginBottom: 5, }}>Name:</Text>
                            <TextInput value={name} onChangeText={(name) => setName(name)} placeholder="name" placeholderColor="#c4c3cb" style={styles.FormTextInput} />
                            <Text style={{ paddingLeft: 10, marginLeft: 10, marginRight: 15, marginTop: 5, marginBottom: 5, }}>Age:</Text>
                            <TextInput value={age} onChangeText={(age) => setAge(age)} placeholder="age" placeholderColor="#c4c3cb" style={styles.FormTextInput} keyboardType='numeric' />
                            <Text style={{ paddingLeft: 10, marginLeft: 10, marginRight: 15, marginTop: 5, marginBottom: 5, }}>Gender:</Text>
                            <RNPickerSelect
                                value={gender}
                                onValueChange={(gender) => setGender(gender)}
                                style={pickerSelectStyles}
                                items={[
                                    { label: 'male', value: 'male' },
                                    { label: 'female', value: 'female' },
                                ]}
                            />
                            <Button
                                buttonStyle={styles.Button}
                                onPress={() => onEditProfile()}
                                title="Submit"
                            />
                            <Text></Text>
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

export default editprofile
