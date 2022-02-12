import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import image from "../assets/search.png"



const CaviLevels = () => {
  return (
    <View>
    <Image style={styles.image} source={image}/>
    <Text style={styles.heading}>Cavi Levels</Text>
    
    <View style={styles.papaview}>
      <TouchableOpacity style={styles.button}  >
        <Text style={styles.buttonText}>Cavity Level 1</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.papaview1}>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Cavity Level 2</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.papaview2}>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Cavity Level 3</Text>
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
  },
  heading:{
    fontSize: 25,
    fontWeight: "800",
    marginTop: 20,
    marginLeft: 130,
    alignItems: "center",
    fontWeight: "bold",
    color:"green",

  }, 
  level:{
    fontSize:25,
    fontWeight: "bold",
    marginTop:10,
    marginLeft:10,
    marginRight:10,
  },
  button:{
  },
  buttonText:{
    color:"#0782F9",
    marginLeft:10
  },
  papaview:{ marginBottom:10,  alignItems: "center", marginTop:10},
  papaview1:{marginBottom:10,alignItems: "center"},
  papaview2:{marginBottom:10,  alignItems: "center"},

})