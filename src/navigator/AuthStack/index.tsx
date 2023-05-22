import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '../../screens/Authentication/Signin';
import {store} from '~/redux/Store';
import Signup from '~/screens/Authentication/Signup';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
