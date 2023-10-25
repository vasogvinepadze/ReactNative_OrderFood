import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from "@expo/vector-icons";
import * as ROUTES from "../src/constants/routes";
import HomeScreen from "../src/components/screen/HomeScreen";
import Search from "../src/components/screen/Search.js";
import Cart from "../src/components/screen/Cart";
import Profile from "../src/components/screen/Profile";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size = "20", focused }) => {
          let icon;
          if (route.name === ROUTES.HOME_SCREEN) {
            icon = focused ? "home" : "home-outline";
          } else if (route.name === ROUTES.SEARCH) {
            icon = focused ? "search-outline" : "search";
          } else if (route.name === ROUTES.CART) {
            icon = focused ? "ios-cart-outline" : "cart";
          } else if (route.name === ROUTES.PROFILE) {
            icon = focused ? "person-outline" : "person";
          }
          return <Icon name={icon} size={size} color={"#6644AB66"} />;
        },
      })}
    >
      <Tab.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen name={ROUTES.SEARCH} component={Search} />
      <Tab.Screen name={ROUTES.CART} component={Cart} />
      <Tab.Screen name={ROUTES.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
