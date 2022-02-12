import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CaviLevels from "./screens/CaviLevels"
import AppointmentScreen from "./screens/AppointmentScreen"
import { Ionicons,Entypo,AntDesign,FontAwesome5,MaterialIcons,FontAwesome,SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import HomeScreen1 from "./screens/HomeScreen1"


const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer >


      
      
      <Stack.Navigator  screenOptions={{headerShown: false}}>
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} screenOptions={{headerShown:false}}  />


      </Stack.Navigator>
    </NavigationContainer>
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
