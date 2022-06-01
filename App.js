import * as React from "react";
import { AppRegistry } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/Tabs";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// authorize jwt if true dash else account/signup/login
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('our-glass', () => App)