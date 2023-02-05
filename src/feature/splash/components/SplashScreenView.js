import React from 'react';
import { Image, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Images from '../../../utility/images';
import styles from '../styles';


export default SplashScreenView = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={Images.background} style={styles.imageBackGroundStyle} />
        </View>
    );
};