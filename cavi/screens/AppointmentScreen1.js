import * as React from 'react';
import { StatusBar, Animated, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
const {width, height} = Dimensions.get('screen');

// https://www.flaticon.com/packs/retro-wave
// inspiration: https://dribbble.com/shots/11164698-Onboarding-screens-animation
// https://twitter.com/mironcatalin/status/1321180191935373312

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
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
      }
]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
