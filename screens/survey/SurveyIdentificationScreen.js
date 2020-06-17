import React, { useState } from 'react';
import { userTypes } from '../../data/fb-questions'
import SelectQuestion from '../../components/SelectQuestion';
import { View, Text, StyleSheet } from 'react-native';
import NextArrow from '../../components/NextArrow';

const SurveyIdentificationScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  const { response: initialResponse } = route.params;
  const [selected, setSelected] = useState('');

  const userMap = userTypes.map((val, idx) => {
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
        title: "User Type",
        answer: selected
      }
    ]

    console.log(response);
    if (selected == 'Visitor') {
      navigation.navigate('Visitor Identification', { response });
    } else {
      navigation.navigate('Select Campus', { response });
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select one of the following: </Text>
      <SelectQuestion
        data={userMap}
        selectAction={setSelected} />
      <NextArrow
        navigateAction={navigateToNextQuestion} />
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

export default SurveyIdentificationScreen;