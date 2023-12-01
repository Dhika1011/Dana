import { Gap } from '@/components';
import CardBisnis from '@/components/CardBisnis';
import CardKeuntungan from '@/components/CardKeuntungan';
import CardMenu2 from '@/components/CardMenu2';
import CardProfile from '@/components/CardProfile';
import { DataCompleated } from '@/components/DataCompleated';
import { useTheme } from '@/hooks';
import { changeHomeModal } from '@/store/homeModal';
import { Fonts } from '@/theme';
import { Colors } from '@/theme/Variables';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

function Personal(params: any) {
  const dispatch = useDispatch();
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          height: 120,
          width: '100%',
          backgroundColor: Colors.primary,
        }}
      ></View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              paddingTop: responsiveHeight(10),
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        >
          <View style={{ top: responsiveHeight(-9) }}>
            <View style={[Layout.row, { marginHorizontal: 20 }]}>
              <Image
                source={Images.icons.Profile}
                style={{ width: 70, height: 70 }}
              />
              <Gap width={12} />
              <View>
                <Text
                  style={[
                    Fonts.textBold,
                    { color: Colors.white, fontSize: 16 },
                  ]}
                >
                  Dhika Sapto Yudha
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textBold,
                    { color: Colors.white, fontSize: 14 },
                  ]}
                >
                  087885139225
                </Text>
                <Gap height={10} />
                <TouchableOpacity
                  onPress={() =>
                    dispatch(changeHomeModal({ isVisibleModal: true }))
                  }
                  style={[
                    Layout.row,
                    {
                      borderWidth: 1,
                      borderRadius: 8,
                      padding: 6,
                      borderColor: Colors.white,
                    },
                  ]}
                >
                  <Image
                    source={Images.icons.iconqr}
                    style={{ width: 15.83, height: 15.84 }}
                  />
                  <Gap width={6} />
                  <Text
                    style={[
                      Fonts.textBold,
                      { color: Colors.white, fontSize: 14 },
                    ]}
                  >
                    TAMPILKAN QR
                  </Text>
                  <Gap width={6} />
                  <Image
                    source={Images.icons.iconRight}
                    style={{ width: 6.67, height: 14.44 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            marginHorizontal: 15,
            padding: 30,
            borderRadius: 10,
            height: responsiveScreenHeight(37),
            // marginTop: responsiveHeight(-6),
            shadowColor: '#000',
            top: responsiveHeight(-7),
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <CardProfile />
        </View>
      </ScrollView>
    </View>
  );
}
function Bisnis(params: any) {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          height: 120,
          width: '100%',
          backgroundColor: Colors.primary,
        }}
      ></View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              paddingTop: responsiveHeight(10),
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        >
          <View style={{ top: responsiveHeight(-9) }}>
            <View style={[Layout.row, { marginHorizontal: 20 }]}>
              <Image
                source={Images.icons.Home}
                style={{ width: 90, height: 90 }}
              />
              <View style={[Layout.row, { marginLeft: responsiveWidth(-14) }]}>
                <Image
                  source={Images.icons.icon12}
                  style={{ width: 90, height: 80 }}
                />
              </View>
              <Gap width={1} />
              <View>
                <Text
                  style={[
                    Fonts.textBold,
                    { color: Colors.white, fontSize: 16 },
                  ]}
                >
                  Daftar DANA Bisnis yuk!
                </Text>
                <Gap height={5} />
                <Text
                  style={[
                    Fonts.textSmall,
                    { color: Colors.white, fontSize: 12 },
                  ]}
                >
                  Atau bisnis lebih praktis dengan
                </Text>
                <Gap height={5} />
                <Text
                  style={[
                    Fonts.textSmall,
                    { color: Colors.white, fontSize: 12 },
                  ]}
                >
                  beragama layanan digital
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.white,
            marginHorizontal: 15,
            padding: 30,
            borderRadius: 10,
            height: responsiveScreenHeight(47),
            // marginTop: responsiveHeight(-6),
            shadowColor: '#000',
            top: responsiveHeight(-9),
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <CardKeuntungan />
        </View>
        <Gap height={10} />
        <View
          style={{
            backgroundColor: Colors.white,
            marginHorizontal: 15,
            padding: 30,
            borderRadius: 10,
            height: responsiveScreenHeight(35),
            // marginTop: responsiveHeight(-6),
            shadowColor: '#000',
            top: responsiveHeight(-9),
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <CardBisnis />
        </View>
      </ScrollView>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  tabBarInactiveTintColor: Colors.white,
  tabBarStyle: {
    backgroundColor: Colors.primary,
    height: 60,
    justifyContent: 'center',
  },
};

function MyTabs2() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBarOptions={{
        backgroundColor: Colors.primary,
        activeTintColor: Colors.white,
        labelStyle: {
          textTransform: 'uppercase',
          fontSize: 9,
        },
        inactiveTintColor: Colors.white,
        indicatorStyle: {
          height: null,
          top: '3%',
          bottom: '3%',
          width: '45%',
          left: '2.5%',
          borderRadius: 50,
          backgroundColor: Colors.primary,
        },

        style: {
          alignSelf: 'center',
          width: '40%',
          position: 'absolute',
          top: 55,

          borderColor: '#000',
          borderRadius: 50,
          // borderColor: Colors.primary,
          backgroundColor: '#0766AD',
          elevation: 5, // shadow on Android
          shadowOpacity: 0.1, // shadow on iOS,
          shadowRadius: 4, // shadow blur on iOS
        },

        tabStyle: {
          borderRadius: 100,
        },
      }}
    >
      <Tab.Screen name="Personal" component={Personal} />
      <Tab.Screen name="Bisnis" component={Bisnis} />
    </Tab.Navigator>
  );
}
export function TopTabNavigator2() {
  return <MyTabs2 />;
}
