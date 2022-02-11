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


const Stack = createNativeStackNavigator();

const Tabs= createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>

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
      
      
      {/* <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator> */}
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
