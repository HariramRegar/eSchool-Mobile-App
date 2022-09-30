import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Blank from '../screens/Blank';
import Notifications from '../screens/Notifications';

const Stack = createStackNavigator();

function profileStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name="home"
        component={Home}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="blank"
        component={Blank}
        options={{
          header: () => null,
        }} />
      <Stack.Screen
        name="notifications"
        component={Notifications}
        options={{
          header: () => null,
        }} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'home'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'blank'}
        component={Blank}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name={'notifications'}
        component={Notifications}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name={'notifications-none'}
              size={25}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;