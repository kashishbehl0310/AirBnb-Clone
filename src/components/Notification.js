import React, { Component } from "react";
import propTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Easing,
    Animated
 } from "react-native";
import colors from "../styles/colors";

export default class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            positionValue: new Animated.Value(60)
        }
        this.onCloseNotification = this.onCloseNotification.bind(this);
        this.animateNotification = this.animateNotification.bind(this);
    }
    animateNotification(value){
        const { positionValue } = this.state;
        Animated.timing(
            positionValue,
            {
                toValue: value,
                duration: 400,
                velocity: 3,
                tension: 2,
                friction: 8,
                easing: Easing.easeOutBack
            }
        ).start();
    }
    onCloseNotification(){
        this.props.handleCloseNotification()
    }
    render(){
        const { type, firstLine, secondLine, showNotification } = this.props;
        showNotification ? this.animateNotification(0) : this.animateNotification(60)
        const { positionValue } = this.state;
        return(
            <Animated.View style={[{transform: [{ translateY: positionValue}]}, styles.wrapper]}>
                <View style={styles.notificationContent}>
                    <Text style={styles.errorText}>{type}</Text>
                    <Text style={styles.errorMessage}>{firstLine}</Text>
                    <Text style={styles.errorMessage}>{secondLine}</Text>
                </View>
                <TouchableOpacity
                    style={styles.closeButton}
                    onPress={this.onCloseNotification}
                >
                    <Icon 
                        name="times"
                        size={20}
                        color={colors.lightGrey}
                    /> 
                </TouchableOpacity>
            </Animated.View>
        )
    }
}   

Notification.propTypes = {
    showNotification: propTypes.bool.isRequired,
    type: propTypes.string.isRequired,
    firstLine: propTypes.string,
    secondLine: propTypes.string,
    handleCloseNotification: propTypes.func
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        height: 60,
        width: '100%',
        padding: 10
    },
    notificationContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    errorText: {
        color: colors.darkOrange,
        marginRight: 5,
        fontSize: 14,
        marginBottom: 2
    },
    errorMessage: {
        marginBottom: 2,
        fontSize: 14
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10
    }
})