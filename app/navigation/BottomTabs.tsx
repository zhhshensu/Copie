import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/Home';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Template"
        component={Home}
        options={{
          tabBarLabel: '模板',
          tabBarIcon: ({ color, size }) => (
            <Icon name="palette" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cloud"
        component={Home}
        options={{
          tabBarLabel: '云空间',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cloud" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({ color, size }) => (
            <Icon name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
