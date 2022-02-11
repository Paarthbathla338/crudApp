import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import image from "../assets/home.png"

const HomeScreen = () => {

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

export default HomeScreen

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
        borderRadius: 40,

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
