import React, { Component } from 'react';
import PropTypes from "prop-types";
import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView
 } from "react-native";
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    render(){
        return(
            <KeyboardAvoidingView
                style={styles.wrapper}
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.logginHeader}>Log In</Text>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1
    },
    scrollViewWrapper: {
        marginTop:70,
        flex: 1
    },
    scrollView: {
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1
    },
    logginHeader: {
        fontSize: 28,
        color: colors.green01,
        fontWeight: '200',
        marginBottom: 30
    }
})