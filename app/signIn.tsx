import { Stack } from 'expo-router';
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from '~/components/Button';
import 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from '../utils/firebase';
// import AsyncStorage from "@react-native"

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: '821068759991-cbi75k8aet6rlupdtaraooihj5atcs21.apps.googleusercontent.com',
    androidClientId: '821068759991-d559fgvh8omreu2ae7pjeol8bf0iretv.apps.googleusercontent.com',
  });
  console.log(request)
  React.useEffect(() => {    
    if (response?.type == 'success') {
      console.log('inside', response)
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  // React.useEffect(() => {    
  //   onAuthStateChanged
    
  // }, [response]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Button title="Entrar com Google" onPress={() => promptAsync()} />
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
