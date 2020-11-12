import React, { useState ,useEffect} from 'react'
import { View, Text, SafeAreaView, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native'
import { ListItem, SearchBar } from 'react-native-elements'
import styles from '../stylesheet/input'
const list = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    }
]
function messenger({ navigation,route }) {
    const [search, setSearch] = useState();
    const [searchLoading, setSearchLoading] = useState(false);
    const onSearchUserBlogger = (text) => {
        setSearch(text);
        if (text === '') {
            setSearchLoading(false);
        } else {
            setSearchLoading(true);
        }

    }
    return (
        <KeyboardAvoidingView style={styles.containerView} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.loginScreenContainer}>
                    <View style={styles.loginFormView}>
                        <SafeAreaView>
                            <View>
                                <SearchBar
                                    placeholder="search..."
                                    onChangeText={(text) => onSearchUserBlogger(text)}
                                    value={search}
                                    showLoading={searchLoading}
                                />
                            </View>
                            <View>
                                {
                                    list.map((item, i) => (
                                        <ListItem
                                            key={i}
                                            title={item.name}
                                            subtitle={item.subtitle}
                                            subtitleStyle={{ color: '#aaa' }}
                                            leftAvatar={{ source: { uri: item.avatar_url } }}
                                            bottomDivider
                                            chevron
                                            onPress={() => navigation.navigate('MYCHAT', { userId: item.name, image: item.avatar_url })}
                                            badge={{ value: '99+', textStyle: { color: '#fff' } }}
                                        />
                                    ))
                                }
                            </View>
                        </SafeAreaView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default messenger
