
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Blank from '../screens/Blank';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Stats from '../screens/Stats';
import Results from '../screens/Results';
import LoginOptions from '../screens/LoginOptions';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="loginoptions" component={LoginOptions} options={{ title: 'Welcome', headerShown: false }} />
        <Stack.Screen name="home" component={Home} options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="blank" component={Blank} options={{ title: 'Blank' }} />
        <Stack.Screen name='notifications' component={Notifications} options={{ title: 'Notifications' }} />
        <Stack.Screen name='stats' component={Stats} options={{ title: 'Stats' }} />
        <Stack.Screen name='results' component={Results} options={{ title: 'Results' }} />
        <Stack.Screen name='login' component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name='signup' component={SignUp} options={{ title: 'SignUp' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;