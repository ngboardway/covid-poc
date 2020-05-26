import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { setupUserListener } from '../../data/fb-user';
import { State } from 'react-native-gesture-handler';

const SurveyStartScreen = ({ route, navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (route.params?.userId) {
      setupUserListener(route.params.userId, (u) => {
        console.log(u);
        setUser(u);
      });
    }
  }, [route.params?.userId])

  return (
    <View style={styles.container}>
      <Text> {user?.firstName} </Text>
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

export default SurveyStartScreen;