import React, { Component } from "react";
import propTypes from "prop-types";
import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TextInput,
    Animated,
    Easing
 } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export default class InputField extends Component{
    constructor(props){
        super(props);
        this.state = {
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
            scaleCheckMarkValue: new Animated.Value(0)
        }
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    scaleCheckMark(value){
        Animated.timing(
            this.state.scaleCheckMarkValue,
            {
                toValue: value,
                duration: 400,
                easing: Easing.easeOutBack
            }
        ).start();
    }

    toggleShowPassword(){
        this.setState({
            secureInput: !this.state.secureInput
        })
    }
    render(){
        const { 
            labelText, 
            labelTextSize, 
            labelColor, 
            textColor, 
            borderBottomColor, 
            inputType,
            customStyle,
            onChangeText,
            showCheckMark
        } = this.props;
        const { secureInput, scaleCheckMarkValue } = this.state;
        const fontSize = labelTextSize || 14;
        const color = labelColor || colors.white;
        const inputColor = textColor || colors.white;
        const borderBottom = borderBottomColor || 'transparent';
        const keyboardType = inputType === 'email' ? 'email-address' : 'default';
        const iconScale = scaleCheckMarkValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1.6, 1]
        })

        const scaleValue = showCheckMark ? 1 : 0;
        this.scaleCheckMark(scaleValue)

        return(
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color, fontSize},styles.labelText]}>
                    {labelText}
                </Text>
                {inputType === 'password' ? 
                    <TouchableOpacity 
                        style={styles.showButton}
                        onPress={this.toggleShowPassword}
                    >
                        <Text style={styles.showButtonText}>{secureInput ? 'Show' : 'Hide'}</Text>
                    </TouchableOpacity>
                    : null
                }
                <Animated.View style={[{transform: [{scale: iconScale}] }, styles.checkmarkWrapper]}>
                    <Icon 
                        name="check"
                        size={20}
                        color={colors.white}
                    />
                </Animated.View>
                <TextInput 
                    autoCorrect={false}
                    style={[{color: inputColor, borderBottomColor: borderBottom},styles.inputField]}
                    secureTextEntry={secureInput}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
            </View>
        )
    }
}

InputField.propTypes = {
    labelText: propTypes.string.isRequired,
    labelTextSize: propTypes.number,
    labelColor: propTypes.string,
    textColor: propTypes.string,
    borderBottomColor: propTypes.string,
    inputType: propTypes.string.isRequired,
    customStyle: propTypes.object,
    onChangeText: propTypes.func,
    showCheckMark: propTypes.bool.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex'
    },
    labelText: {
        fontWeight: '700',
        marginBottom: 20
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    },
    showButton : {
        position: 'absolute',
        right: 0
    },
    showButtonText: {
        color: colors.white,
        fontWeight: '700'
    },
    checkmarkWrapper:{
        position: 'absolute',
        right: 0,
        bottom: 10
    }
});