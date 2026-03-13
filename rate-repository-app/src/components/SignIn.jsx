import Text from "./Text";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";

const initialValues = {
  username: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    //alignItems: "flex-start",
    padding: 20,
    alignContent: "center",
    //flexWrap: "wrap",
    backgroundColor: theme.colors.basic,
  },
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 10,
  },
  text: {
    color: theme.colors.basic,
    fontWeight: theme.fontWeights.bold,
  },
});

const validationSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="username" placeholder="Bob" />
      <FormikTextInput name="password" placeholder="#Quertty1234" />
      <View style={styles.button}>
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Text style={styles.text}>Sign In</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log("user:", data.authenticate.accessToken);
      const tokenUser = new AuthStorage("authA");
      await tokenUser.setAccessToken(data.authenticate.accessToken);
      const listTokensStorage = await tokenUser.getAccessToken();
      console.log("token guardado", listTokensStorage);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
