import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, Keyboard, SafeAreaView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Button } from 'react-native-elements';
function feed({ navigation }) {
  const [name, setName] = useState('');
  useEffect(() => {

  }, []);
  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView>
          <Text>Feed screen</Text>
          <Button
            buttonStyle={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}
            titleStyle={{ color: "#fff" }}
            onPress={() => navigation.push("BLOG_ACCOUNT")}
            title="BLOG ACCOUNT"
          />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>

  );
}

export default feed;
