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
    const question = { title: "User Id", answer: route.params.userId };
    navigation.navigate(screen, { response: [question] });
  }

  return (
    <View style={styles.container}>
      <Text> Welcome, {user?.firstName} </Text>
      <Button
        style={styles.button}
        title="Begin Survey"
        onPress={() => beginSurvey("Identification")} />
      <Button
        title="View My Previous Responses"
        onPress={() => navigation.navigate('Response History', { userId: route.params.userId})} />
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