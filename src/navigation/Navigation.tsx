import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import PersonDetailsScreen from "../screens/PersonDetailsScreen";
import React from "react";

export type StackParamList = {
  Home: undefined;
  Details: { personUrl: string };
};

export const Stack = createNativeStackNavigator<StackParamList>();

const RootRouter = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Details" component={PersonDetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootRouter;
