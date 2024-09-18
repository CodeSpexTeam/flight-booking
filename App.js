import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    
<NavigationContainer>
    <Stack.Navigator initialRouteName={Splash} screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}


