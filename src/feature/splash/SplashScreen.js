import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MainView from '../../components/view/MainView/index'
import NavigationHeaders from '../../navigation/navigationHeder';
import SplashScreenView from './components/SplashScreenView'

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => { }, [
    setTimeout(() => {
      navigation.navigate(NavigationHeaders.Login)
    }, 2000)
  ])
  return (
    <MainView isSafeAreaViewDisplay={true} isStatusBarHidden={true} subView={SplashScreenView}>
    </MainView>
  );
};
export default SplashScreen;
