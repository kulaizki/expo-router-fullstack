import { Link, Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Alert } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: Colors.primary,
        headerRight: () => (
          <Link href={"/"} replace asChild>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </Link>
        ),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "My Homepage",
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="action"
        options={{
          tabBarLabel: "Action",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="alert-circle-outline" size={size} color={color} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert("Action", "This is an action tab.");
          },
        })}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "My Profile",
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
