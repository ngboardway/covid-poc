import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const NextArrow = ({ navigateAction }) => {
  return (
    <View style={{ alignItems: 'flex-end' }} >
      <TouchableOpacity
        onPress={navigateAction}>
        <Feather name="arrow-right" size={40} color="#0065a4" />
      </TouchableOpacity>
    </View>
  )
};

export default NextArrow;