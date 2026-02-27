import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "space-around",
  },
  tab: {
    flexGrow: 0,
  },
  text: {
    color: theme.colors.netrual,
    textDecorationLine: "underline",
  },
});

const TabAction = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback style={styles.tab} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <TabAction>repositories</TabAction>
      <TabAction>code</TabAction>
    </View>
  );
};

export default AppBarTab;
