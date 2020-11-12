import React, { useEffect } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Avatar, Badge, Icon, withBadge } from 'react-native-elements';
function headerMyProfile({ navigation, props }) {
    const onSendMessenger = () => {
        navigation.navigate('MESSENGER');
    }
    const onEditProfile = () => {
        navigation.navigate('EDITPROFILE');
    }
    return (
        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            <ImageBackground source={require('../../assets/bg_header_myblogs.jpeg')} style={{ width: "100%", height: "100%" }} >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: 'rgba(30,30,30,0.6)', }}>
                    {/* <Icon name="face-profile" size={150} color="#fff" style={{ textAlign: 'center', marginTop: 30 }} /> */}
                    <View style={{ textAlign: 'center', marginTop: 30 }}>
                        <Avatar
                            rounded
                            source={{
                                uri: "data:image/jpg;base64,"+props.image,
                            }}
                            size={130}
                        />
                    </View>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 24,marginTop:10 }}>{props.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Icons name="map-marker" size={18} color="white" />
                        <Text style={{ color: '#fff', fontSize: 16 }}>Thailand</Text>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Button
                            buttonStyle={{ marginTop: 10, marginLeft: 5, marginRight: 5, paddingLeft: 35, paddingRight: 30 }}
                            titleStyle={{ fontSize: 14, color: "#fff", fontWeight: 'bold', marginLeft: 10, marginRight: 20 }}
                            onPress={() => onEditProfile()}
                            icon={<Icons name="account-edit" size={20} color="white" />}
                            title="EDIT PROFILE"
                        />
                        <Button
                            buttonStyle={{ marginTop: 10, marginLeft: 5, marginRight: 5, paddingLeft: 35, paddingRight: 30, backgroundColor: '#fff' }}
                            titleStyle={{ fontSize: 14, color: "#000", fontWeight: 'bold', marginLeft: 10, marginRight: 20 }}
                            onPress={() => onSendMessenger()}
                            icon={<Icons name="message-processing" size={20} color="#000" />}
                            title="MESSENGER"
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
                        <View style={{ marginLeft: 30, marginRight: 30 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>-</Text>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>Followers</Text>
                        </View>
                        <View style={{ marginLeft: 30, marginRight: 30 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>-</Text>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>Following</Text>
                        </View>
                        <View style={{ marginLeft: 30, marginRight: 30 }}>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>-</Text>
                            <Text style={{ textAlign: 'center', color: '#fff' }}>Posts</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default headerMyProfile
