import { useMutation } from "@apollo/client/react";
import { AUTHENTICATE } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);

  const signIn = async ({ password, username }) => {
    return await mutate({
      variables: { credentials: { password, username } },
    });
  };

  return [signIn, result];
};

export default useSignIn;
