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
        <Text>Bad News</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text> Good News</Text>
      </View>
    )
  }
}

export default SurveyResultsScreen;