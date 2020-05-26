import React, { useState } from 'react';
import { userTypes } from '../../data/fb-questions'
import SelectQuestion from '../../components/SelectQuestion';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SurveyIdentificationScreen = ({ route, navigation }) => {
  const [selected, setSelected] = useState('');

  const update = (val) => {
    console.log('Updated: ', val);
    setSelected(val);
  }
  const userMap = userTypes.map((val, idx) => {
    return {
      title: val,
      id: `${idx + 1}`
    };
  })

  const navigateToNextQuestion = () => {
    if (selected == 'Visitor') {
      navigation.navigate('Visitor Identification');
    } else {
      navigation.navigate('Select Campus');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select one of the following: </Text>
      <SelectQuestion
        data={userMap}
        selectAction={update} />
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

export default SurveyIdentificationScreen;