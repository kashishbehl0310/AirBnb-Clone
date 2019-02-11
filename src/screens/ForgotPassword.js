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
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
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
        this.setState({
            loadingVisible: true
        })
        setTimeout(() => {
            if(this.state.emailAddress === 'wrong@gmail.com'){
                this.setState({
                    loadingVisible: false,
                    formValid: false
                })
            } else {
                this.setState({
                    loadingVisible: false,
                    formValid: true
                })
            }
        }, 2000)
    }
    handleCloseNotification(){
        this.setState({
            formValid: true
        })
    }
    render(){
        const { loadingVisible, formValid, validEmail } = this.state;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const showNotification = formValid ? false : true;
        return(
            <KeyboardAvoidingView
                style={[{backgroundColor: background},styles.wrapper]}
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
                        showCheckmark={validEmail}
                    />
                </View>
                <View>
                    <View style={styles.nextButton}>
                        <NextArrowButton 
                            handleNextButon={this.goToNextStep}
                            disabled={!validEmail}
                        />
                    </View>
                    <View>
                        <Notification 
                            showNotification = {showNotification}
                            handleCloseNotification={this.handleCloseNotification}  
                            type="Error"
                            firstLine="No account exists for that email"                          
                        />
                    </View>
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
        flex: 1
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
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 10
    }
})