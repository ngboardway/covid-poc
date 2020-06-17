import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, AsyncStorage, FlatList, TouchableHighlight } from 'react-native';
import { Button } from 'react-native-elements';
import { setupResponseListener } from '../../data/fb-responses';


const SurveyHistoryScreen = ({ route, navigation }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.log(route.params);
    if (route.params?.userId) {
      setupResponseListener(route.params.userId, (h) => {
        setHistory(h);
      });
    }
  }, [route.params?.userId])

  const renderResponse = ({ item }) => {
    return (
      <TouchableHighlight
        onPress={() => navigation.navigate('Response Details', { questions: item.questions })}>
        <Text>{item.dateTime}</Text>
      </TouchableHighlight>
    )
  }
  return (
    <FlatList
      data={history}
      keyExtractor={(i) => i.id}
      renderItem={renderResponse} />
  )

}

export default SurveyHistoryScreen;