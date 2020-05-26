import React from 'react';

const SurveySymptomsScreen = ({ route, navigation }) => {

  const selectAction = () => {
    navigation.navigate('Results');
  }

  const renderQuestion = ({ index, question }) => {
    return (
      <YesNoQuestion
        question={question}
        selectAction={} />
    )
  }

  return (
    <View>
      <FlatList
        data={identificationQuestions}
        renderItem={renderQuestion}
        keyExtractor={q => q.id} />
    </View>
  )


}

export default SurveySymptomsScreen;