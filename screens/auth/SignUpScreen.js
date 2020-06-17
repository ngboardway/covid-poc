import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

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
        setErrorMessage(errorMessage);
      })
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter email'
        autoCapitalize="none"
        placeholderTextColor="#b0b1b4"
        value={email}
        onChangeText={setEmail} />
      <Input
        placeholder='Enter password'
        placeholderTextColor='#b0b1b4'
        value={password}
        autoCapitalize="none"
        secureTextEntry={true}
        onChangeText={setPassword} />
      <Text>{errorMessage}</Text>
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