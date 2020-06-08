import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { initDB } from '.././data/fb-base';
import { Button } from 'react-native-elements';

const EntryScreen = ({ navigation }) => {
  useEffect(() => {
    try {
      initDB();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Sign In')} />
      {/*<Button
        title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')} />         */}
      <Button
        title="Let's Go!"
        onPress={() => navigation.navigate('Health')} />
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
});

export default EntryScreen;