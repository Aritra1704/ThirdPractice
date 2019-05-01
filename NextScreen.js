/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import {Actions} from 'react-native-router-flux'

const NextScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Next Screen!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      
    </View>
  );
}

export default NextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
