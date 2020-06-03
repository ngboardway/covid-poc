import React, { useState } from 'react';
import { symptomQuestionsSection } from '../../data/fb-questions';
import { View, SectionList, Text, StyleSheet, SafeAreaView } from 'react-native';
import Constants from "expo-constants";
import NextArrow from '../../components/NextArrow';
import SelectButton from '../../components/SelectButton';

const SurveySymptomsScreen = ({ route, navigation }) => {

  navigation.setOptions({
    headerLeft: () => (<View></View>)
  })

  const [selected, setSelected] = useState({});

  const onSelect = React.useCallback(
    (id, value) => {
      const newSelected = {};
      newSelected[id] = value;

      setSelected({
        ...selected,
        ...newSelected
      });
    },
    [selected],
  );

  const navigateToResults = () => {
    let selectedCounts = Object.values(selected).filter(v => v == true).length;
    const flagged = selectedCounts >= 2;
    navigation.navigate('Results', { flagged });
  }

  const renderQuestion = ({ index, item, section: { id, title, data } }) => {
    let isNotSelected = selected[id] == false;
    let isSelected = selected[id] == true;

    if (item == "y/n") {
      return (
        <View>
          <SelectButton
            title="Yes"
            selected={isSelected}
            selectAction={() => onSelect(id, true)} />
          <SelectButton
            title="No"
            selected={isNotSelected}
            selectAction={() => onSelect(id, false)} />
        </View>
      )
    } else {
      return (
        <Text style={styles.subQuestion}>- {item}</Text>
      )
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={symptomQuestionsSection}
        renderItem={renderQuestion}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section: { title, id } }) => (
          <Text style={styles.header}>{id}. {title}</Text>
        )}
        stickySectionHeadersEnabled={false}
        extraData={selected}
      />
      <NextArrow
        navigateAction={navigateToResults} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    marginLeft: 5,
    marginTop: 15
  },
  container: {
    margin: 15,
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#b0b1b4',
  },
  buttonText: {
    padding: 5,
  },
  subQuestion: {
    marginLeft: 20,
    marginTop: 5
  }
})

export default SurveySymptomsScreen;