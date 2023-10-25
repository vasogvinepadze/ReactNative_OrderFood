import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./navigator/MainNavigator";
import { Context } from "./src/components/organisms/Context";

export default function App() {
  return (
    <Context>
      <MainNavigator />
    </Context>
  );
}
