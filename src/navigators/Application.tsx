import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  Apple,
  Completed,
  DanaNews,
  Feed,
  InProgres,
  Inbox,
  Startup,
  Tixid,
  Vidio,
  ViewAll,
} from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ModalTester from '@/components/Modal12';
import Modal12 from '@/components/Modal12';

const Stack = createStackNavigator<ApplicationStackParamList>();

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme, Fonts } = useTheme();
  const { colors } = NavigationTheme;
  const Tab = createMaterialTopTabNavigator();
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <View style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Startup" component={Startup} />
          <Stack.Screen
            name="ViewAll"
            component={ViewAll}
            options={{
              headerShown: true,
              headerTitle: 'ViewAll',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="Apple"
            component={Apple}
            options={{
              headerShown: true,
              headerTitle: 'Apple',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="Vidio"
            component={Vidio}
            options={{
              headerShown: true,
              headerTitle: 'Vidio',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="Tixid"
            component={Tixid}
            options={{
              headerShown: true,
              headerTitle: 'Tixid',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="DanaNews"
            component={DanaNews}
            options={{
              headerShown: true,
              headerTitle: 'DanaNews',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
              headerShown: true,
              headerTitle: 'Feed',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="Inbox"
            component={Inbox}
            options={{
              headerShown: true,
              headerTitle: 'Inbox',
              headerTintColor: colors.background,
              headerPressColor: colors.primary,
              headerBackTitleStyle: Fonts.textBold,
              headerStyle: {
                backgroundColor: colors.primary,
              },
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen name="Main" component={MainNavigator} />
        </Stack.Navigator>
        <Modal12 />
      </NavigationContainer>
    </View>
  );
};

export default ApplicationNavigator;
