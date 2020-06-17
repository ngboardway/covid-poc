import React, { useEffect } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { initDB } from '.././data/fb-base';
import { Button } from 'react-native-elements';

const EntryScreen = ({ navigation }) => {
  const findCurrentUser = () => {
    return AsyncStorage.getItem('currentUserUid');
  }

  useEffect(() => {
    try {
      initDB();
    } catch (err) {
      console.log(err);
    }

    findCurrentUser().then((uid => {
      if (uid != null) {
        navigation.navigate('Start Survey', { userId: uid })
      }
    }))
  }, []);

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Sign In"
        onPress={() => navigation.navigate('Sign In')} />
      <Button
        style={styles.button}
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10
  }
});

export default EntryScreen;