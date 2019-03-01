import React, { Component } from 'react';
import PropTypes from "prop-types";
import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
 } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../redux/actions";
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from "../components/forms/InputField";
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification';
import Loader from '../components/Loader';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            formValid :true,
            validEmail: false,
            emailAddress: '',
            password: '',
            validPassword: false,
            loadingVisible: false
        }
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleNextButon = this.handleNextButon.bind(this);
        this.toggleNextButton = this.toggleNextButton.bind(this);
    }
    handleNextButon(){
        this.setState({
            loadingVisible: true
        })
        setTimeout(() => {
            const { emailAddress, password } = this.state;
            if(this.props.logIn(emailAddress, password)){
                this.setState({
                    formValid:  true,
                    loadingVisible: false
                })
            } else {
                this.setState({
                    formValid: false,
                    loadingVisible: false
                })
            }
            // if(this.state.emailAddress === 'hello@imandy.ie' && this.state.validPassword) {
            //     this.setState({
            //         formValid:  true,
            //         loadingVisible: false
            //     })
            // } else {
            //     this.setState({
            //         formValid: false,
            //         loadingVisible: false
            //     })
            // }
        }, 2000)
    }
    handleCloseNotification(){
        this.setState({
            formValid:true
        })
    }
    handleEmailChange(email){
        const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.setState({
            emailAddress: email
        })
        if(!this.state.validEmail) {
            if(emailCheckRegex.test(email)){
                this.setState({
                    validEmail: true
                })
            }
        } else {
            if(!emailCheckRegex.test(email)){
                this.setState({ validEmail: false })
            }
        }
    }   
    handlePasswordChange(password){
        this.setState({ password })
        if(!this.state.validPassword){
            if(password.length > 4){
                this.setState({
                    validPassword: true
                })
            } else if (password.length <= 4){
                this.setState({
                    validPassword: false
                })
            }
        }
    }

    toggleNextButton(){
        const  { validEmail, validPassword } = this.state;
        if(validEmail && validPassword){
            return false;
        }
        return true;
    }
    render(){
        const { formValid, loadingVisible, validEmail, validPassword } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? colors.green01 : colors.darkOrange;
        const notificationMarginTop = showNotification ? 10: 0;
        console.log(this.props.loggedInStatus);
        return(
            <KeyboardAvoidingView
                style={[{backgroundColor: background}, styles.wrapper]}
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.logginHeader}>Log In</Text>
                        <InputField 
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="email"
                            customStyle={{marginBottom: 30}}
                            onChangeText={this.handleEmailChange}
                            showCheckmark={validEmail}
                            autoFocus={true}
                        />
                        <InputField 
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={colors.white}
                            textColor={colors.white}
                            borderBottomColor={colors.white}
                            inputType="password"
                            customStyle={{marginBottom: 30}}
                            onChangeText={this.handlePasswordChange}
                            showCheckmark={validPassword}
                        />
                    </ScrollView>
                    <View style={styles.nextButton}>
                        <NextArrowButton 
                            handleNextButon={this.handleNextButon}
                            disabled={this.toggleNextButton()}
                        />
                    </View>
                    <View style={[styles.notificationWrapper, {marginTop: notificationMarginTop}]}>
                        <Notification 
                            showNotification={showNotification}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error"
                            firstLine="These credentials don't look right."
                            secondLine="Please try again."
                        />
                    </View>
                </View>
                <Loader 
                    animationType="fade"
                    visible={loadingVisible}
                />
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
    },
    scrollViewWrapper: {
        marginTop:70,
        flex: 1
    },
    scrollView: {
        paddingTop: 20,
        paddingRight: 30,
        paddingLeft: 30,
        flex: 1
    },
    logginHeader: {
        fontSize: 34,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 10
    },
    notificationWrapper: {
        position: "absolute",
        bottom: 0,
    }   
})
const mapStateToProps = (state) => {
    return {
        loggedInStatus: state.loggedInStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);