import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

const ValidateResetPasswordCodeScreen = ({ route, navigation }) => {
  const { email } = route.params;
  const [code, setCode] = useState('');

  const validateCode = async () => {
    try {
      let val = awaitfirebase.auth().verifyPasswordResetCode(code)
      return val == email
    }
    catch (e) {
      console.log(e);
      return "An error";
    }
  }

  return (
    <Input
      placeholder='Enter code from email'
      autoCapitalize="none"
      value={code}
      onChangeText={setCode}
      errorMessage={validateCode} />
  )
}

export default ValidateResetPasswordCodeScreen;