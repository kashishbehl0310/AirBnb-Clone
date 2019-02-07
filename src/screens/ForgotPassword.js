import React, { Component } from "react";
import { 
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView
 } from "react-native";
import colors from '../styles/colors';
import InputField from '../components/forms/InputField';
import Notification from '../components/Notification';
import Loader from '../components/Loader';
import NextArrowButton from "../components/buttons/NextArrowButton";

export default class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            formValid: true,
            loadingVisible: false,
            validEmail: false,
            emailAddress: ''
        }
    }
    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            emailAddress: email
        })
        if(this.state.validEmail){
            if(emailCheckRegex.test(email)){
                this.setState({
                    validEmail: true
                })
            } else {
                if(!emailCheckRegex.test(email)){
                    this.setState({
                        validEmail: false
                    })
                }
            }
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style={styles.wrapper}>
                <View style={styles.form}>
                    <Text style={styles.forgotPasswordHeading}>Forgot Password</Text>
                    <Text style={styles.forgotPasswordSubHeading} >Please enter your email to reset your password.</Text>
                    <InputField 
                        labelColor={colors.white}
                        labelTextSize={14}
                        labelText="EMAIL ADDRESS"
                        textColor={colors.white}
                        customStyle={{marginBottom: 30}}
                        borderBottomColor={colors.white}
                        inputType="email"
                        onChangeText={this.handleEmailChange}
                    />
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
    form: {
        marginRight: 90,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1
    },
    forgotPasswordHeading: {
        fontSize: 28,
        color: colors.white,
        fontWeight: '300'
    },
    forgotPasswordSubHeading: {
        fontSize: 15,
        color: colors.white,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 60
    }
})

