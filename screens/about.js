import { Box, Button, Heading, Input } from "native-base";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export default function About() {
  let user = useSelector(function (store) {
    return store.user;
  });
  return (
    <Box>
      <Heading>Hi</Heading>
      <Text>{user.name}</Text>
    </Box>
  );
}
