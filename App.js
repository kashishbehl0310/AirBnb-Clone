import React, {Component} from 'react';
import LoggedOut from './src/screens/LoggedOut'
import Login from './src/screens/Login'
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

