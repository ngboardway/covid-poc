import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NextArrow from '../../components/NextArrow';

const VisitorIdentificationScreen = ({ navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  const { response } = route.params;

  const navigateToNextQuestion = () => {
    navigation.navigate('Select Campus', { response });
  }

  return (
    <View style={styles.container}>
      <Text>Visitor Configuration Coming Soon</Text>
      <NextArrow
        navigateAction={navigateToNextQuestion} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
})
export default VisitorIdentificationScreen;