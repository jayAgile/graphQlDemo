import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {LOGIN} from '../../../graphQL/Mutation';
import {storeData} from '../../../utils/AsyncStorageHelper';
import {StorageKey} from '../../../constants/common';
import {LOGIN_S} from '~/constants/reducersTypes';
import {useAppDispatch} from '~/redux/Store';
import {setToken} from '~/redux/slices/auth/authSlice';

// import {setAuthToken} from '../../graphQL/config/AppolloConfig';

export default function Signin({navigation}) {
  const [state, setState] = useState({
    email: 'johnny@yopmail.com',
    password: '12345678',
  });
  const dispatch = useAppDispatch();

  const [loginInput, {data, loading}] = useMutation(LOGIN);

  useEffect(() => {
    // console.log('loading', loading);
  }, [loading]);

  const logInHandler = async () => {
    const login = await loginInput({
      variables: {
        input: {
          email: state.email,
          password: state.password,
        },
      },
    });
    const {jwt} = login.data.login;
    // JWT_TOKEN
    dispatch(setToken(jwt));
  };

  return (
    <View style={styles.container}>
      <Text>Email</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Email"
        value={state.email}
        onChangeText={text => setState(prev => ({...prev, email: text}))}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Enter Password"
        value={state.password}
        onChangeText={text => setState(prev => ({...prev, password: text}))}
      />
      <Button title="logIn" onPress={logInHandler} />

      <TouchableOpacity
        style={{margin: 10}}
        onPress={() => navigation.navigate('Signup')}>
        <Text>don't have any account?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  inputStyle: {
    borderWidth: 1,
    marginBottom: 10,
  },
});
