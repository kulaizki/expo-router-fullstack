import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Slot, Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Colors } from "@/constants/Colors";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import { ActivityIndicator } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const { token, initialized } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (!initialized) return;

    const inAuthGroup = segments[0] === "(authenticated)";
    // console.log('segments', segments);
    // console.log('token', token);

    if (token && !inAuthGroup) {
      router.replace('/(authenticated)/(drawer)/(tabs)/home') // bring user to home page
    } else if (!token && inAuthGroup) {
      router.replace('/') // bring user back to login
    }
  })


  if (!loaded || !initialized) {
    // return <ActivityIndicator size={"large"} />;
    return <Slot />
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="register"
          options={{
            title: "Create Account",
            headerBackTitle: "Login",
          }}
        />
        <Stack.Screen
          name="privacy"
          options={{ title: "Privacy Policy", presentation: "modal" }}
        />
        <Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
