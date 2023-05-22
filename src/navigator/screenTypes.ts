import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import HomeStackNavigator from './HomeStack';
import type {
  RouteProp,
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
// import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

//type checking for stack navigator
export type HomeStackNavigatorParamList = {
  Home: undefined;
};
export type LoginStackNavigatorParamList = {
  Signin: undefined;
  Signup: undefined;
};

// //type checking for Bottom Tab navigator
// export type BottomTabNavigatorParamList = {
//   Home: HomeStackNavigatorParamList;
//   Feeds: undefined;
//   Settings: undefined;
// };

export type RootStackParamList = {
  Auth: LoginStackNavigatorParamList;
  Home: HomeStackNavigatorParamList;
};
// Type checking for screens
// export type HomeStackNavigationProp = NativeStackNavigationProp<
//   HomeStackNavigatorParamList,
//   'Home'
// >;
// export type AuthStackNavigation = NativeStackNavigationProp<
// LoginStackNavigatorParamList,
//   'Signin'
// >;

// give you route parameters
// export type DetailScreenRouteProp = RouteProp<
//   HomeStackNavigatorParamList,
//   'Details'
// >;

// export type HomeScreenNavigationProp = CompositeNavigationProp<
//   NativeStackNavigationProp<HomeStackNavigatorParamList, 'Details'>,null
// //   BottomTabNavigationProp<BottomTabNavigatorParamList, 'Feeds'>
// >;
// export type AuthScreenNavigationProp = CompositeNavigationProp<
//   BottomTabNavigationProp<BottomTabNavigatorParamList, 'Home'>,''
// //   NativeStackNavigationProp<LoginStackNavigatorParamList, 'BottomView'>
// >;
type MainNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<BottomTabNavigatorParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList>
>;
