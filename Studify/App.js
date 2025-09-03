import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from './src/TelaInicial';  

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen 
          name="TelaInicial" 
          component={TelaInicial} 
          options={{ title: 'Studify' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}