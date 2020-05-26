import React, { useState } from 'react';
import { buildings } from '../../data/fb-questions'
import SelectQuestion from '../../components/SelectQuestion';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SurveyBuildingScreen = ({ route, navigation }) => {
  const [selected, setSelected] = useState('');

  const buildingMap = buildings["Health Campus"].map((val, idx) => {
    return {
      title: val,
      id: `${idx + 1}`
    };
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select one of the following: </Text>
      <SelectQuestion
        data={buildingMap}
        selectAction={setSelected} />
      <TouchableOpacity
        onPress={navigateToNextQuestion}>
        <Feather name="arrow-right" size={24} color="black" />
      </TouchableOpacity>
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