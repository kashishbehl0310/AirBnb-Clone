import React, { Component } from "react";
import {  
    Text,
    View,
    StyleSheet,
    Image,
    TouchableHighlight
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import RoundButton from '../components/buttons/RoundButton'
import colors from '../styles/colors'

export default class LoggedOut extends Component{
    onFacebookPress(){
        alert('Facebook Button Pressed')
    }
    onCreateAccountPress(){
        alert('New Account Pressed')
    }
    onMoreOptionsPressed(){
        alert('More options pressed')
    }
    render(){
        return(
            <View style={styles.wrapper}>
                <View>
                    <Image 
                        source={require('../img/airbnb-logo.png')} 
                        style={styles.logo}
                    />
                    <Text style={styles.welcomeText} >Welcome to Airbnb</Text>
                    <RoundButton 
                        text="Continue with Facebook"
                        color={colors.green01}
                        background={colors.white}
                        icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundButton 
                        text="Create Account"
                        color={colors.white}
                        handleOnPress={this.onCreateAccountPress}
                    />
                    <TouchableHighlight
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPressed}
                    >
                        <Text style={styles.moreOptionsButtonText}>More Options</Text>
                    </TouchableHighlight>
                    <View style={styles.termsAndConditions} >
                        <Text style={styles.termsText} >
                            By tapping Continue, Create Account or More 
                        </Text>
                        <Text style={styles.termsText} >options, </Text>
                        <Text style={styles.termsText}>
                            I agree to Airbnb's 
                        </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText} >Terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText} >, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText} >Payment terms of Service</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText} >, </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText} >Privacy Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText} >and </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText} >Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
        padding: 20
    },
    welcomWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 20,
        padding: 30
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    },
    welcomeText:{
        fontSize: 30,
        color: colors.white,
        fontWeight: '300',
        marginBottom: 40
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 20,
        zIndex: 8
    },
    moreOptionsButton: {
        marginTop: 15
    },
    moreOptionsButtonText: {
        color: colors.white,
        fontSize: 16
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 30
    },
    termsText: {
        color: colors.white,
        fontSize: 13,
        fontWeight: '600'
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    }
})