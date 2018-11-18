import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import SplashScreen from './SplashScreen';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => LoginScreen
    }
  },
  {
    navigationOptions: {
      header: null
    }
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    getScreen: () => HomeScreen
  }
});

const MainNavigator = createStackNavigator({
  Tab: TabNavigator
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => SplashScreen
    },
    Auth: AuthNavigator,
    Main: MainNavigator
  },
  {
    initialRouteName: 'Splash'
  }
);

class Navigation extends Component {
  state = {};

  render() {
    return <AppNavigator />;
  }
}

export default Navigation;
