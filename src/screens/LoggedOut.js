import React, {Component} from 'react';
import colors from '../styles/colors'
import {Platform,
        StyleSheet, 
        Text, 
        View,
        Image,
        TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import RoundedButton from '../components/buttons/RoundedButton'

export default class LoggedOut extends Component {
  onFacebookPress(){
    alert('FaceBook button pressed')
  }
  onCreateAccount(){
      alert('create account')
  }
  onMoreOptionPress(){
      alert('More options pressed')
  }
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                <Image source={require('../img/airbnb-logo.png')} style={styles.logo}  />
                <Text style={styles.welcomeText}>Welcome to AirBbnb !</Text>
                <RoundedButton 
                    text="Continue with Facebook" 
                    color={colors.green01} 
                    backgroundColor={colors.white} 
                    icon={<Icon name="facebook" size={20} style={styles.facebookButton} />}
                    handleOnPress={this.onFacebookPress}
                    />
                <RoundedButton 
                    text="Create Account" 
                    color={colors.white} 
                    backgroundColor={colors.green01} 
                    handleOnPress={this.onCreateAccount}
                    />
                <TouchableHighlight 
                    style={styles.moreOptionsButton}
                    onPress={this.onMoreOptionPress}
                    >
                    <Text style={styles.moreOptionsButtonText}>More options</Text>
                </TouchableHighlight>
                <View style={styles.termsContainer}>
                    <Text style={styles.termsText}>
                        By tapping Continue, Create Account or More options.
                    </Text>
                    <Text style={styles.termsText}>I agree to Airbnb's </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Terms of Services</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Payment Terms of Services</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>, </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>and </Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Non Discrimination Policy</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}>.</Text>
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
    },
    facebookButton: {
        color:colors.green01,
        zIndex: 8,
        position: 'relative',
        left: 20
    },
    moreOptionsButton: {
        marginTop: 10
    },
    moreOptionsButtonText: {
        fontSize: 16,
        color: colors.white
    },
    termsContainer: {
        flexWrap: 'wrap',
        alignItems: 'center',
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