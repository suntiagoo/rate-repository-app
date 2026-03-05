import Text from "./Text";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import FormikTextInput from "./FormikTextInput";
import { Formik } from "formik";
import theme from "../theme";
import * as yup from "yup";

const initialValues = {
  mass: "",
  height: "",
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
  name: yup.string().required("name is required"),
  password: yup.string().required("password is required"),
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="name" placeholder="Bob" />
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
  const onSubmit = (values) => {
    const name = values.name;
    const password = values.password;
    if (name && password) {
      console.log(`Your name is: ${name}`);
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
