import React, { Component } from "react";
import {  
    Text,
    View,
    StyleSheet,
    Image
} from "react-native";
import colors from '../styles/colors'

export default class LoggedOut extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View>
                    <Image 
                        source={require('../img/airbnb-logo.png')} 
                        style={styles.logo}
                    />
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
    welcomWrapper: {
        flex: 1,
        display: 'flex'
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        marginBottom: 40
    }
})