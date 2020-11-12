import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import IndexApp from '../view/indexapp'
import Login from '../view/login'
import CreateAccount from '../view/createaccount'
import Feed from '../view/feed'
import MyBlogs from '../view/myblogs'
import CreateBlog from '../view/createblog'
import MyMenu from '../view/menu'
import Blogger from '../view/blogger'
import EditProfile from '../view/editprofile'
import Messenger from '../view/messenger'
import MyChat from '../view/mychat'
import BlogDetail from '../view/blogdetail'
import Commment from '../view/comment'
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/AntDesign';

const RootStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const FeedStack = createStackNavigator();
const MyBlogsStack = createStackNavigator();
const CreateBlogStack = createStackNavigator();
const LoginStack = createStackNavigator();
const CreateAccountStack = createStackNavigator();
const IndexStack = createStackNavigator();
const MyMenuStack = createStackNavigator();
const BloggerStack = createStackNavigator();
const EditProfileStack = createStackNavigator();
const MessengerStack = createStackNavigator();
const BlogDetailStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" headerMode="none" >
        <RootStack.Screen name="INDEX" component={Index_Stack} />
        <RootStack.Screen name="LOGIN" component={Login_Stack} />
        <RootStack.Screen name="CREATE_ACCOUNT" component={CreateAccount_Stack} />
        <RootStack.Screen name="MAIN" component={Tabs} />
        <RootStack.Screen name="MENU" component={Menu_Stack} />
        <RootStack.Screen name="BLOG_ACCOUNT" component={Blogger_Stack} />
        <RootStack.Screen name="EDITPROFILE" component={EditProfile_Stack} />
        <RootStack.Screen name="MESSENGER" component={Messenger_Stack} />
        <RootStack.Screen name="BLOG_DETAIL" component={BlogDetail_Stack} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
function BlogDetail_Stack({ navigation }) {
  return (
    <BlogDetailStack.Navigator>
      <BlogDetailStack.Screen
        name="BLOG"
        component={BlogDetail}
        options={{
          headerRight: () => (
            <Icon3
              name="close"
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('MAIN')}
            />
          ),
        }}
      />
      <BlogDetailStack.Screen
        name="COMMENT"
        component={Commment}
        options={{
          headerTitleAlign: 'center',
          headerBackTitle: '',
          title: 'Comment',
        }}
      />
    </BlogDetailStack.Navigator>
  );
}

function Messenger_Stack({ navigation, route }) {
  return (
    <MessengerStack.Navigator>
      <MessengerStack.Screen
        name="Messenger"
        component={Messenger}
        options={{
          headerRight: () => (
            <Icon3
              name="close"
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('MAIN')}
            />
          ),
        }}
      />
      <MessengerStack.Screen
        name="MYCHAT"
        component={MyChat}
        options={{
          headerTitleAlign: 'center',
          headerBackTitle: '',
          title: 'MyChat',
        }}
      />
    </MessengerStack.Navigator>
  );
}

function EditProfile_Stack({ navigation }) {
  return (
    <EditProfileStack.Navigator>
      <EditProfileStack.Screen
        name="EDIT PROFILE"
        component={EditProfile}
        options={{
          headerRight: () => (
            <Icon3
              name="close"
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('MAIN')}
            />
          ),
        }}
      />
    </EditProfileStack.Navigator>
  );
}

function Blogger_Stack({ navigation }) {
  return (
    <BloggerStack.Navigator>
      <BloggerStack.Screen
        name="Blogger"
        component={Blogger}
        options={{
          headerRight: () => (
            <Icon3
              name="close"
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('MAIN')}
            />
          ),
        }}
      />
    </BloggerStack.Navigator>
  );
}

function Menu_Stack({ navigation }) {
  return (
    <MyMenuStack.Navigator>
      <MyMenuStack.Screen
        name="MENU"
        component={MyMenu}
        options={{
          headerRight: () => (
            <Icon3
              name="close"
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('MAIN')}
            />
          ),
        }}
      />
    </MyMenuStack.Navigator>
  );
}

function Index_Stack() {
  return (
    <IndexStack.Navigator>
      <IndexStack.Screen
        name="TOMORO BLOGS"
        component={IndexApp}
        options={{
          headerShown: false,
        }}
      />
    </IndexStack.Navigator>
  );
}

function Login_Stack() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="TOMORO BLOGS"
        component={Login}
      />
    </LoginStack.Navigator>
  );
}
function CreateAccount_Stack({ navigation }) {
  return (
    <CreateAccountStack.Navigator>
      <CreateAccountStack.Screen
        name="Create Account"
        component={CreateAccount}
        options={{
          headerRight: () => (
            <Icon3
              name="close"
              style={{ marginRight: 10 }}
              size={30}
              onPress={() => navigation.navigate('LOGIN')}
            />
          ),
        }}
      />
    </CreateAccountStack.Navigator>
  );
}

function Tabs({ navigation }) {
  return (
    <Tab.Navigator
      tabBarPosition={'bottom'}
      tabBarOptions={{
        activeTintColor: '#000',
        showIcon: true,
        indicatorStyle: {
          top: 0,
        },
        labelStyle: {
          fontSize: 11
        },
        style: {
          height: 80
        }
      }}>
      <Tab.Screen name="Feed"
        options={{
          tabBarLabel: 'Feeds',
          tabBarIcon: ({ color }) => (
            <Icon3
              name="rss-feed"
              color={color}
              size={26}
            />
          ),
        }}>
        {() => (
          <FeedStack.Navigator>
            <FeedStack.Screen
              name="TOMORO BLOGS"
              component={Feed}
              options={{
                headerShown: false,
              }}
            />
          </FeedStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Create Blog"
        options={{
          tabBarLabel: 'Create Blog',
          tabBarIcon: ({ color }) => (
            <Icon
              name="plussquare"
              color={color}
              size={26}
            />
          ),
        }}>
        {() => (
          <CreateBlogStack.Navigator>
            <CreateBlogStack.Screen
              name="Create Blog"
              component={CreateBlog}
              options={{
                headerShown: false,
              }}
            />
          </CreateBlogStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="My Blogs"
        options={{
          tabBarLabel: 'My Blogs',
          tabBarIcon: ({ color }) => (
            <Icon3
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}>
        {() => (
          <MyBlogsStack.Navigator>
            <MyBlogsStack.Screen
              name="MY BLOGS"
              component={MyBlogs}
              options={{
                headerTitleAlign: 'left',
                headerRight: () => (
                  <Icon3
                    name="menu"
                    style={{ marginRight: 10 }}
                    size={30}
                    onPress={() => navigation.navigate('MENU')}
                  />
                ),
              }}
            />
            {/* <MyBlogsStack.Screen
              name="BLOG"
              component={BlogDetail_Stack}
              options={{
                headerTitleAlign: 'center',
                headerBackTitle: '',
              }}
            /> */}
          </MyBlogsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
export default App;

