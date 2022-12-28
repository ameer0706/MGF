import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelCome from '../Screen/Login/WelCome';
import SignUp from '../Screen/Login/SignUp';
import EmailOtp from '../Screen/Login/EmailOtp';
import BottomTabBar from './BottomTabBar';
import AccountDetails from '../Screen/UserDatail/AccountDetails';
import TransferHistory from '../Screen/UserDatail/TransferHistory';
import OrderHistory from '../Screen/UserDatail/OrderHistory';
import Settings from '../Screen/UserDatail/Settings';
import Notification from '../Screen/UserDatail/Notification';
import ContactUs from '../Screen/UserDatail/ContactUs';
import TransferDetails from '../Screen/UserDatail/TransferDetails';
import OrderDetails from '../Screen/UserDatail/OrderDetails';
import AddFund from '../Screen/UserDatail/AddFund';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelCome"
          component={WelCome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailOtp"
          component={EmailOtp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTabBar"
          component={BottomTabBar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountDetails"
          component={AccountDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TransferHistory"
          component={TransferHistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrderHistory"
          component={OrderHistory}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ContactUs"
          component={ContactUs}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="TransferDetails"
          component={TransferDetails}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="AddFund"
          component={AddFund}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
