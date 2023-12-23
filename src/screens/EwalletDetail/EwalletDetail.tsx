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

const EwalletDetail = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const Ewallet = props.route.params.item;
  console.log('Ewallet', Ewallet);
  ('use strict');
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [Number, setNumber] = useState('');
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
          <Image
            source={Images.sparkles.BackgroudSendMoney}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
          />
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
            { marginHorizontal: 20, backgroundColor: Colors.white },
          ]}
        >
          <Image
            source={Ewallet.images}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 40,
              top: responsiveHeight(-1),
            }}
          />
          <Gap width={10} />
          <View>
            <View>
              <Text
                style={[Fonts.textBold, { color: Colors.Black, fontSize: 13 }]}
              >
                {Ewallet.judul}
              </Text>
            </View>

            <View
              style={{
                marginHorizontal: responsiveHeight(15),
                top: responsiveHeight(-5),
                margin: 20,
                marginRight: responsiveHeight(5),
              }}
            >
              <Button2 label="CHANGE" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, top: responsiveHeight(-2) }}>
          <Text>PHONE NUMBER</Text>
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
              value={Number}
              keyboardType="number-pad"
              onChangeText={(val: string) => setNumber(val)}
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
          <Gap height={10} />
        </View>
        <View style={styles.linearGradient}>
          <View style={styles.text}>
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
};

export default EwalletDetail;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#F6FDC3',
    borderWidth: 1,
    borderColor: '#F1A900',
    marginHorizontal: 20,
    height: responsiveHeight(9),
    top: responsiveHeight(-2),
  },
  text: { margin: 5, flexDirection: 'row' },
});