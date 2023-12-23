import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  TextInput,
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

const CreaditCardDetail = (props: any) => {
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
  const [Number, setNumber] = useState('');
  const [modal, setModal] = useState(false);
  const [value, onChangeText] = React.useState('Rp.50.000');
  const CreaditCard = props.route.params.item;
  console.log('CreaditCard', CreaditCard);
  ('use strict');
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
            Layout.row,
            {
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveScreenWidth(3),
            },
          ]}
        >
          <Image
            source={{ uri: CreaditCard.images }}
            style={[
              {
                width: 45,
                height: 45,
                alignSelf: 'flex-start',
                borderRadius: 45 / 2,
              },
            ]}
          />
          <Gap width={15} />
          <Text
            style={[
              Fonts.textBold,
              {
                fontSize: 14,
                color: Colors.white,
                top: responsiveHeight(2),
              },
            ]}
          >
            {CreaditCard.judul}
          </Text>
        </View>

        <View
          style={[
            Layout.row,
            { marginHorizontal: 20, backgroundColor: Colors.white },
          ]}
        ></View>
        <View style={{ marginHorizontal: 20, top: responsiveHeight(2) }}>
          <Text
            style={[
              Fonts.textBold,
              {
                fontSize: 12,
                color: Colors.Black,
              },
            ]}
          >
            Credit Card Number
          </Text>
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
                    Informasion
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
                    The minimum payment is Rp50.000 Payment verification process
                    takes 1 working day.
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
                    - Make sure to pay the credit card billing before the due
                    date.
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
                  source={Images.sparkles.backgroundcreadit}
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
              placeholder="Example 123456789"
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
          <View style={{ top: responsiveHeight(-4), marginHorizontal: 20 }}>
            <Text
              style={[
                Fonts.textBold,
                {
                  fontSize: 12,
                  color: Colors.white,
                },
              ]}
            >
              PayMent Amount
            </Text>
            <Gap height={5} />
            <View
              style={{
                backgroundColor: value,
                borderBottomColor: Colors.textGray200,
                borderBottomWidth: 0.5,
              }}
            >
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                value={value}
                style={{ padding: 10, color: Colors.textGray200 }}
              />
            </View>
          </View>
          <Gap height={20} />
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
              * The minimum payment is Rp50.000.
            </Text>
            <View>
              <Text
                style={[
                  Fonts.textBold,
                  { fontSize: 12, color: Colors.textGray200, margin: 3 },
                ]}
              >
                * Payment verification process takes 1 working day.
              </Text>
            </View>
            <View>
              <Text
                style={[
                  Fonts.textBold,
                  { fontSize: 12, color: Colors.textGray200, margin: 3 },
                ]}
              >
                * Make sure to paythe credit card billing before the due date.
              </Text>
            </View>
          </View>
        </View>
        <Gap height={10} />
        <View style={{ marginHorizontal: 20, top: responsiveHeight(-1) }}>
          <Button label="CHECK BILL" />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreaditCardDetail;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#F6FDC3',
    borderWidth: 1,
    borderColor: '#F1A900',
    marginHorizontal: 20,
    height: responsiveHeight(13),
    top: responsiveHeight(-2),
  },
  text: { margin: 5, flexDirection: 'row' },
});
