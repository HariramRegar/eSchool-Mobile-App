import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Main,Home,Blank,Results} from '../screens/index';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="blank" component={Blank} />
        <Stack.Screen name="results" component={Results} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;