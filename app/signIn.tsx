import { Stack } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '~/components/Button';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Button title="Entrar com Google" onPress={() => {}} />
      <Button title="Entrar com AppleID" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});
