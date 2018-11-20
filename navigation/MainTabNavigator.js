import React from 'react';
import { Platform, AsyncStorage, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreenCompany from '../screens/HomeScreenCompany';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreenCompany,
});

HomeStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: () => (
    <Image
      source={require('../assets/images/magnifying-glass.png')}
      style={styles.icon}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarOptions: {
    showLabel: false
  },
  tabBarIcon: () => (
    <Image
      source={require('../assets/images/configuration.png')}
      style={styles.icon}
    />
  ),
};

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },

});

export default createBottomTabNavigator({
  HomeStack,
  SettingsStack,
});
