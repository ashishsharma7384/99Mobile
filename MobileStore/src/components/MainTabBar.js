import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './bottomTabBar/Home';
import Compare from './bottomTabBar/Compare';
import Profile from './bottomTabBar/Profile';
import Search from './bottomTabBar/Search';

const HomeStack = createStackNavigator();
const CompareStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabBar = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Compare"
        component={CompareStackScreen}
        options={{
          tabBarLabel: 'Compare',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="compare" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabBar;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={Home} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={35} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        }} />
</HomeStack.Navigator>
);

const CompareStackScreen = ({navigation}) => (
<CompareStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <CompareStack.Screen name="Compare" component={Compare} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        
        }} />
</CompareStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
    < ProfileStack.Navigator screenOptions={{
            headerStyle: {
            backgroundColor: '#1f65ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            }
        }}>
            < ProfileStack.Screen name="My Profile" component={Profile} options={{
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
            }} />
    </ ProfileStack.Navigator>
    );

    const SearchStackScreen = ({navigation}) => (
        <SearchStack.Navigator screenOptions={{
                headerStyle: {
                backgroundColor: '#1f65ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}>
                <SearchStack.Screen name="Setting" component={Search} options={{
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
                )
                }} />
        </SearchStack.Navigator>
        );


  