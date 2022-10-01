
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from './homeBottomTabNavigator';
import Blank from '../screens/Blank';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Stats from '../screens/Stats';
import Results from '../screens/Results';
import LoginOptions from '../screens/LoginOptions';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="loginoptions" component={LoginOptions} options={{ title: 'Welcome' }} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="blank" component={Blank} />
        <Stack.Screen name='notifications' component={Notifications} />
        <Stack.Screen name='stats' component={Stats} />
        <Stack.Screen name='results' component={Results} />
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;