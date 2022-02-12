import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
const Stack = createNativeStackNavigator();
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/core'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import image from "../assets/profile1.png"



const ProfileScreen = () => {
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
    <View>
    <Image style={styles.image} source={image}/>
             <Text style={styles.introtext}>Welcome</Text>
             <Text style={styles.title}>{auth.currentUser?.email} </Text>
             <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignOut} style={[styles.button,styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Sign Out</Text>

        </TouchableOpacity>
        </View>
        </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#0782F9",
        width:"100%",
        padding:15,
        borderRadius:10,
        alignItems:"center",

    },
    buttonText:{
        color:"white",
        fontWeight:"700",
        fontSize:16,

    }, 
    buttonOutline:{
        backgroundColor:"white",
        marginTop:5,
        borderColor:"#0782F9",
        borderWidth:2,

    },
    buttonOutlineText:{
        color:"#0782F9",
        fontWeight:"700",
        fontSize:36,

    },
    buttonContainer:{
        width: "60%",
        justifyContent:"center",
        alignItems:"center",
        marginTop:"115%",
        position: "absolute",
        left:80,
        right:50,
        
    },
    introtext:{
        fontSize:30,
        fontWeight:"800",
        marginTop:50,
        marginLeft:130,    
    },
    image:{
        width: "100%",
        height: "60%",

    },
    title:{
        fontSize:20,
        fontWeight:"800",
        marginLeft:110, 
        color:"blue"  ,
        fontWeight:"bold",


    }

})