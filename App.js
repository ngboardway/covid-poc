import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EntryScreen from './screens/EntryScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import SurveyStartScreen from './screens/survey/SurveyStartScreen';
import ConfigureUserDetailsScreen from './screens/auth/ConfigureUserDetailsScreen';
import ValidateResetPasswordCodeScreen from './screens/auth/ValidateResetPasswordCodeScreen';
import SurveyIdentificationScreen from './screens/survey/SurveyIdentificationScreen';
import SurveyCampusScreen from './screens/survey/SurveyCampusScreen';
import SurveyBuildingScreen from './screens/survey/SurveyBuildingScreen';
import SurveySymptomsScreen from './screens/survey/SurveySymptomsScreen';
import SurveyResultsScreen from './screens/survey/SurveyResultsScreen';
import NearbyHealthCareScreen from './screens/survey/NearbyHealthCareScreen';

import { Text } from 'react-native';

export default function App() {
  const Stack = createStackNavigator();

  const headerStyling = {
    headerStyle: {
      backgroundColor: '#0065a4'
    },
    headerTintColor: '#fff',
    headerTitle: () => {
      return (
        <Text style={{ color: '#fff' }}>COVID-19 Screening Requirement</Text>
      )
    }
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={headerStyling}>
        <Stack.Screen
          name="Entry"
          component={EntryScreen} />
        <Stack.Screen
          name="Sign In"
          component={SignInScreen} />
        <Stack.Screen
          name="Validate"
          component={ValidateResetPasswordCodeScreen} />
        <Stack.Screen
          name="Sign Up"
          component={SignUpScreen} />
        <Stack.Screen
          name="Start Survey"
          component={SurveyStartScreen} />
        <Stack.Screen
          name="Configure User"
          component={ConfigureUserDetailsScreen} />
        <Stack.Screen
          name="Identification"
          component={SurveyIdentificationScreen} />
        <Stack.Screen
          name="Select Campus"
          component={SurveyCampusScreen} />
        <Stack.Screen
          name="Select Building"
          component={SurveyBuildingScreen} />
        <Stack.Screen
          name="Symptoms"
          component={SurveySymptomsScreen} />
        <Stack.Screen
          name="Results"
          component={SurveyResultsScreen} />
        <Stack.Screen
          name="Health"
          component={NearbyHealthCareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}