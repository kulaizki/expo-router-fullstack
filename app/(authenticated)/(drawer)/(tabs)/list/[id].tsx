import { View, Text } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

const Page = () => {
  const { id, query } = useLocalSearchParams<{ id: string; query?: string }>();

  return (
    <View>
      <Stack.Screen
        options={{
          title: `List #${id} - Outside`,
        }}
      />
      <Text>My ID: {id}</Text>
      <Text>My Query: {query}</Text>
    </View>
  );
};

export default Page;
