import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import client from './config/client';

const App = () => (
  <ApolloProvider client={client}>
  </ApolloProvider>
);

AppRegistry.registerComponent('main', () => App);