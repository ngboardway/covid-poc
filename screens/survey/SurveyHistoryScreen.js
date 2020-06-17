import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { setupResponseListener } from '../../data/fb-responses';
import BackButton from '../../components/BackButton';

const SurveyHistoryScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<BackButton navigation={navigation} />)
  })

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
    const dt = new Date(item.dateTime);
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => navigation.navigate('Response Details', { questions: item.questions, timestamp: dt.toDateString() })}>
          <Text>{dt.toString()}</Text>
        </TouchableHighlight>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Previous Responses</Text>
      <FlatList
        data={history}
        keyExtractor={(i) => i.id}
        renderItem={renderResponse}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        )} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  headerText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10
  }
})

export default SurveyHistoryScreen;