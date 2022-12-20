import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screen/Bottom/Home';
import Market from '../Screen/Bottom/Market';
import Profile from '../Screen/Bottom/Profile';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MarketStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Market"
        component={Market}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BottomTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: '#000',
          height: 70,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#E4C863',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                }}>
                <MaterialCommunityIcons
                  name="gamepad-circle"
                  color={'#fff'}
                  size={size}
                />
              </View>
            ) : (
              <MaterialCommunityIcons
                name="gamepad-circle"
                color={'#fff'}
                size={size}
              />
            ),
        }}
      />
      <Tab.Screen
        name="MarketStack"
        component={MarketStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#E4C863',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                }}>
                <MaterialCommunityIcons
                  name="signal-cellular-outline"
                  color={'#fff'}
                  size={size}
                />
              </View>
            ) : (
              <MaterialCommunityIcons
                name="signal-cellular-outline"
                color={'#fff'}
                size={size}
              />
            ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <View
                style={{
                  backgroundColor: '#E4C863',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 45,
                  height: 45,
                }}>
                <MaterialCommunityIcons
                  name="account"
                  color={'#fff'}
                  size={size}
                />
              </View>
            ) : (
              <MaterialCommunityIcons
                name="account"
                color={'#fff'}
                size={size}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabBar;
