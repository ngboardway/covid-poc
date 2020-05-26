import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EntryScreen from './screens/EntryScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import SurveyStartScreen from './screens/survey/SurveyStartScreen';
import ConfigureUserDetailsScreen from './screens/auth/ConfigureUserDetailsScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}