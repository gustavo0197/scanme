import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Scanner } from './components/Scanner';
import { Settings } from './components/Settings';
const Stack = createStackNavigator();

export function Dashboard() {
  return (
    <Stack.Navigator initialRouteName="Scanner">
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
