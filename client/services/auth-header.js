export default function authHeader() {
  const user = async () => {
    try {
      return await AsyncStorage.getItem('key');
    } catch (e) {
      // read error
    }
    console.log("Done.");
    if (user && user.accessToken) {
      return { "x-access-token": user.accessToken }; // for Node.js Express back-end
    } else {
      return {};
    }
  };
}
