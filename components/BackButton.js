import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const BackButton = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.backArrowContainer}
        onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={28} color="white" />
        <Text style={styles.backArrow}> Back</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  backArrowContainer: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: 'center',
  },
  backArrow: {
    color: "white",
    fontSize: 20
  }
})
export default BackButton;
