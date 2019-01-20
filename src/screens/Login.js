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
import InputField from '../components/forms/InputField';
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notifications from '../components/Notifications'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            formValid: false,
            validEmail: false,
            emailAddress: '',
            validPassword: false
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this)
    }
    handleNextButton(){
        alert('Next Button pressed')
    }
    handleCloseNotification() {
        this.setState({ formValid: true });
    }
    handleEmalChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({ emailAddress :email})
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({ validEmail: true})
            }
        } else {
            if(!emailCheckRegex.test(email)){
                this.setState({ validEmail: false})
            }
        }
    }
    render(){
        const { formValid } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.green01 : colors.darkOrange
        const notificationMarginBottom = showNotification ? 0 : 0;
        return(
            <KeyboardAvoidingView 
                style={[{backgroundColor: background}, styles.wrapper]}
                >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}>Log In</Text>
                        <InputField 
                            labelText="Email Address"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{marginBottom: 30}}
                            onChangeText={this.handleEmalChange}
                        />
                        <InputField 
                            labelText="Password"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{marginBottom: 30}}
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton 
                            handleNextButton={this.handleNextButton}
                        />
                    </View>
                    <View style={[styles.notificationWrapper, {marginBottom: notificationMarginBottom, height: 60}]}>
                        <Notifications
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error!"
                            firstLine="Those credentials don't look right."
                            secondLine="Please try again."
                    />
                    </View>
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
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom:20
    },
    notificationWrapper: {
        zIndex: 9,
        bottom: 0
    }
})