import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';

import {setContext} from '@apollo/client/link/context';
import {StorageKey} from '../../constants/common';
import {getData} from '../../utils/AsyncStorageHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {onError} from '@apollo/client/link/error';
import Config from 'react-native-config';
import {BASE_URL} from '~/api/apiConfig';
import {store} from '~/redux/Store';

// console.log(Config.BASE_URL);
//Api Call
const httpLink = createHttpLink({
  // uri: Config.API_URL,
  uri: Config.BASE_URL,
  // uri: BASE_URL,
});

// Error Handler
const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors) {
    console.log('[GraphQL error]:', graphQLErrors);
  }

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// Passing  Header
const authLink = setContext((_, {headers}) => {
  // getData(StorageKey.JWT_TOKEN);
  // console.log('token', JSON.parse(token));
  // console.log('token', JSON.parse(token));
  // authToken = token;
  const token = store.getState().auth.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token !== null ? token : '',
    },
  };
});

const cache = new InMemoryCache();
// console.log(authLink);
export const client = new ApolloClient({
  link: from([errorLink, authLink.concat(httpLink)]),
  cache,
  defaultOptions: {watchQuery: {fetchPolicy: 'cache-and-network'}},
});
