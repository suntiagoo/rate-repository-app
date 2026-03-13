//import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client/react";
import createApolloClient from "./src/utils/apolloClient";
import Main from "./src/components/Main";

const apolloClient = createApolloClient;
const App = () => {
  return (
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <ApolloProvider client={apolloClient}>
        <Main />
        <StatusBar style="auto" />
      </ApolloProvider>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
});

export default App;
