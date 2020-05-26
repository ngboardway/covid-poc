import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User: ', user);

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
    <View>
      <Input
        placeholder='Enter email'
        value={email}
        onChangeText={setEmail} />
      <Input
        placeholder='Enter password'
        value={password}
        onChangeText={setPassword} />
      <Button
        title='Sign In'
        onPress={() => signUp()} />
    </View>
  )
}

export default SignUpScreen;