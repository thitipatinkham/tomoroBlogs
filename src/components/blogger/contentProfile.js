import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ImageBackground, TouchableHighlight, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        image: require('../../assets/bg_header_myblogs.jpeg')
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        image: require('../../assets/image1.jpg')
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        image: require('../../assets/bg_header_myblogs.jpeg')
    },

];

function contentProfile({ navigation }) {
    const [selectButton, setSelectButton] = useState('Posts');
    const [selectPosts, setSelectPosts] = useState('#000');
    const [selectShots, setSelectShots] = useState('#8e8e8f');
    useEffect(() => {
        setSelectButton('Posts');
        setSelectPosts('#000');
        setSelectShots('#8e8e8f');
    }, [])
    const onSelectPosts = () => {
        setSelectButton('Posts');
        setSelectPosts('#000');
        setSelectShots('#8e8e8f');
    }
    const onSelectShots = () => {
        setSelectButton('Shots');
        setSelectPosts('#8e8e8f');
        setSelectShots('#000');
    }
    const onClickImage = () => {

    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                    <Button
                        buttonStyle={{ borderRadius: 0, backgroundColor: '#fff' }}
                        titleStyle={{ fontSize: 14, color: selectPosts, fontWeight: 'bold', marginLeft: 10, marginRight: 20 }}
                        onPress={() => onSelectPosts()}
                        icon={<Icon name="code-greater-than-or-equal" size={20} color={selectPosts} />}
                        title="Posts"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Button
                        buttonStyle={{ borderRadius: 0, backgroundColor: '#fff' }}
                        titleStyle={{ fontSize: 14, color: selectShots, fontWeight: 'bold', marginLeft: 10, marginRight: 20 }}
                        onPress={() => onSelectShots()}
                        icon={<Icon name="image-filter-center-focus-weak" size={20} color={selectShots} />}
                        title="Shots"
                    />
                </View>
            </View>
            {selectButton === "Posts" && DATA != null &&
                <FlatList
                    style={{ width: '100%' }}
                    data={DATA}
                    numColumns={1}
                    renderItem={({ item }) => (
                        <View style={{ width: '100%', backgroundColor: '#f2f2f3' }}>
                            <TouchableHighlight
                                style={{
                                    justifyContent: 'center', height: 230,
                                    alignItems: 'center', backgroundColor: '#fff'
                                }}
                                onPress={() => onClickImage()}>
                                <ImageBackground source={item.image} style={{ width: '100%', height: "100%" }}>
                                    <View style={{ height: 230, backgroundColor: 'rgba(30,30,30,0.5)', justifyContent: 'space-between', paddingLeft: 15, paddingRight: 15, paddingTop: 25, paddingBottom: 25 }}>
                                        <View>
                                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 30 }}>{item.title}</Text>
                                            <Text style={{ color: '#fff', marginTop: 20 }}>10 useful Tips</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon3 name="commenting" size={18} color="white" />
                                                <Text style={{ color: '#fff', marginLeft: 10, marginTop: 2, fontWeight: 'bold' }}>2</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon2 name="like1" size={18} color="white" />
                                                <Text style={{ color: '#fff', marginLeft: 10, marginTop: 2, fontWeight: 'bold' }}>3</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Icon name="star-box" size={18} color="white" />
                                                <Text style={{ color: '#fff', marginLeft: 10, marginTop: 2, fontWeight: 'bold' }}>rating</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </TouchableHighlight>
                        </View>
                    )}
                />
            }
            {selectButton === "Posts" && DATA.length <= 0 &&
                <View style={{backgroundColor: 'rgba(242,242,243,1)',justifyContent:'center',alignItems:'center',height:250}}>
                    <Icon name="code-greater-than-or-equal" size={100} color={selectPosts}/>
                    <Text>Not Found Posts</Text>
                </View>
            }
            {selectButton === "Shots" &&
                <FlatList
                    style={{ width: '100%' }}
                    data={DATA}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={{ width: '33.33%', backgroundColor: '#fff' }}>
                            <TouchableHighlight
                                style={{
                                    height: 100, justifyContent: 'center',
                                    alignItems: 'center', backgroundColor: '#8e8e8f'
                                }}
                                onPress={() => onClickImage()}>
                                <Image source={item.image} style={{ resizeMode: 'cover', width: '100%', height: "100%" }} />
                            </TouchableHighlight>
                        </View>
                    )}
                />
            }
             {selectButton === "Shots" && DATA.length <= 0 &&
                <View style={{backgroundColor: 'rgba(242,242,243,1)',justifyContent:'center',alignItems:'center',height:250}}>
                    <Icon name="image-filter-center-focus-weak" size={100} color={selectShots} />
                    <Text>Not Found Shots</Text>
                </View>
            }
        </View>
    )
}


export default contentProfile
