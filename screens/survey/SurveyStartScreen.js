import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { setupUserListener } from '../../data/fb-user';
import * as firebase from 'firebase';

const SurveyStartScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

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

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      AsyncStorage.setItem('currentUserUid', "").then(() => {
        navigation.navigate('Home');
      })
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Welcome, {user?.firstName} </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          title="Begin Survey"
          onPress={() => beginSurvey("Identification")} />
        <Button
          style={styles.button}
          title="View My Previous Responses"
          onPress={() => navigation.navigate('Response History', { userId: route.params.userId })} />
        <Button
          style={styles.button}
          title="Sign Out"
          onPress={() => signOut()} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    marginTop: 5
  },
  headerText: {
    fontSize: 20
  },
  headerContainer: {
    flex: 1,
    marginTop: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-start"
  }
});

export default SurveyStartScreen;