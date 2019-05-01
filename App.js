/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://medium.com/differential/react-native-basics-using-react-native-router-flux-f11e5128aff9
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import FirstScreen from './FirstScreen';
import NextScreen from './NextScreen';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="first"
          component={FirstScreen}
          title="First"
          initial
        />
        <Scene
          key="next"
          component={NextScreen}
          title="Next"
        />
      </Scene>
    </Router>
  );
}

export default App;
