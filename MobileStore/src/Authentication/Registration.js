import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ImageBackground,
    TouchableHighlight,
    Alert,
    Image,
    StatusBar,
    Keyboard,
    AsyncStorage,
    ToastAndroid,
    BackHandler,
    ScrollView,
    Dimensions
} from 'react-native';
import colors from '../utility/colors';
import Icon from 'react-native-vector-icons/Feather';

//import LinearGradient from 'react-native-linear-gradient';

export default class Registration extends Component {

    constructor() {
        super();
        this.state = {
            isLoader: false,
            email_var: '',
            Password_var: '',
            loading: false,
            openVerifiedModal: false,
            Otp_Var_signin: ''
        }
    }

    componentDidMount() {
        StatusBar.setHidden(true);//show the statusbar
        //  this.clickHandler();
    }

    componentWillMount() {
        Keyboard.addListener('keyboardDidHide', this._forceLoseFocus);
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);

    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
        Keyboard.removeListener('keyboardDidHide', this._forceLoseFocus);
    }

    handleBackButtonClick = () => {
        //this.props.navigation.isFocused() helps to exit the app in one screen not in the whole
        if (this.props.navigation.isFocused()) {
            this.props.navigation.replace('WelcomeScreen');
            return true;
        }
    }

    _forceLoseFocus = () => {
        this._textInput1.blur();
        this._textInput2.blur();

    }

    setVerifiedModal(value) {
        this.setState({ openVerifiedModal: value })
    }

    goBack = () => {
        this.props.navigation.replace('WelcomeScreen');
    }

    render() {
        console.disableYellowBox = true;
        const headerTxt = 'Sign In';
        const action = 'normal';
        return (

            <View style={{ flex: 1, backgroundColor: colors.bg_clr }}>
                <StatusBar hidden={true} backgroundColor={colors.blue_clr} barStyle="light-content" />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
                        <View style={{ alignItems: 'center',marginTop:30 }}>
                            <Image source={require('../assests/images/carton_logo.png')} style={styles.logo} />
                        </View>

                        <Text style={{fontSize: 18, marginTop: 20 }}>Register</Text>

                        <View style={styles.inputTextStyle}>
                            <View style={{ flex: 9 }}>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Name"
                                    placeholderTextColor='#384055'
                                    keyboardType='email-address'
                                    value={this.state.email_var}
                                    onChangeText={(email_var) => this.setState({ email_var })}
                                    onSubmitEditing={Keyboard.dismiss}
                                    ref={(component) => this._textInput1 = component}
                                />
                            </View>
                        </View>

                        <View style={styles.inputTextStyle}>
                            <View style={{ flex: 9 }}>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Email"
                                    placeholderTextColor='#384055'
                                    keyboardType='email-address'
                                    autoCorrect={false}
                                    value={this.state.Password_var}
                                    onChangeText={(Password_var) => this.setState({ Password_var })}
                                    onSubmitEditing={Keyboard.dismiss}
                                    ref={(component) => this._textInput2 = component}
                                />
                            </View>
                        </View>

                        <View style={styles.inputTextStyle}>
                            <View style={{ flex: 9 }}>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Password"
                                    placeholderTextColor='#384055'
                                    keyboardType='default'
                                    autoCorrect={false}
                                    secureTextEntry={true}//for showing password in secure mode
                                    value={this.state.Password_var}
                                    onChangeText={(Password_var) => this.setState({ Password_var })}
                                    onSubmitEditing={Keyboard.dismiss}
                                    ref={(component) => this._textInput2 = component}
                                />
                            </View>
                        </View>

                        <View style={styles.inputTextStyle}>
                            <View style={{ flex: 9 }}>
                                <TextInput style={styles.inputBox}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    placeholder="Confirm Password"
                                    placeholderTextColor='#384055'
                                    keyboardType='default'
                                    autoCorrect={false}
                                    secureTextEntry={true}//for showing password in secure mode
                                    value={this.state.Password_var}
                                    onChangeText={(Password_var) => this.setState({ Password_var })}
                                    onSubmitEditing={Keyboard.dismiss}
                                    ref={(component) => this._textInput2 = component}
                                />
                            </View>
                        </View>

                        <View style={{ backgroundColor: colors.bg_clr, width: '100%',padding:25,marginTop:15 }}>

                            <TouchableHighlight style={[styles.button, { backgroundColor: colors.red_clr, }]} activeOpacity={0.8} underlayColor={'#6BA1D5'} onPress={() => this.props.navigation.replace('DashboardScreen')}>
                                <Text style={styles.buttontxt}>Register</Text>
                            </TouchableHighlight>

                            <View style={styles.botom_view}>
                                <Text>About  |</Text>
                                <Text>  Contact</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
                {/* <Loader isLoader={this.state.loading}> </Loader>
                <Toast ref="toast" /> */}
            </View >
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.bg_clr,
        flex: 1,
    },
    headertxt: {
        color: colors.txt_clr,
        textAlign: 'center',
        fontSize: 16,
        paddingRight: 42,
        fontWeight: 'bold'
    },
    logo: {
        height: 60,
        width: Dimensions.get('window').width-40,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinnerTextStyle: {
        color: colors.white_clr
    },
    inputTextStyle: {
        flexDirection: 'row',
        borderColor: colors.black_clr,
        borderRadius: 2,
        marginLeft:25,
        marginRight:25,
        marginTop:20,
        marginBottom:10,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: colors.white_clr,

    },
    inputBox: {
        height: 50,
        color: colors.txt_clr,
        fontSize: 14,
    },
    botom_view: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 0.5,
        borderTopColor: colors.grey_clr
    },
    button: {
        height: 55,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        width: '100%',
    },
    buttontxt: {
        fontSize: 20,
        color: colors.white_clr,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    forgView: {
        justifyContent: 'center',
    },
    forgottxt: {
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
});