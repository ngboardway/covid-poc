import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import BackButton from '../../components/BackButton';

const SurveyResponseDetailsScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<BackButton navigation={navigation} />)
  })

  const { questions, timestamp } = route.params;

  const getKey = (item, index) => {
    return `${index + 1}`;
  }

  const renderQuestion = ({ item, index }) => {
    return (
      <View>
        <Text style={styles.questionText}>{item.title}</Text>
        <Text style={styles.answerText}>{item.answer}</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Response on {timestamp}</Text>
      <FlatList
        data={questions}
        keyExtractor={getKey}
        renderItem={renderQuestion} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  questionText: {
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20
  },
  answerText: {
    fontStyle: "italic",
    marginLeft: 5
  },
  headerText: {
    fontSize: 25,
    textAlign: "center"
  }
})

export default SurveyResponseDetailsScreen;