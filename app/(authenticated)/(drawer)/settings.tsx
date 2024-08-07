import { View, Text, Button } from 'react-native'
import { useNavigation, useRouter } from 'expo-router';
import React from 'react'
import { DrawerActions } from '@react-navigation/native';

const Page = () => {

  const navigation = useNavigation();
  const router = useRouter();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Toggle Drawer" onPress={onToggle} />
    </View>
  )
}

export default Page