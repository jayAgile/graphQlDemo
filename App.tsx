import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/graphQL/config/AppolloConfig';
import AppNavigator from './src/navigator/AppNavigator';
import {Provider} from 'react-redux';
import {persistor, store} from '~/redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({});
