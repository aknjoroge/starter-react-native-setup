import { Box, Button, Input, Text } from "native-base";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userActions } from "../store/user";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "./about";

let BottomTabs = createBottomTabNavigator();
export default function Home() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={Main}
      />
      <BottomTabs.Screen
        options={{
          headerShown: false,
        }}
        name="About"
        component={About}
      />
    </BottomTabs.Navigator>
  );
}

function Main() {
  let dispatch = useDispatch();
  let [name, setName] = useState("");
  let [mark, setmark] = useState("");
  useEffect(function () {
    async function mark() {
      const value = await AsyncStorage.getItem("MY_KEY");
      if (!value || value == "") {
        await AsyncStorage.setItem("MY_KEY", "DEVELOPER");
      }
    }
    mark();
  }, []);
  useEffect(function () {
    async function retrieve() {
      const value = await AsyncStorage.getItem("MY_KEY");
      setmark(value);
    }
    retrieve();
  }, []);
  function submitHandler() {
    dispatch(
      userActions.loadData({
        user: {
          name,
        },
      })
    );
  }
  return (
    <Box>
      <Text>Mark {mark}</Text>
      <Input
        onChangeText={(value) => {
          setName(value);
        }}
      />
      <Button onPress={submitHandler}>save</Button>
    </Box>
  );
}
