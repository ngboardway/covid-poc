import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { setupUserListener } from '../../data/fb-user';

const SurveyStartScreen = ({ route, navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (route.params?.userId) {
      AsyncStorage.setItem('currentUserUid', route.params.userId);

      setupUserListener(route.params.userId, (u) => {
        setUser(u);
      });
    }
  }, [route.params?.userId])

  const beginSurvey = (screen) => {
    const q = { title: "User Id", answer: route.params.userId };
    const response = [q];
    navigation.navigate(screen, { response });
  }
  return (
    <View style={styles.container}>
      <Text> Welcome, {user?.firstName} </Text>
      <Button
        style={styles.button}
        title="Begin Survey"
        onPress={() => beginSurvey("Identification")} />
      <Button
        title="Symp"
        onPress={() => beginSurvey('Symptoms')} />
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
    marginTop: 5
  }
});

export default SurveyStartScreen;