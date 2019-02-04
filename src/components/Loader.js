import React, { Component } from "react";
import propTypes from "prop-types";
import { 
    Image,
    View,
    Modal,
    StyleSheet
 } from "react-native";
import colors from '../styles/colors';

export default class Loader extends Component{
    render(){
        const { animationType, visible } =  this.props;
        return(
            <Modal 
                animationType={animationType}
                visible={visible}
                transparent={true}
            >
                <View style={styles.wrapper}> 
                    <View style={styles.loaderContainer}>
                        <Image 
                            style={styles.loaderImage}
                            source={require('../img/greenLoader.gif')}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
}

Loader.propTypes = {
    animationType: propTypes.string.isRequired,
    visible: propTypes.bool.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0
    },
    loaderContainer: {
        width: 90,
        height: 90,
        backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -45,
        marginTop: -45
    },  
    loaderImage: {
        width: 90,
        height: 90,
        borderRadius: 15
    }
})
