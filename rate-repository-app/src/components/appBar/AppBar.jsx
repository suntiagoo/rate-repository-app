import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.background.other,
    height: 80,

    // ...
  },
  // ...
});

const scrollViewStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        automaticallyAdjustContentInsets
        bounces
        bouncesZoom
        style={scrollViewStyles.container}
      >
        <AppBarTab nameTab="repositories" path="/" />
        <AppBarTab nameTab="sign in" path="/sign" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
