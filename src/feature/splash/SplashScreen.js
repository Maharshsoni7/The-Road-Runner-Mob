import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MainView from '../../components/view/MainView/index'
import SplashScreenView from './components/SplashScreenView'

const SplashScreen = ({ navigation }) => {
  return (
    <MainView isSafeAreaViewDisplay={true} isStatusBarHidden={true} subView={SplashScreenView}>
    </MainView>
  );
};
export default SplashScreen;
