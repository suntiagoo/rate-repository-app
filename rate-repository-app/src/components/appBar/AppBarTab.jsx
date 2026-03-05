import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";
import theme from "../../theme";
const styles = StyleSheet.create({
  container: {
    //flexDirection: "row",
    flexGrow: 0,
    padding: 5,
    //alignItems: "flex-start",
    //justifyContent: "space-between",
    //alignContent: "space-between",
    //flexWrap: "wrap",
  },
  tab: {
    flexGrow: 0,
  },
  text: {
    color: theme.colors.netrual,
    textDecorationLine: "underline",
    padding: 5,
  },
});

const TabAction = ({ children, ...props }) => {
  return (
    <TouchableWithoutFeedback style={styles.tab} {...props}>
      <Text style={styles.text}>{children}</Text>
    </TouchableWithoutFeedback>
  );
};

const AppBarTab = ({ nameTab, path }) => {
  return (
    <View style={styles.container}>
      <TabAction>
        <Link to={path}>
          <Text>{nameTab}</Text>
        </Link>
      </TabAction>
      {/* 
      <TabAction>
        <Link to="/sign">
          <Text>sign in</Text>
        </Link>
      </TabAction> */}
    </View>
  );
};

export default AppBarTab;
