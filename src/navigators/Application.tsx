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
  ARewards,
  AddNewBank,
  Apple,
  BankServis,
  Bca,
  Bpjs,
  Completed,
  CreditCard,
  CreditCarddDetail,
  DanaNews,
  Danamon,
  Ecommerce,
  EcommerceDetail,
  Education,
  EducationDetail,
  Electricity,
  Esamsat,
  Etilang,
  Feed,
  Games,
  Gas,
  InProgres,
  Inbox,
  Installment,
  InstallmentDetail,
  Lazada,
  Loyalty,
  LoyaltyDetail,
  Maintenance,
  MaintenanceDetail,
  Maps,
  MiniGames,
  Money,
  MoneyDetail,
  MyBills,
  PenerimaNegara,
  PenerimaNegara2,
  Pln,
  SendtoBank,
  SendtoGroup,
  Startup,
  Telkom,
  Tixid,
  Tvkabel,
  TvkabelDetail,
  Vidio,
  ViewAll,
  WaterDetail,
  Watter,
} from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';
import { useFlipper } from '@react-navigation/devtools';
import { ApplicationStackParamList } from '../../@types/navigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ModalTester from '@/components/Modal12';
import Modal12 from '@/components/Modal12';
import PLN from '@/screens/Pln/Pln';

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
            name="Telkom"
            component={Telkom}
            options={{
              headerShown: true,
              headerTitle: 'Telkom',
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
            name="Watter"
            component={Watter}
            options={{
              headerShown: true,
              headerTitle: 'Watter',
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
            name="PenerimaNegara"
            component={PenerimaNegara}
            options={{
              headerShown: true,
              headerTitle: 'Penerima Negara',
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
            name="WaterDetail"
            component={WaterDetail}
            options={{
              headerShown: true,
              headerTitle: 'WaterDetail',
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
            name="Esamsat"
            component={Esamsat}
            options={{
              headerShown: true,
              headerTitle: 'E-Samsat',
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
            name="Lazada"
            component={Lazada}
            options={{
              headerShown: true,
              headerTitle: 'Lazada',
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
            name="PenerimaNegara2"
            component={PenerimaNegara2}
            options={{
              headerShown: true,
              headerTitle: 'Penerima Negara',
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
            name="Gas"
            component={Gas}
            options={{
              headerShown: true,
              headerTitle: 'Gas',
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
            name="Games"
            component={Games}
            options={{
              headerShown: true,
              headerTitle: 'Games',
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
          <Stack.Screen
            name="Bpjs"
            component={Bpjs}
            options={{
              headerShown: true,
              headerTitle: 'Bpjs Kesehatan',
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
            name="MyBills"
            component={MyBills}
            options={{
              headerShown: true,
              headerTitle: 'MyBills',
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
            name="Pln"
            component={Pln}
            options={{
              headerShown: true,
              headerTitle: 'Pln',
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
            name="Tvkabel"
            component={Tvkabel}
            options={{
              headerShown: true,
              headerTitle: 'Internet CableTv',
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
            name="TvkabelDetail"
            component={TvkabelDetail}
            options={{
              headerShown: true,
              headerTitle: 'Internet CableTv',
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
            name="Bca"
            component={Bca}
            options={{
              headerShown: true,
              headerTitle: 'Bca',
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
            name="ARewards"
            component={ARewards}
            options={{
              headerShown: true,
              headerTitle: 'ARewards',
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
            name="MiniGames"
            component={MiniGames}
            options={{
              headerShown: true,
              headerTitle: 'Games',
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
            name="BankServis"
            component={BankServis}
            options={{
              headerShown: true,
              headerTitle: 'Bank Servis',
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
            name="Maintenance"
            component={Maintenance}
            options={{
              headerShown: true,
              headerTitle: 'Maintenance Fees',
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
            name="MaintenanceDetail"
            component={MaintenanceDetail}
            options={{
              headerShown: true,
              headerTitle: 'Maintenance Fees',
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
            name="SendtoBank"
            component={SendtoBank}
            options={{
              headerShown: true,
              headerTitle: 'Send To Bank',
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
            name="Maps"
            component={Maps}
            options={{
              headerShown: true,
              headerTitle: 'Maps',
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
            name="Installment"
            component={Installment}
            options={{
              headerShown: true,
              headerTitle: 'Installment',
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
            name="Money"
            component={Money}
            options={{
              headerShown: true,
              headerTitle: 'Electonic Money',
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
            name="Electricity"
            component={Electricity}
            options={{
              headerShown: true,
              headerTitle: 'Electricity',
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
            name="MoneyDetail"
            component={MoneyDetail}
            options={{
              headerShown: true,
              headerTitle: 'Electonic Money',
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
            name="Education"
            component={Education}
            options={{
              headerShown: true,
              headerTitle: 'Education',
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
            name="Danamon"
            component={Danamon}
            options={{
              headerShown: true,
              headerTitle: 'Danamon',
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
            name="CreditCard"
            component={CreditCard}
            options={{
              headerShown: true,
              headerTitle: 'CreditCard',
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
            name="CreditCardDetail"
            component={CreditCarddDetail}
            options={{
              headerShown: true,
              headerTitle: 'CreditCard',
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
            name="EducationDetail"
            component={EducationDetail}
            options={{
              headerShown: true,
              headerTitle: 'Education Detail',
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
            name="InstallmentDetail"
            component={InstallmentDetail}
            options={{
              headerShown: true,
              headerTitle: 'Installment Detail',
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
            name="Loyalty"
            component={Loyalty}
            options={{
              headerShown: true,
              headerTitle: 'Loyalty',
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
            name="Ecommerce"
            component={Ecommerce}
            options={{
              headerShown: true,
              headerTitle: 'E-commerce',
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
            name="EcommerceDetail"
            component={EcommerceDetail}
            options={{
              headerShown: true,
              headerTitle: 'E-commerce',
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
            name="SendtoGroup"
            component={SendtoGroup}
            options={{
              headerShown: true,
              headerTitle: 'Send To Group',
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
            name="AddNewBank"
            component={AddNewBank}
            options={{
              headerShown: true,
              headerTitle: 'Add Bank',
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
            name="LoyaltyDetail"
            component={LoyaltyDetail}
            options={{
              headerShown: true,
              headerTitle: 'Loyalty Detail',
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
