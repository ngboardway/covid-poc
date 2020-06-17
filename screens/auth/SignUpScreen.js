import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const { uid, email } = user.user;
        navigation.navigate('Configure User', { userId: uid, email });
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
        value={email}
        onChangeText={setEmail} />
      <Input
        placeholder='Enter password'
        value={password}
        onChangeText={setPassword} />
      <Button
        style={styles.button}
        title='Sign Up'
        onPress={() => signUp()} />
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
export default SignUpScreen;