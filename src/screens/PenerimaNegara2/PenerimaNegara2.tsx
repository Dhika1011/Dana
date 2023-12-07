import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
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
import { Colors } from '@/theme/Variables';
import Button2 from '@/components/Button2';
import Modal from 'react-native-modal';
import { layout } from 'types/theme';

const PenerimaNegara2 = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const DataNegara = props.route.params.item;
  console.log('DataNegara', DataNegara);
  ('use strict');
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
              paddingVertical: responsiveScreenWidth(3),
            },
          ]}
        >
          <TouchableOpacity style={[Layout.row, { margin: 10 }]}>
            <Image
              source={Images.icons.iconTanya}
              style={[
                {
                  width: 25,
                  height: 25,
                  padding: 5,
                  top: 2,
                  alignItems: 'center',
                },
              ]}
            />
            <Gap width={10} />
            <View>
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 13, color: Colors.white, textAlign: 'justify' },
                ]}
              >
                What's a billing code?
              </Text>
              <Gap width={10} />
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 10, color: Colors.white, textAlign: 'justify' },
                ]}
              >
                Learn how to get a billing code here
              </Text>
            </View>
            <Gap width={130} />
            <Image
              source={Images.icons.iconRight}
              style={[
                {
                  width: 15,
                  height: 15,

                  top: 8,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            {
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        >
          <Image
            source={Images.sparkles.Etilang}
            style={[{ width: 208, height: 105, alignSelf: 'center' }]}
          />
        </View>
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
                    { fontSize: 14, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  How to Find Your Customer ID
                </Text>
              </View>
              <Gap height={5} />
              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  Your Customer ID displayed at the gas meter that
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  consists of an area code and PGN
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  customer number.
                </Text>

                <Gap height={7} />
              </View>

              <Image
                source={Images.sparkles.StrukGas}
                style={[
                  {
                    width: 215,
                    height: 121,
                    alignSelf: 'center',
                    borderRadius: 6,
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
        <View style={{ padding: 10 }}>
          <Text
            style={[
              Fonts.textBold,
              { fontSize: 12, color: Colors.textGray200, margin: 10 },
            ]}
          >
            PROVIDER NAME
          </Text>
          <Gap height={10} />
          <View
            style={[
              Layout.row,
              { marginHorizontal: 10, backgroundColor: Colors.white },
            ]}
          >
            <View
              style={{
                justifyContent: 'center',
                padding: 7,
                width: 45,
                height: 45,
                borderWidth: 0.5,
                borderColor: Colors.gray,
                borderRadius: 50 / 2,
              }}
            >
              <Image
                source={DataNegara.images}
                style={{ width: 30, height: 30 }}
              />
            </View>

            <Gap width={10} />
            <View>
              <View style={{ justifyContent: 'center' }}>
                <Text
                  style={[
                    Fonts.textBold,
                    {
                      color: Colors.Black,
                      fontSize: 11,
                      top: responsiveHeight(2),
                    },
                  ]}
                >
                  {DataNegara.judul}
                </Text>
              </View>

              <View
                style={{
                  marginHorizontal: responsiveHeight(20),
                  top: responsiveHeight(-3),
                  margin: 20,
                  marginRight: responsiveHeight(6),
                }}
              >
                <Button2 label="CHANGE" onPress={() => navigation.goBack()} />
              </View>
            </View>
          </View>
          <View
            style={[
              {
                marginHorizontal: 10,
                marginRight: 45,
                top: responsiveHeight(-3),
              },
            ]}
          >
            <View style={{ top: 5 }}>
              <Text
                style={[
                  Fonts.textBold,
                  { fontSize: 12, color: Colors.textGray200 },
                ]}
              >
                KODE BILLING
              </Text>
            </View>
            <Input
              placeholder="Type your biling code here"
              value={Name}
              onChangeText={(val: string) => setName(val)}
            />
            <TouchableOpacity
              onPress={() => setModal(true)}
              style={{
                justifyContent: 'center',
                marginLeft: responsiveScreenWidth(84),
                top: responsiveHeight(-4),
              }}
            >
              <Image
                source={Images.icons.iconInformasion}
                style={[{ width: 25, height: 25 }]}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 10, top: responsiveHeight(-4) }}>
            <Text
              style={[
                Fonts.textRegular,
                { fontSize: 11, color: Colors.textGray200, margin: 10 },
              ]}
            >
              Please enter customer number
            </Text>
          </View>
          <View style={{ marginHorizontal: 20, top: responsiveHeight(-4) }}>
            <Button label="CHECK BILL" />
          </View>

          <View style={styles.garis} />
          <View style={{ top: responsiveHeight(-2) }}>
            <Text
              style={[
                Fonts.textRegular,
                {
                  fontSize: 11,
                  color: Colors.textGray200,
                  textAlign: 'center',
                },
              ]}
            >
              Supported by
            </Text>
          </View>
          <Gap height={10} />
          <View
            style={[Layout.row, Layout.center, { top: responsiveHeight(-2) }]}
          >
            <Image
              source={Images.icons.iconDjp1}
              style={[{ width: 20, height: 20 }]}
            />
            <Gap width={10} />
            <Image
              source={Images.icons.iconDjp2}
              style={[{ width: 20, height: 20 }]}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PenerimaNegara2;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 14,
    textAlign: 'justify',
    margin: 10,
    color: Colors.white,
    backgroundColor: 'transparent',
  },
  garis: {
    borderWidth: 0.8,
    marginVertical: 5,
    borderColor: Colors.gray,
    top: responsiveHeight(-2),
    marginHorizontal: 20,
  },
});
