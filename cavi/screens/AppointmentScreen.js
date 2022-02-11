import { StyleSheet, Text, View ,Image,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import image from "../assets/search.png"

const AppointmentScreen = () => {
  const data=[
    {
      url:"https://media.istockphoto.com/photos/indian-male-doctor-picture-id177373093?k=20&m=177373093&s=612x612&w=0&h=-PQwmaJszuQyxLQYuWL4VL731lr_dnhrttc4AOcB3-k=",
      name:"Dr. RC Batra",
      yop:"20 years",
      pricing:"Rs.2300/hr",
      rating:"⭐⭐⭐⭐⭐"

    },
    {
      url:"https://image.shutterstock.com/image-photo/portrait-doctor-smiling-260nw-155685458.jpg",
      name:"Dr. Ritwik Rathore",
      yop:"7 years",
      pricing:"Rs.1200/hr",
      rating:"⭐⭐⭐⭐"  },
    {
      url:"https://www.motherhoodindia.com/wp-content/uploads/2021/09/Chennai-Dr.-Aarthi-Priyadharshini.jpg",
      name:"Dr. Amrita Pal",
      yop:"5 years",
      pricing:"Rs.500/hr",
      rating:"⭐⭐⭐"  
    }]
  
  return (
    <View>
    <Text style={styles.heading}>Book an Appointment</Text>
    {data.map(doctors=>{
      return(
        <View style={styles.papaview}>
        

        <Image style={styles.image} source={{uri:doctors.url}}/>

        <View style={styles.babyview1}>
        <Text style={styles.name}>{doctors.name}</Text>
        <Text style={styles.yop}>{doctors.yop}</Text>
        <Text style={styles.pricing}>{doctors.pricing}</Text>
        <Text style={styles.rating}>{doctors.rating}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book an Appointment</Text>
        </TouchableOpacity>
        </View>


        </View>
      )
    })}
    </View>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
  papaview:{
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,

    marginTop:20,
    backgroundColor: '#fff',
    borderRadius:15,
    justifyContent:"center",
    height:"25%",
    borderColor: 'black',
    borderWidth: 1,
  },
  name:{
    fontWeight:"bold",
    fontSize:20,
    marginLeft:10,
  },
  yop:{
    marginLeft:10,
    color:"#707070"


  },
  pricing:{
    fontWeight:"bold",
    fontSize:15,
    marginLeft:10,


  },
  rating:{
    marginLeft:10,
    fontWeight:"bold",

  },
  button:{
    width:"50%",
    height:30,
    borderRadius:15,
    marginLeft:10,
    backgroundColor:"#0782F9",
    marginTop:10
  },
  buttonText:{
    color:"white",
    fontWeight:"700",
    fontSize:16,
    marginLeft:10
  },
  image:{
    width:120,
    height:120,
    borderRadius:100,
    position: "absolute",
    right:0
  },
  logimage:{
    width: "100%",
    height: "30%",
    borderRadius: 40,

  },
  heading: {
    fontSize: 25,
    fontWeight: "800",
    marginTop: 20,
    marginLeft: 70,
    alignItems: "center",
    fontWeight: "bold",
    color:"green",

  }

})