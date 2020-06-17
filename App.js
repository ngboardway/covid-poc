import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EntryScreen from './screens/EntryScreen';
import SignInScreen from './screens/auth/SignInScreen';
import SignUpScreen from './screens/auth/SignUpScreen';
import SurveyStartScreen from './screens/survey/SurveyStartScreen';
import ConfigureUserDetailsScreen from './screens/auth/ConfigureUserDetailsScreen';
import VistorIdentificationScreen from './screens/survey/VistorIdentificationScreen';
import SurveyIdentificationScreen from './screens/survey/SurveyIdentificationScreen';
import SurveyCampusScreen from './screens/survey/SurveyCampusScreen';
import SurveyBuildingScreen from './screens/survey/SurveyBuildingScreen';
import SurveySymptomsScreen from './screens/survey/SurveySymptomsScreen';
import SurveyResultsScreen from './screens/survey/SurveyResultsScreen';
import SurveyHistoryScreen from './screens/survey/SurveyHistoryScreen';
import SurveyResponseDetailsScreen from './screens/survey/SurveyResponseDetailsScreen';
import NearbyHealthCareScreen from './screens/survey/NearbyHealthCareScreen';
import { Text } from 'react-native';
import * as Analytics from 'expo-firebase-analytics';

// Gets the current screen from navigation state
const getActiveRouteName = state => {
  const route = state.routes[state.index];
  if (route.state) {
    // Dive into nested navigators
    return getActiveRouteName(route.state);
  }
  return route.name;
};

export default function App() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  React.useEffect(() => {
    const state = navigationRef.current.getRootState();

    // Save the initial route name
    routeNameRef.current = getActiveRouteName(state);
  }, []);


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
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state) => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);
        if (previousRouteName !== currentRouteName) {
          Analytics.setCurrentScreen(currentRouteName, currentRouteName);
        }
      }}>

      <Stack.Navigator
        screenOptions={headerStyling}>
        <Stack.Screen
          name="Home"
          component={EntryScreen} />
        <Stack.Screen
          name="Sign In"
          component={SignInScreen} />
        <Stack.Screen
          name="Visitors"
          component={VistorIdentificationScreen} />
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
        <Stack.Screen
          name="Response History"
          component={SurveyHistoryScreen} />
        <Stack.Screen
          name="Response Details"
          component={SurveyResponseDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}