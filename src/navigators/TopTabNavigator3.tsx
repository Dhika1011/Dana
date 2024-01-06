import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Gap } from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import Input from '@/components/Input';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Modal from 'react-native-modal';
import { DataCompleated } from '@/components/DataCompleated';
import { Colors } from '@/theme/Variables';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function InProgres(params: any) {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState('');
  const [modal, setModal] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        >
          <Image
            source={Images.sparkles.BackgroudElectrick}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
          />
        </View>
        <View>
          <Text
            style={[
              Fonts.textBold,
              {
                color: Colors.Black,
                margin: 20,
                fontSize: 12,
                top: responsiveHeight(2),
              },
            ]}
          >
            Meteran Number/Customer Id
          </Text>

          <View>
            <Modal isVisible={modal}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  height: responsiveHeight(40),
                  borderRadius: 6,
                  backgroundColor: Colors.white,
                }}
              >
                <View>
                  <Text
                    style={[
                      Fonts.textBold,
                      {
                        fontSize: 14,
                        color: Colors.Black,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    How to find out your number
                  </Text>
                </View>
                <Gap height={5} />
                <View>
                  <Text
                    style={[
                      Fonts.textRegular,
                      {
                        fontSize: 12,
                        color: Colors.Black,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    Customer ID is the 11-12 digit number on your electricity
                    meter
                  </Text>
                  <Gap height={3} />
                  <Text
                    style={[
                      Fonts.textRegular,
                      {
                        fontSize: 12,
                        color: Colors.Black,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    hardware. You can also find it on your previous
                  </Text>
                  <Gap height={3} />
                  <Text
                    style={[
                      Fonts.textRegular,
                      {
                        fontSize: 12,
                        color: Colors.Black,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    invoice or purchase receipt.
                  </Text>
                  <Gap height={11} />
                </View>

                <Image
                  source={Images.sparkles.Meteran}
                  style={[
                    {
                      width: 215,
                      height: 121,
                      alignSelf: 'center',
                      borderRadius: 10,
                    },
                  ]}
                />
                <Gap height={10} />
                <View style={{ marginHorizontal: 20 }}>
                  <Button label="Ok" onPress={() => setModal(false)} />
                </View>
              </View>
            </Modal>
          </View>
          <View style={[{ marginHorizontal: 20, marginRight: 60 }]}>
            <Input
              placeholder="Pleasetype your Customer ID"
              value={Number}
              keyboardType="number-pad"
              onChangeText={(val: string) => setNumber(val)}
            />
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={{
                justifyContent: 'center',
                marginLeft: responsiveScreenWidth(83),
                top: responsiveHeight(-4),
              }}
            >
              <Image
                source={Images.icons.iconInformasion2}
                style={[{ width: 25, height: 25 }]}
              />
            </TouchableOpacity>
          </View>
          <Gap height={10} />
        </View>
        <View
          style={{
            paddingLeft: 15,
            paddingRight: 15,
            borderRadius: 5,
            backgroundColor: '#F6FDC3',
            borderWidth: 1,
            borderColor: '#F1A900',
            marginHorizontal: 20,
            height: responsiveHeight(9),
            top: responsiveHeight(-2),
          }}
        >
          <View style={{ margin: 5, flexDirection: 'row' }}>
            <Text
              style={[Fonts.textBold, { fontSize: 13, color: Colors.Black }]}
            >
              Information
            </Text>
            <Gap width={7} />
            <Image
              source={Images.icons.iconInformasion}
              style={{ width: 15, height: 15 }}
            />
          </View>
          <View>
            <Text
              style={[
                Fonts.textBold,
                { fontSize: 12, color: Colors.textGray200, margin: 3 },
              ]}
            >
              Transactions between 24.00- 01.00 will be not
            </Text>
            <View>
              <Text
                style={[
                  Fonts.textBold,
                  { fontSize: 12, color: Colors.textGray200, margin: 3 },
                ]}
              >
                be processed due to the system maintenance.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
function Completed(params: any) {
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          data={DataCompleated}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 15,
            borderRadius: 10,

            backgroundColor: Colors.white,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              onPress={() => navigation.navigate('ViewAll', { item: item })}
            >
              <View style={[Layout.row]}>
                <View
                  style={{
                    borderColor: Colors.gray,
                    borderWidth: 1,
                    justifyContent: 'center',
                    padding: 7,
                    width: 55,
                    height: 55,
                    borderRadius: 6,
                  }}
                >
                  <Image
                    source={item.images}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <Gap width={10} />
                <View>
                  <Text
                    style={[
                      Fonts.textRegular,
                      { color: Colors.Black, fontSize: 17 },
                    ]}
                  >
                    {item.Name}
                  </Text>
                  <Gap height={15} />
                  <Text
                    style={[
                      Fonts.textSmall,
                      { color: Colors.Black, fontSize: 12 },
                    ]}
                  >
                    {item.Tanggal}
                  </Text>
                </View>
                <Gap width={31} />
                <View
                  style={{
                    top: responsiveHeight(-2),
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    alignSelf: 'flex-end',
                  }}
                >
                  <Text
                    style={[
                      Fonts.textBold,
                      {
                        color: Colors.Black,
                        fontSize: 15,
                      },
                    ]}
                  >
                    {item.harga}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  marginVertical: 5,
                  top: 20,
                  borderColor: Colors.gray,
                }}
              />
            </TouchableOpacity>
          )}
        />
        <Gap height={20} />
      </ScrollView>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  tabBarInactiveTintColor: Colors.white,
  tabBarStyle: { backgroundColor: Colors.primary, height: 50 },
};

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="History"
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: Colors.white }}
    >
      <Tab.Screen name="InProgres" component={InProgres} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
}
export function TopTabNavigator() {
  return <MyTabs />;
}
