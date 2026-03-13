//import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/react";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import Constants from "expo-constants";

const httpLink = new HttpLink({
  //uri: "http://192.168.1.83:4000",
  uri: Constants.manifest.extra.env,
});

// const createApolloClient = () => {
//   return new ApolloClient({
//     link: httpLink,
//     cache: new InMemoryCache(),
//     defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
//   });
// };

const createApolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  //defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

loadDevMessages();
loadErrorMessages();

export default createApolloClient;
