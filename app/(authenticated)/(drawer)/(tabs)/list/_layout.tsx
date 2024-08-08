import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" options={{ title: "List" }} />
      <Stack.Screen name="[id]" options={{ title: "List" }} />
    </Stack>
  );
};

export default Layout;
