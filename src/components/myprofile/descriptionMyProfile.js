import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

function descriptionMyProfile({ navigation }) {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, paddingLeft: 15, paddingRight: 15, paddingTop: 25, paddingBottom: 25 }}>
            <View>
                <Text style={{ fontSize: 16 }}>About me</Text>
                <Text style={{ color: '#999999', marginTop: 10 }}>I'm a Traveler. I'm like listening to music, going to the cinema, walking with my friend, drawing pictures and traveling.</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <Text style={{ fontSize: 16 }}>My Favorite</Text>
                <Text style={{ color: '#999999', marginTop: 10 }}>Travel, music, movie and game</Text>
            </View>
        </View>
    )
}

export default descriptionMyProfile
