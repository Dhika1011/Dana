import React from 'react';
import { History, Home, Modal, Profile, Scan, Wallet } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Colors } from '@/theme/Variables';
import { useTheme } from '@/hooks';
import { TopTabNavigator } from './TopTabNavigator';
import { TopTabNavigator2 } from './TopTabNavigator2';
import Modal12 from '@/components/Modal12';
import { Button } from '@/components';
import Buttons from '@/theme/components/Buttons';
const Tab = createBottomTabNavigator();

// @refresh reset
// Home, MyVoucher, Transaction, Report, Account
// @refresh reset
const MainNavigator = () => {
  const { Layout, Gutters, Fonts, Colors } = useTheme();
  const screenOptions = {
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: '#DDD',
    tabBarShowLabel: false,
    tabBarStyle: styles.tabBarStyle,
    lazy: true,
  };
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: '#F2F2F2' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/HomeOn.png')
                    : require('../theme/assets/images/HomeOff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textBold, { fontSize: 10, color: Colors.Black }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={TopTabNavigator}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/Historryon.png')
                    : require('../theme/assets/images/Historryoff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textBold, { fontSize: 10, color: Colors.Black }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                History
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Modal12}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                shadowColor: Colors.primary,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: Colors.primary,
                  borderRadius: 60,
                  marginTop: -40,
                  elevation: 5,
                }}
              >
                <Image
                  source={require('../theme/assets/images/Scan12.png')}
                  style={{
                    width: 25,
                    height: 25,
                    alignSelf: 'center',
                    marginTop: 8,
                  }}
                />
                <Text
                  style={[
                    Fonts.textBold,
                    { color: Colors.white, alignSelf: 'center' },
                  ]}
                >
                  Pay
                </Text>
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/walletOnpng.png')
                    : require('../theme/assets/images/walletoff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textBold, { fontSize: 10, color: Colors.Black }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Wallet
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={TopTabNavigator2}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          // headerStyle: {
          //   backgroundColor: Colors.primary,
          // },
          // tabBarItemStyle: {
          //   borderWidth: 1,
          //   borderColor: '#000',
          // },
          // headerTintColor: Colors.primary,

          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                Layout.center,
                Layout.fill,
                { paddingVertical: 1, height: 40 },
              ]}
            >
              <Image
                source={
                  focused
                    ? require('../theme/assets/images/Profileon.png')
                    : require('../theme/assets/images/ProfileOff.png')
                }
                style={{ width: 24, height: 24, marginTop: -9 }}
              />
              <Text
                style={
                  focused
                    ? [Fonts.textBold, { fontSize: 10, color: Colors.Black }]
                    : [Fonts.textRegular, { fontSize: 10, color: Colors.Black }]
                }
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.white,
    height: 80,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    backfaceVisibility: 'hidden',
    marginTop: -30,
    borderTopWidth: 0,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
  },
});
