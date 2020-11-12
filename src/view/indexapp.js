import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
function indexapp({ navigation }) {
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     if (count === 20) {
    //         getData();
    //     } else {
    //         setCount(count + 1);
    //     }
    // }, [count]);

    getData = async () => {
        try {
            const id = await AsyncStorage.getItem('userId');
            if (id !== null) {
                navigation.navigate("MAIN");
            } else {
                navigation.navigate("LOGIN");
            }
        } catch (e) {
            console.log("read error");
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <SafeAreaView>
                <Icon
                    name="bulb1"
                    size={200}
                    style={{ textAlign: 'center' }}
                />
                <Text style={{ fontSize: 40, fontWeight: "800", marginTop: 50, marginBottom: 30, textAlign: 'center' }}>TOMORO BLOGS</Text>
                <TouchableOpacity onPress={() => getData()}>
                    <Text style={{ fontSize: 16, fontWeight: "800", marginBottom: 30, textAlign: 'center', color: 'rgba(100,100,100,1)' }}>Touch to continue</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}

export default indexapp
