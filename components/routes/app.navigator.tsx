import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Articles from "../Arcicles/Articles";
import AdditionalInfo from "../Arcicles/AdditionalInfo";
import { Button, View, Text } from "react-native";
import Article from "../Arcicles/Article";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Articles"
          component={Articles}
        />
        <Stack.Screen
          name="AdditionalInfo"
          options={(props: { route: any }) => ({
            title: props.route.params.title,
          })}
          component={AdditionalInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation }: any) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("AdditionalInfo", { name: "Jane" })}
    />
  );
};
const ProfileScreen = ({ navigation, route }: any) => {
  return <Text>This is s profile</Text>;
};
export default MyStack;
