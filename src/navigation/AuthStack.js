import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../../src/screens/Login/index';
import React from 'react';


const Stack = createNativeStackNavigator();

function AuthStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
  }