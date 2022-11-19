// import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider } from "react-redux";
import store from "./store";
import Home from "./screens/home";
import About from "./screens/about";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

SplashScreen.preventAutoHideAsync();
let Drawer = createDrawerNavigator();
export default function App() {
  useEffect(function () {
    async function loaded(params) {
      await SplashScreen.hideAsync();
    }
    setTimeout(() => {
      loaded();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <NativeBaseProvider>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
          </Drawer.Navigator>
        </NativeBaseProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
