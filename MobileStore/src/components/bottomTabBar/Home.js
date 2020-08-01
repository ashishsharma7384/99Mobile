import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    StatusBar,
    AsyncStorage,
    Image,
    Modal,
    TextInput,
    Keyboard,
    TouchableHighlight,
    Alert,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../utility/colors';
import Swiper from 'react-native-swiper';


const banner_img_arr = [
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
];

export default class Home extends Component {

    //hide the statusbar
    componentDidMount() {
        StatusBar.setHidden(true);
    }
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

    }

    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: 150, height: 250 }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        console.disableYellowBox = true;
        return (
            <View style={styles.container} >
                <StatusBar hidden />
                <ScrollView style={{ width: '100%' }} showsHorizontalScrollIndicator={false}>
                    <View style={{ width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: 250, width: '100%' }}>
                            <Swiper style={styles.bannerSwipeStyle} autoplay={true}>
                                {banner_img_arr.map((item, index) => {
                                    return (
                                        <TouchableOpacity
                                            //  key={banner.id}
                                            style={{
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                margin: 10,
                                            }}
                                            onPress={() => {
                                            }}>
                                            <Image
                                                style={styles.bannerSwipeImgStyle}
                                                resizeMode="cover"
                                                source={{ uri: item }}
                                            />
                                        </TouchableOpacity>
                                    );
                                })}
                            </Swiper>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputBox: {
        height: 50,
        color: colors.txt_clr,
        fontSize: 14,
    },
    category_styles: {
        height: 90,
        width: 100,
        margin: 3,
        borderRadius: 5
    },
    bannerSwipeStyle: {
        height: 230,
        marginTop: 10
    },
    bannerSwipeImgStyle: {
        width: Dimensions.get('window').width,
        height: 230,
        margin: 10,
    },
    img_top_view: {
        width: 100,
        height: 90,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    featured_style: {
        height: 40,
        width: 50,
    },
    featured_view: {
        width: 100,
        height: 90,
        borderWidth: 0.5,
        backgroundColor: colors.bg_clr,
        borderColor: colors.grey_clr,
        padding: 5,
        borderRadius: 5,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
});