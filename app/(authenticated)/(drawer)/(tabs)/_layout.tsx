import { Link, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
import { Colors } from "@/constants/Colors";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useAuth } from "@/context/AuthContext";

const Layout = () => {
  const { onLogout } = useAuth();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: "#fff",
        tabBarActiveTintColor: Colors.primary,
        headerRight: () => (
          <TouchableOpacity onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </TouchableOpacity>
        ),
        headerLeft: () => <DrawerToggleButton tintColor="#fff" />,
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
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: "List",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
