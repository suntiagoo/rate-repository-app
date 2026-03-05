import { StyleSheet, StatusBar, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";

export default function App() {
  return (
    <NativeRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Main />
      <StatusBar style="auto" />
    </NativeRouter>
  );
}

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
