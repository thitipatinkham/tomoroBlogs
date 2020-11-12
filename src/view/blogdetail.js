import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
function blogdetail({ navigation, route }) {
    const [blogId, setBlogId] = useState();
    const [blogTitle, setBlogTitle] = useState();
    const [blogImage, setBlogImage] = useState();
    const [name, setName] = useState();
    const [liked, setLiked] = useState('rgba(131,131,131,1)');

    useEffect(() => {
        getData();
    }, [])
    getData = async () => {
        try {
            const blogId = await AsyncStorage.getItem('blogId');
            const blogTitle = await AsyncStorage.getItem('blogTitle');
            const blogImage = await AsyncStorage.getItem('blogImage');
            const name = await AsyncStorage.getItem('name');
            if (blogId !== null) {
                setBlogId(blogId);
                setBlogTitle(blogTitle);
                setBlogImage(blogImage);
                setName(name);
            } else {
                deleteData();
            }
        } catch (e) {
            console.log("read error");
        }
    }
    deleteData = async () => {
        try {
            await AsyncStorage.removeItem('blogId');
            await AsyncStorage.removeItem('blogTitle');
            await AsyncStorage.removeItem('blogImage');
            navigation.navigate('MAIN');
        } catch (error) {
            // Error retrieving data
            console.log(error.message);
        }
    }
    onLikeBlog = () => {
        if (liked === 'rgba(131,131,131,1)') {
            setLiked('rgba(33,137,220,1)');
        } else if (liked === 'rgba(33,137,220,1)') {
            setLiked('rgba(131,131,131,1)');
        }

    }

    return (
        <>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={{ height: 270, backgroundColor: '#fff', flex: 0.85 }}>
                        <ImageBackground source={{ uri: "data:image/jpg;base64," + blogImage }} style={{ width: '100%', height: "100%" }}>
                            <View style={{ height: 270, backgroundColor: 'rgba(30,30,30,0.5)', justifyContent: 'space-around', paddingLeft: 15, paddingRight: 15, paddingTop: 25, paddingBottom: 25 }}>
                                <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>{blogTitle}</Text>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>sub title</Text>
                            </View>
                        </ImageBackground>
                        <View style={{ padding: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Avatar
                                    rounded
                                    source={{
                                        uri: "data:image/jpg;base64," + blogImage
                                    }}
                                    size={20}
                                />
                                <Avatar
                                    rounded
                                    source={{
                                        uri: "data:image/jpg;base64," + blogImage
                                    }}
                                    size={20}
                                />
                                <Avatar
                                    rounded
                                    source={{
                                        uri: "data:image/jpg;base64," + blogImage
                                    }}
                                    size={20}
                                />
                                <Text style={{ color: 'rgba(131,131,131,1)', marginLeft: 10, marginTop: 2, fontWeight: 'bold' }}>Liked by thitipat and 2 others</Text>
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Text>blog datail</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ flex: 0.15, backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#e1e1e1', padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', }}>
                        <Avatar
                            containerStyle={{ marginLeft: 10 }}
                            rounded
                            source={{
                                uri: "data:image/jpg;base64," + blogImage
                            }}
                            size={40}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text>{name}</Text>
                            <Text style={{ color: 'rgba(131,131,131,1)' }}>19 Sep, 2020</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('COMMENT')} >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon3 name="commenting" size={18} color="rgba(131,131,131,1)" />
                                <Text style={{ color: 'rgba(131,131,131,1)', marginLeft: 10, marginTop: 2, fontWeight: 'bold' }}>3</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => onLikeBlog()} >
                            <View style={{ flexDirection: 'row' }}>
                                <Icon2 name="like1" size={18} color={liked} />
                                <Text style={{ color: liked, marginLeft: 10, marginTop: 2, fontWeight: 'bold' }}>3</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </>
    )
}

export default blogdetail
