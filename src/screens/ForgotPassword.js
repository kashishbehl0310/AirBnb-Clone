import React, { Component } from "react";
import { 
    Text,
    View,
    KeyboardAvoidingView,
    StyleSheet
 } from "react-native";
import colors from '../styles/colors';
import NextArrowButton from "../components/buttons/NextArrowButton";
import InputField from "../components/forms/InputField";
import Notification from '../components/Notification';
import Loader from '../components/Loader';

export default class ForgotPassword extends Component{
    constructor(props){
        super(props);
        this.state = {
            formValid: true,
            loadingVisible: false,
            validEmail: false,
            emailAddress: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.goToNextStep = this.goToNextStep.bind(this);
    }
    handleInputChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        
        this.setState({
            emailAddress: email
        })
        if(!this.state.validEmail){
            if(emailCheckRegex.test(email)){
                 this.setState({
                     validEmail: true
                 })
            }
        } else {
            if(!emailCheckRegex.test(email)){
                this.setState({
                    validEmail: false
                })
            }
        }
    }
    goToNextStep(){
        alert('sfsjks')
    }
    render(){
        const { loadingVisible } = this.state;
        return(
            <KeyboardAvoidingView
                style={styles.wrapper}
                behavior="padding"
            >
                <View style={styles.form}>
                    <Text style={styles.forgotPasswordHeading}>Forgot your password</Text>
                    <Text style={styles.forgotPasswordSubHeading}>Enter your email to reset your password</Text>
                    <InputField 
                        customStyle={{marginBottom: 30}}
                        textColor={colors.white}
                        labelText="EMAIL ADDRESS"
                        labelTextSize={14}
                        labelColor={colors.white}
                        borderBottomColor={colors.white}
                        inputType="email"
                        onChangeText={this.handleInputChange}
                    />
                </View>
                <View>
                    <NextArrowButton 
                        handleNextButton={this.goToNextStep}
                    />
                    <Loader 
                        visible={loadingVisible}
                        animationType="fade"
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
    forgotPasswordHeading: {
        fontSize: 28,
        color: colors.white,
        fontWeight: '300'
    }, 
    form: {
        marginTop: 90,
        paddingRight: 20,
        paddingLeft: 20,
        flex: 1
    },
    forgotPasswordSubHeading: {
        color: colors.white,
        fontWeight: '600',
        fontSize: 15,
        marginTop: 10,
        marginBottom: 60
    }
})