import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "./src/screens/StartScreen";
import HomeScreen from "./src/screens/HomeScreen";
import CommonScreen from "./src/screens/CommonScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Get Your Nearby Services",
            headerTitleAlign: "center",
            headerTintColor: "#4A4A4A",
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "500",
            },
          }}
        />
        <Stack.Screen
          name="Common"
          component={CommonScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerTitleAlign: "center",
            headerTintColor: "#4A4A4A",
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "500",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
