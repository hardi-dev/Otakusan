import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './screen/HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CustomHeader from './components/CustomHeader/CustomHeader';
import WatchScreen from './screen/WatchScreen';


const MainNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />
    } 
  },
  Watch: { 
    screen: WatchScreen,
    navigationOptions: {
      header: props => <CustomHeader {...props} />
    } 
  }
})

AppRegistry.registerComponent('Otakusan', () => MainNavigator);
const App = createAppContainer(MainNavigator);
export default App;
