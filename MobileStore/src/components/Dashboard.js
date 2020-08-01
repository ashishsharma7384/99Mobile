import React, { Component } from 'react';
import { View, StyleSheet, BackHandler, Alert } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { DrawerContent } from './DrawerContent';
import MainTabBar from './MainTabBar';

const Drawer = createDrawerNavigator();

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    //for handling backgesture in ios
    static navigationOptions = {
        header: null,
        gesturesEnabled: false,
        disableGestures: true
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick = () => {
        //this.props.navigation.isFocused() helps to exit the app in one screen not in the whole
        if (this.props.navigation.isFocused()) {
            Alert.alert(
                '',
                'Are you sure you want to quit the app?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel'
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp()
                    }
                ],
                { cancelable: false },
            );
            return true;
        }
    }

    render() {
        console.disableYellowBox = true;

        // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

        // const CustomDefaultTheme = {
        //     ...NavigationDefaultTheme,
        //     ...PaperDefaultTheme,
        //     colors: {
        //         ...NavigationDefaultTheme.colors,
        //         ...PaperDefaultTheme.colors,
        //         background: '#ffffff',
        //         text: '#333333'
        //     }
        // }

        // const CustomDarkTheme = {
        //     ...NavigationDarkTheme,
        //     ...PaperDarkTheme,
        //     colors: {
        //         ...NavigationDarkTheme.colors,
        //         ...PaperDarkTheme.colors,
        //         background: '#333333',
        //         text: '#ffffff'
        //     }
        // }

        // const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;
        return (
            <PaperProvider >
                <NavigationContainer independent={true}>
                    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="HomeDrawer" component={MainTabBar} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </PaperProvider>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column'
    },
});