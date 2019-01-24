import React, { Component } from "react";
import PropTypes from 'prop-types';
import { 
    Text,
    View,
    TouchableHighlight,
    StyleSheet
 } from "react-native";
import colors from '../../styles/colors';

export default class RoundButton extends Component {
    render(){
        const {
                text, 
                color, 
                background,
                handleOnPress,
                icon
            } = this.props;
        const backgroundColor = background || 'transparent';
        return(
            <TouchableHighlight 
                style={[{backgroundColor}, styles.wrapper]} 
                onPress={handleOnPress}    
            > 
                <View style={styles.buttonTextwrapper} >
                    {icon}
                    <Text 
                        style={[{color}, styles.buttonText]}
                    >
                        {text}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }
}

RoundButton.PropTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    background: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 40,
        borderWidth: 1,
        marginBottom: 15,
        alignItems: 'center',
        borderColor: colors.white
    },
    buttonTextwrapper:{
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center'
    }
})