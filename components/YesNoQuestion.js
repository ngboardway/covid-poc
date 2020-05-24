import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Keyboard, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';

const YesNoQuestion = ({ questionText, questionId }) => {

  return (
    <View>
      <Button
        title="Yes"
        onPress={} />
      <Button
        title="No"
        onPress={} />
    </View>
  );
};

export default YesNoQuestion;