import React, { Component } from 'react';
import {
    View, StyleSheet, StatusBar, Image, Text, Dimensions
} from 'react-native';

export default class Splash extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {

        setTimeout(() => {
            this.props.navigation.navigate('LoginScreen');
        }, 2000);
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.background} >
                <StatusBar hidden={true} />
                <Image
                    source={require('../assests/images/carton_logo.png')}
                    style={styles.logo}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    logo: {
        height: 60,
        width: Dimensions.get('window').width-40,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_txt: {
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        textAlign: 'center',
    },
});