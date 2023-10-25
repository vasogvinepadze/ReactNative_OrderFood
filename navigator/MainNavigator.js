import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as ROUTES from "../src/constants/routes";
import SplashScreen from "../src/components/screen/SplashScreen";
import HomeScreen from "../src/components/screen/HomeScreen";

import TabsNavigator from "../navigator/TabsNavigator";
import CardDetails from "../src/components/screen/CardDetails";
import Cart from "../src/components/screen/Cart";
import TrackOrderScreen from "../src/components/screen/TrackOrderScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.SPLASH_SCREEN}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.TABS_NAVIGATOR}
          component={TabsNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CARD_DETAILS}
          component={CardDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.CART}
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.TRACK_ORDER_SCREEN}
          component={TrackOrderScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
