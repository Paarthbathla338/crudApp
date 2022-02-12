import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import image from "../assets/home.png"
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CaviLevels from "./CaviLevels"
import AppointmentScreen from "./AppointmentScreen"
import HomeScreen1 from "./HomeScreen1"
import ProfileScreen from "./ProfileScreen"
import AppointmentScreen1 from "./AppointmentScreen1"



const Stack = createNativeStackNavigator();

const Tabs= createBottomTabNavigator();

const HomeScreen = () => {

    return (
<Tabs.Navigator>

<Tabs.Screen name="Home" component={HomeScreen1}         options={{
  tabBarIcon: ({ color }) => <Entypo name="home" size={30}  color={color} style={{fontSize:35}}  />,
}} 
/>
<Tabs.Screen name="Appointments" component={AppointmentScreen} options={{
  tabBarIcon: ({ color }) => <Ionicons name="person" size={30}  color={color} style={{fontSize:35}}  />,
}}/>

<Tabs.Screen name="Profile" component={ProfileScreen} options={{
  tabBarIcon: ({ color }) => <AntDesign name="profile" size={30}  color={color} style={{fontSize:35}}  />,
}}/>




</Tabs.Navigator>

    )
}

export default HomeScreen


