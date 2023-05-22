import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {store} from '~/redux/Store';
import RobotTournaments from '~/screens/RobotTournaments';

const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RobotTournaments" component={RobotTournaments} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
