import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EntryScreen from './screens/EntryScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import SurveyStartScreen from './screens/survey/SurveyStartScreen';
import SurveyIdentificationScreen from './screens/survey/SurveyIdentificationScreen';
import ConfigureUserDetailsScreen from './screens/auth/ConfigureUserDetailsScreen';
import SurveyCampusScreen from './screens/survey/SurveyCampusScreen';
import SurveyBuildingScreen from './screens/survey/SurveyBuildingScreen';

export default function App() {
  const Stack = createStackNavigator();

  const headerStyling = {
    headerStyle: {
      backgroundColor: '#0065a4'
    },
    headerTintColor: '#fff'
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}