import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const SurveyResponseDetailsScreen = ({ route, navigation }) => {
  const getKey = (item, index) => {
    return `${index + 1}`;
  }

  const renderQuestion = ({ item, index }) => {
    console.log('item: ', item);
    console.log('index: ', index);
    return (
      <View>
        <Text>{item.title}</Text>
        <Text>{item.answer}</Text>
      </View>
    )
  }
  return (
    <FlatList
      data={route.params.questions}
      keyExtractor={getKey}
      renderItem={renderQuestion} />
  )
}

export default SurveyResponseDetailsScreen;