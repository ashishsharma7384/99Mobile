import React from 'react';
import { View, StyleSheet,Dimensions,Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



export function DrawerContent(props) {

    const paperTheme = useTheme();

    // const { signOut, toggleTheme } = React.useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Image
                                source={require('../assests/images/carton_logo.png')}
                                style={styles.logo}
                            />
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="My Inquiries"
                            onPress={() => { props.navigation.navigate('InquiriesScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="heart-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Saved Products"
                            onPress={() => { props.navigation.navigate('SavedProductScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="ios-information-circle-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About Carton"
                            onPress={() => { props.navigation.navigate('AboutCartonScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="file-document-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Terms and Condition"
                            onPress={() => { props.navigation.navigate('TermsConditionScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="head-question-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="FAQ"
                            onPress={() => { props.navigation.navigate('FaqScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="help-circle-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Help"
                            onPress={() => { props.navigation.navigate('HelpScreen') }}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple
                        //  onPress={() => {toggleTheme()}}
                        >
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                //     onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    logo: {
        height: 60,
        width: '90%',
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
