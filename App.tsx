import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import Routes from "./src/routes";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [token, setToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const load = async () => {
      if (token) {
        const token = await AsyncStorage.getItem("token");
        setToken(token);
      } else {
        await AsyncStorage.setItem("token", new Date().getTime().toString());
      }
    };

    load();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: `#282a36`,
      }}
    >
      <StatusBar translucent={false} style="light" />
      <Routes />
    </SafeAreaView>
  );
}
