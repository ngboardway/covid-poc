import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { setUser } from '../../data/fb-user';

const ConfigureUserDetailsScreen = ({ route, navigation }) => {
  const { userId, email } = route.params;
  const [state, setState] = useState({
    email,
    userId,
    firstName: '',
    lastName: '',
    gNumber: ''
  });

  const updateStateObject = (vals) => {
    setState({
      ...state,
      ...vals
    });
  }

  const createUser = () => {
    const { email, userId, firstName, lastName, gNumber } = state;
    const user = { email, firstName, lastName, gNumber };

    setUser(user, userId).then((val) => {
      console.log('Ref for new user: ', val);
    }).then(() => {
      navigation.navigate('Start Survey');
    }).catch((err) => {
      console.log('Error: ', err);
    });
  }

  return (
    <View>
      <Input
        placeholder='Enter first name'
        value={state.firstName}
        onChangeText={(val) => updateStateObject({ firstName: val })} />
      <Input
        placeholder='Enter last name'
        value={state.lastName}
        onChangeText={(val) => updateStateObject({ lastName: val })} />
      <Input
        placeholder='Enter G#'
        value={state.gNumber}
        onChangeText={(val) => updateStateObject({ gNumber: val })} />
      <Button
        title='Save'
        onPress={createUser} />
    </View>
  )
}

export default ConfigureUserDetailsScreen;