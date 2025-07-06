import { router } from 'expo-router'
import { View, Text, Button } from 'react-native'

const signUp = () => {
  return (
    <View>
    <Text>signUp</Text>
    <Button title='Sign In' onPress={() => router.push("/signIn")} />
  </View>
  )
}

export default signUp