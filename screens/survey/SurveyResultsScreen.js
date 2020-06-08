import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const SurveyResultsScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  if (route.params.flagged) {
    return (
      <View>
        <Text>
          Please stay home and inform your program faculty or your department supervisor.
          Your responses suggest that you currently have symptoms that could be consistent with COVID-19 or that you may have been exposed to someone that does.
          You should self-isolate and call your local healthcare provider for medical advice.
        </Text>
        <Text>Date and Time: {Date.now().toString()}</Text>
        <Text style={styles.directionText}>Please keep this screen up to show as you enter the facility/room.</Text>
        <Button
          onPress={navigation.navigate('Health')}
          title="View Healthcare Providers Near Me" />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Thank you for answering the questions on this screening tool.</Text>
        <Text>Date and Time: {Date.now().toString()}</Text>
        <Text style={styles.directionText}>Please keep this screen up to show as you enter the facility/room.</Text>
        <Button
          title="Complete Survey"
          onPress={navigation.navigate("Entry")} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  directionText: {
    fontWeight: "bold"
  }
})

export default SurveyResultsScreen;