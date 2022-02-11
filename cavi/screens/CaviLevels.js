import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import image from "../assets/search.png"

const CaviLevels = () => {
  return (
    <View>
    <Image style={styles.image} source={image}/>
    <Text style={styles.heading}>Cavi Levels</Text>
    <View>
      <Text style={styles.level}>Cavity Level 1</Text>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Read Further For Diagnostic</Text>
      </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default CaviLevels

const styles = StyleSheet.create({
  image:{
    
    width:"100%",
    height:"60%",
    borderRadius:40,
  }
})