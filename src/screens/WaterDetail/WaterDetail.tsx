import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Button2 from '@/components/Button2';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { Button, Gap } from '@/components';
import Input from '@/components/Input';
import Modal from 'react-native-modal';

const WaterDetail = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const Water = props.route.params.item;
  console.log('Water', Water);
  ('use strict');
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [Name, setName] = useState('');
  const [modal, setModal] = useState(false);
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
          <View
            style={[
              Layout.justifyContentBetween,
              Layout.justifyContentBetween,
              Layout.row,
            ]}
          >
            <Image
              source={Images.sparkles.BackgroundWatter}
              style={[{ width: 45, height: 50 }]}
            />
            <Image
              source={Images.sparkles.BackgroundWatter3}
              style={[{ width: 45, height: 45 }]}
            />
            <Image
              source={Images.sparkles.BackgroundWatter2}
              style={[{ width: 45, height: 45 }]}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 20,
            padding: 10,
          }}
        >
          <Text>PROVIDER</Text>
          <Gap height={10} />
        </View>
        <View
          style={[
            Layout.row,
            { marginHorizontal: 10, backgroundColor: Colors.white },
          ]}
        >
          <Image
            source={Water.images}
            style={{ width: 40, height: 40, borderRadius: 40 / 40 }}
          />
          <Gap width={10} />
          <View>
            <Text
              style={[Fonts.textBold, { color: Colors.Black, fontSize: 13 }]}
            >
              {Water.judul}
            </Text>
            <View>
              <Text
                style={[
                  Fonts.textRegular,
                  { color: Colors.Black, fontSize: 12 },
                ]}
              >
                {Water.desc}
              </Text>
            </View>
            <View
              style={{
                marginHorizontal: responsiveHeight(24),
                top: responsiveHeight(-6),
                margin: 20,
                marginRight: responsiveHeight(6),
              }}
            >
              <Button2 label="CHANGE" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, top: responsiveHeight(-2) }}>
          <Text>CUSTOMER NUMBER</Text>
          <Gap height={5} />
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
                    Your PDAM number is located at the front
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
                    of your Water meter. If it's hard to find, you
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
                    can see the payment receipt in the previous month.
                  </Text>
                  <Gap height={11} />
                </View>

                <Image
                  source={Images.sparkles.StrukAir}
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
          <View style={[{ marginHorizontal: 10, marginRight: 45 }]}>
            <Input
              placeholder="Pleasetype your Customer ID"
              value={Name}
              onChangeText={(val: string) => setName(val)}
            />
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={{
                justifyContent: 'center',
                marginLeft: responsiveScreenWidth(78),
                top: responsiveHeight(-4),
              }}
            >
              <Image
                source={Images.icons.iconInformasion2}
                style={[{ width: 25, height: 25 }]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WaterDetail;

const styles = StyleSheet.create({});
