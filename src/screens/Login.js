import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View,
    Text,
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet
} from "react-native";
import colors from '../styles/colors';
import InputField from '../components/forms/InputField'

export default class Login extends Component{
    render(){
        return(
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField 
                            labelText="Email Address"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                        />
                        <InputField 
                            labelText="Password"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                        />
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.green01
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingTop: 30,
        paddingRight: 30,
        paddingLeft: 30,
        flex: 1
    },
    loginHeader: {
        fontSize: 34,
        fontWeight: '100',
        marginBottom: 30,
        color: colors.white
    }
})