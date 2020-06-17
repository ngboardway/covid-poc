import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signIn = () => {
    if (email == "" || password == "") {
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User: ', user);

        const needsAdditionalConfig = user.additionalUserInfo.isNewUser;
        const { uid, email } = user.user;
        if (needsAdditionalConfig) {
          navigation.navigate('Configure User', { userId: uid, email });
        } else {
          navigation.navigate('Start Survey', { userId: uid });
        }
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log('Code: ', errorCode);
        console.log('Message: ', errorMessage);
      })
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter email'
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail} />
      <Input
        placeholder='Enter password'
        autoCapitalize="none"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword} />
      <Button
        style={styles.button}
        title='Sign In'
        onPress={() => signIn()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  button: {
    margin: 10
  }
})
export default SignInScreen;