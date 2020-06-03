import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectButton = ({ selected, title, selectAction }) => {
  let isSelected = selected == true;

  return (
    <TouchableOpacity
      onPress={selectAction}
      style={[
        styles.button,
        { backgroundColor: isSelected ? '#0065a4' : '#b0b1b4' },
        { hintColor: isSelected ? '#fff' : 'black' }
      ]}>
      <Text
        style={[
          styles.buttonText,
          { color: isSelected ? '#fff' : 'black' }
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#b0b1b4',
  },
  buttonText: {
    padding: 5,
  }
});


export default SelectButton;