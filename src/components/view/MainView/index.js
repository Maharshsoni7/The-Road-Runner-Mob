import React from 'react'
import { SafeAreaView, View, StatusBar, Text } from 'react-native';
import style from './style';


const ChildView = ({ isStatusBarHidden = true, SubView, testID, isDifferentBG, context }) => {
    return (
        <View style={style.container} testID={testID}>
            {/* <StatusBar backgroundColor={''} barStyle="light-content" hidden={isStatusBarHidden} /> */}
            {/* <NetworkConnectivityBar style={{ padding: 20 }} /> */}
            <SubView context={context}>
            </SubView>
        </View>
    );
};

export default MainView = ({ isSafeAreaViewDisplay = true, isStatusBarHidden = false, subView, testID, isDifferentBG = false, context }) => {
    console.log("subView", subView);
    return (
        <SafeAreaView style={style.container}>
            <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} context={context} />
        </SafeAreaView>
        // isSafeAreaViewDisplay ?
        //     <SafeAreaView>
        //         {/* <SafeAreaView style={[styles.container, { backgroundColor: isDifferentBG ? colors.white : colors.backgroundColor }]}> */}

        //         {/* <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} isDifferentBG={isDifferentBG} context={context} /> */}
        //     </SafeAreaView> : <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} context={context} />

    );
};