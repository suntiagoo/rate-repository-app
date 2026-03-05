import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  main: {
    padding: 10,
    margin: 4,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: theme.colors.main,
    color: theme.colors.unique,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.main];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
