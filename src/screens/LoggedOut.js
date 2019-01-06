import React, {Component} from 'react';
import colors from '../styles/colors'
import {Platform,
        StyleSheet, 
        Text, 
        View,
        Image} from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton'

export default class LoggedOut extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                <Image source={require('../img/airbnb-logo.png')} style={styles.logo}  />
                <Text style={styles.welcomeText}>Welcome to AirBbnb !</Text>
                <RoundedButton />
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },
    welcomeText: {
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    }
})