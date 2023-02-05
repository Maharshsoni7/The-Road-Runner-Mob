import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../navigation/RootNavigation'
import NavigationHeaders from '../navigation/navigationHeder'
import SplashScreen from '../feature/splash/SplashScreen';
import Men from '../feature/men';
import { Image, Text, View } from 'react-native';
import Images from '../utility/images';
import Women from '../feature/women';
import Kids from '../feature/kids';
import Jordan from '../feature/jorden';
import Login from '../feature/login';
import SignUp from '../feature/signUp';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function getCurrentRouteName() {
  return navigationRef?.current?.getCurrentRoute()?.name
}
export function navigate(name, params) {
  navigationRef?.current?.navigate(name, params);
}
const AppNavigator = () => {

  const Stack = createStackNavigator();
  const navigationRef = createRef();
  const Tab = createBottomTabNavigator();

  const headerOptions = {
    headerTitleAlign: 'left',
    headerStyle: { backgroundColor: 'white' },
    headerTintColor: 'white',
    headerShown: true
  }


  const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Men}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Text>Men</Text>
            ),

          }}

        />
        <Tab.Screen
          name="Women"
          component={Women}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Text>Women</Text>
            ),

          }}

        />
        <Tab.Screen
          activeTintColor='#ff0000'
          inactiveTintColor='#000000'
          name="Kids"
          component={Kids}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <View style={{}}>
                <Text style={{
                  // borderBottomColor: 'black',
                  // color: 'red'
                }}>Kids</Text>
              </View>
            ),
          }}

        />
        <Tab.Screen
          name="Jordan  "
          component={Jordan}
          options={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Text>Jordan</Text>
            ),

          }}

        />
      </Tab.Navigator>
    );
  }

  const HomeStack = () => {
    return (
      <Stack.Navigator initialRouteName={NavigationHeaders.Home}>
        <Stack.Screen
          name={NavigationHeaders.Men}
          component={Men}
          options={headerOptions}
        />
        <Stack.Screen
          name={NavigationHeaders.Women}
          component={Women}
          options={headerOptions}
        />
        <Stack.Screen
          name={NavigationHeaders.Kids}
          component={Kids}
          options={headerOptions}
        />
        <Stack.Screen
          name={NavigationHeaders.Jordan}
          component={Jordan}
          options={headerOptions}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false, }} component={SplashScreen} />
        <Stack.Screen name={NavigationHeaders.Login} options={{ headerShown: false }} component={Login} />
        <Stack.Screen name={NavigationHeaders.SingUp} options={{ headerShown: false }} component={SignUp} />
        <Stack.Screen name={NavigationHeaders.Home} options={{ headerShown: false }} component={BottomTabNavigator} />
      </Stack.Navigator>
      {/* <Tab.Navigator >
       
      </Tab.Navigator> */}
    </NavigationContainer>
  )
  // <NavigationContainer ref={navigationRef}>
  // <Stack.Navigator headerMode="none">
  //   <Stack.Screen name={NavigationHeaders.SplashScreen} options={{ headerShown: false }} component={SplashScreen} />

  // </Stack.Navigator>
  // </NavigationContainer>
};

export default AppNavigator;
