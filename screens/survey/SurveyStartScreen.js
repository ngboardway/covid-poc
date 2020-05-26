import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { setupUserListener } from '../../data/fb-user';

const SurveyStartScreen = ({ route, navigation }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (route.params?.userId) {
      setupUserListener(route.params.userId, (u) => {
        setUser(u);
      });
    }
  }, [route.params?.userId])

  return (
    <View style={styles.container}>
      <Text> {user?.firstName} </Text>
      <Button
        title="Begin Survey"
        onPress={() => navigation.navigate('Identification')} />
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