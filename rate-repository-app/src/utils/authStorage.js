//import AsyncStorage from "@react-native-community/async-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
//const storage = createAsyncStorage("appDB");
class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    return token ? JSON.parse(token) : [];
  }

  async setAccessToken(accessToken) {
    console.log("settoken", accessToken);
    const currentToken = await this.getAccessToken();
    const addToken = [...currentToken, accessToken];
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(addToken),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
