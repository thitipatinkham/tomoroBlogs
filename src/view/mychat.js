import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Avatar } from 'react-native-elements';

function mychat({ navigation, route }) {
    useEffect(() => {
        navigation.setOptions({
            title: route.params.userId,
            headerRight: () => (
                <Avatar
                    containerStyle={{ marginRight: 10 }}
                    rounded
                    source={{
                        uri: route.params.image
                    }}
                    size="small"
                />
            ),
        })
    }, [])

    return (
        <View>
            <Text>{route.params.userId}</Text>
        </View>
    )
}

export default mychat

