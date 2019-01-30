import React, { Component } from 'react';
import PropTypes from "prop-types";
import { 
    Text,
    View,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
 } from "react-native";
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import InputField from "../components/forms/InputField";
import NextArrowButton from '../components/buttons/NextArrowButton';
import Notification from '../components/Notification'

export default class Login extends Component {
    handleNextButon(){
        alert('Next Button Pressed')
    }
    handleCloseNotification(){
        alert('closed')
    }
    render(){
        return(
            <KeyboardAvoidingView
                style={styles.wrapper}
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
                        />
                        <InputField 
                            labelText="PASSWORD"
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
                            handleNextButon={this.handleNextButon}
                        />
                    </View>
                    <View>
                        <Notification 
                            showNotification={true}
                            handleCloseNotification={this.handleCloseNotification}
                            type="Error"
                            firstLine="These credentials don't look right."
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
        flex: 1,
        backgroundColor: colors.green01
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
        bottom: 20
    }
})