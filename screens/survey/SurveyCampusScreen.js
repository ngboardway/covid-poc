import React, { useState } from 'react';
import { campuses, buildings } from '../../data/fb-questions'
import SelectQuestion from '../../components/SelectQuestion';
import { View, Text, StyleSheet } from 'react-native';
import NextArrow from '../../components/NextArrow';

const SurveyCampusScreen = ({ route, navigation }) => {
  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  const [selected, setSelected] = useState('');

  const campusMap = campuses.map((val, idx) => {
    return {
      title: val,
      id: `${idx + 1}`
    };
  })

  const navigateToNextQuestion = () => {
    const campusWithBuilding = Object.keys(buildings);
    if (campusWithBuilding.includes(selected)) {
      navigation.navigate('Select Building', { campus: selected });
    } else {
      navigation.navigate('Symptoms');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a GVSU campus: </Text>
      <SelectQuestion
        data={campusMap}
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

export default SurveyCampusScreen;