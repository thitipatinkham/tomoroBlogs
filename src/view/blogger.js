import React, { useEffect, useState } from 'react'
import { View, Text, Alert, SafeAreaView, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { FIND_MY_USER } from '../config/config';
import HeaderProfile from '../components/blogger/headerprofile'
import DescriptionProfile from '../components/blogger/descriptionProfile'
import ContentProfile from '../components/blogger/contentProfile'
function blogger({ navigation }) {
  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  useEffect(() => {
    getData();
  }, [])

  findMyUser = () => {
    axios({
      url: FIND_MY_USER,
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Token': userId
      },

    }).then((response) => {
      console.log(response);
    }).catch(error => {
      Alert.alert("Login fail try again.")

    });
  }

  getData = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      const username = await AsyncStorage.getItem('username');
      const name = await AsyncStorage.getItem('name');
      const age = await AsyncStorage.getItem('age');
      const gender = await AsyncStorage.getItem('gender');
      if (id !== null) {
        setUserId(id);
        setUsername(username);
        setName(name);
        setAge(age);
        setGender(gender);
      } else {
        deleteUserId();
      }
    } catch (e) {
      console.log("read error");
    }
  }
  deleteUserId = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('age');
      await AsyncStorage.removeItem('gender');
      navigation.push('LOGIN');
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
  }
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ backgroundColor: '#A6ACAF' }}>
            <HeaderProfile props={{ username: username, name: name, age: age, gender: gender }} />
          </View>
          <View>
            <DescriptionProfile />
          </View>
          <View style={{ marginTop: 10 }}>
            <ContentProfile />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default blogger
