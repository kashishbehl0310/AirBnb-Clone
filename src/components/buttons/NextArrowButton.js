import React , { Component } from "react";
import propTypes from 'prop-types';
import { 
    TouchableHighlight,
    StyleSheet
 } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from '../../styles/colors';

export default class NextArrowButton extends Component{
    render(){
        const { disabled, handleNextButon } = this.props;
        const opacityStyle = disabled ? 0.2 : 0.6 ;
        return(
            <TouchableHighlight 
                style={[{opacity: opacityStyle}, styles.button]}
                onPress={handleNextButon}
                disabled={disabled}
            >
                <Icon 
                    name="angle-right"
                    color={colors.green01}
                    size={32}
                    style={styles.icon}
                />
            </TouchableHighlight>
        )
    }
}

NextArrowButton.propTypes = {
    disabled: propTypes.bool,
    handleNextButton: propTypes.func
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        width: 50,
        height: 50,
        backgroundColor: colors.white
    },
    icon: {
        marginRight: -2,
        marginTop: -2
    }
})