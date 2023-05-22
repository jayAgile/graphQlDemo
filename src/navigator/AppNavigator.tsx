import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Signin from '../screens/Authentication/Signin';
import {store, useAppSelector} from '~/redux/Store';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  const {token} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {token !== '' ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
