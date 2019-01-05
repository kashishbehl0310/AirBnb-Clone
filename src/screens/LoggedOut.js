import React, {Component} from 'react';
import colors from '../styles/colors'
import {Platform,
        StyleSheet, 
        Text, 
        View,
        Image} from 'react-native';

export default class LoggedOut extends Component {
  render() {
    return (
        <View>
            <Image source={require('../img/airbnb-logo.png')}  />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        background: colors.green01
    }
})