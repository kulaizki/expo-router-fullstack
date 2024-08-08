import { View, Text, Button } from 'react-native'

const Page = () => {
  async function fetchHello() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    alert('Hello ' + data.hello);
  }

  return (
    <View>
      <Button onPress={() => fetchHello()} title="Fetch hello" />
    </View>
  )
}

export default Page
