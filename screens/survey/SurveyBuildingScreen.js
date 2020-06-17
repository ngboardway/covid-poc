import React, { useState } from 'react';
import { buildings } from '../../data/fb-questions'
import SelectQuestion from '../../components/SelectQuestion';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import NextArrow from '../../components/NextArrow';

const SurveyBuildingScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  const { campus } = route.params;
  const [selected, setSelected] = useState('');

  const { response: initialResponse } = route.params;

  const buildingMap = buildings[campus].map((val, idx) => {
    return {
      title: val,
      id: `${idx + 1}`
    };
  })

  const navigateToNextQuestion = () => {
    if (selected == '') {
      return;
    }

    const response = [
      ...initialResponse,
      {
        title: "Building",
        answer: selected
      }
    ]
    console.log(response);
    navigation.navigate('Symptoms', { response });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select one of the following: </Text>
      <SelectQuestion
        data={buildingMap}
        selectAction={setSelected} />
      <NextArrow navigateAction={navigateToNextQuestion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  title: {
    fontSize: 24
  }
})

export default SurveyBuildingScreen;