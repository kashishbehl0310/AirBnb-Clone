import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { 
      Text,
      View,
      TouchableHighlight,
      StyleSheet
    } from "react-native";
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
    render(){
        const { text, color, backgroundColor, handleOnPress, icon } = this.props;
        return(
            <TouchableHighlight 
                style={[{backgroundColor}, styles.wrapper]}
                onPress={handleOnPress}    
            >  
                <View>
                    {icon}
                    <Text style={[{color},styles.buttonText]}>{text}</Text>
                </View> 
            </TouchableHighlight>
        )
    }
}

RoundedButton.PropTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func.isRequired 
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        borderRadius: 40,
        padding: 15,
        borderWidth: 1,
        borderColor: colors.white
    },
    buttonText: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center'
    }
})
