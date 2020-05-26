import React, { useState } from 'react';
import { campuses } from '../../data/fb-questions'
import SelectQuestion from '../../components/SelectQuestion';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SurveyCampusScreen = ({ route, navigation }) => {
  const [selected, setSelected] = useState('');

  const campusMap = campuses.map((val, idx) => {
    return {
      title: val,
      id: `${idx + 1}`
    };
  })

  const navigateToNextQuestion = () => {
    if (selected == 'Health Campus') {
      navigation.navigate('Select Building');
    } else {
      navigation.navigate('Symptoms');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select one of the following: </Text>
      <SelectQuestion
        data={campusMap}
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

export default SurveyCampusScreen;