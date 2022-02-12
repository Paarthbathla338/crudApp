

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import image from "../assets/home.png"
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CaviLevels from "./CaviLevels"
import AppointmentScreen from "./AppointmentScreen"


const Stack = createNativeStackNavigator();

const Tabs= createBottomTabNavigator();

const HomeScreen1 = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinylogo}
                source={image}
            />
            {/* <Text>Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
            <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity> */}
        <View style={styles.papaview}>
            <Text style={styles.introtext}>Welcome to
                <Text style={styles.title}> CaviTechtive</Text></Text>
            <Text style={styles.subhead}>Early Cavity Detection System</Text>
            </View>
        </View>
        
        
    )
}

<>
{/* <NavigationContainer>
<Tabs.Navigator>

<Tabs.Screen name="Home" component={HomeScreen}         options={{
  tabBarIcon: ({ color }) => <Entypo name="home" size={30}  color={color} style={{fontSize:35}}  />,
}}
/>
<Tabs.Screen name="CaviLevels" component={CaviLevels}   options={{
  tabBarIcon: ({ color }) => <SimpleLineIcons name="graph" size={30}  color={color} style={{fontSize:35}}  />,
}}/>
<Tabs.Screen name="Appointments" component={AppointmentScreen} options={{
  tabBarIcon: ({ color }) => <Ionicons name="person" size={30}  color={color} style={{fontSize:35}}  />,
}}/>



</Tabs.Navigator>
</NavigationContainer> */}
</>

export default HomeScreen1

const styles = StyleSheet.create({
    container: {
    },
    button: {
        backgroundColor: "#0782F9",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },


    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    tinylogo: {
        width: "100%",
        height: "70%",

    },
    introtext: {
        fontSize: 25,
        fontWeight: "800",
        marginTop: 20,
        marginLeft: 60,
    },
    title:{
        color:'blue',
        fontWeight:'bold',
    },
    subhead:{
        fontSize:20,
        textAlign: "center",
        color:"#707070"

    },
    papaview:{
        marginTop:50,
    }


})
