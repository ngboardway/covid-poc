import React, { useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createSurveyResponse } from '../../data/fb-responses';

const SurveyResultsScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  useEffect(() => {
    if (route.params?.response) {
      const fullResponse = {
        questions: route.params.response,
        dateTime: Date.now()
      };

      let userId = fullResponse.questions.find(q => q.title = "User Id").answer;
      createSurveyResponse(fullResponse, userId);
    }
  }, [route.params?.response])



  const navigateAway = (screen) => {
    navigation.navigate(screen);
  }

  if (route.params.flagged) {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>
          Please stay home and inform your program faculty or your department supervisor.
        </Text>
        <Text style={styles.infoText}>
          Your responses suggest that you currently have symptoms that could be consistent with COVID-19 or that you may have been exposed to someone that does.
          You should self-isolate and call your local healthcare provider for medical advice.
        </Text>
        <Text style={styles.infoText}>Date and Time: {Date.now().toString()}</Text>
        <Text style={styles.directionText}>Please keep this screen up to show as you enter the facility/room.</Text>
        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigateAway("Health")}>
          <Text>View Healthcare Providers Near Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.touchables, { marginTop: 2 }]}
          onPress={() => navigateAway("Start Survey")}>
          <Text>Complete Survey</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>Thank you for answering the questions on this screening tool.</Text>
        <Text style={styles.infoText}>Date and Time: {Date.now().toString()}</Text>
        <Text style={styles.directionText}>Please keep this screen up to show as you enter the facility/room.</Text>
        <TouchableOpacity
          style={styles.touchables}
          onPress={() => navigateAway("Start Survey")}>
          <Text>Complete Survey</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const paddedArea = {
  margin: 10,
  padding: 5
}
const styles = StyleSheet.create({
  container: {
    ...paddedArea
  },
  touchables: {
    flexDirection: "row",
    margin: 35,
    padding: 15,
    borderColor: '#b0b1b4',
    backgroundColor: '#b0b1b4',
    borderWidth: 1,
    justifyContent: "center"
  },
  infoText: {
    ...paddedArea,
    fontSize: 18
  },
  directionText: {
    ...paddedArea,
    fontWeight: "bold",
    fontSize: 25
  }
})

export default SurveyResultsScreen;