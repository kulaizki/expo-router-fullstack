import { View, Text } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>List</Text>
      <Link href={"/(authenticated)/(drawer)/(tabs)/list/42"} asChild>
        <Button title="Go to 42" />
      </Link>
      <Link href={"/(authenticated)/(drawer)/(tabs)/list/5?query=foo"} asChild>
        <Button title="Go to 5" />
      </Link>
    </View>
  );
};

export default Page;
