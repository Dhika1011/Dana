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
import { Colors } from '@/theme/Variables';
import LinearGradient from 'react-native-linear-gradient';
const TvkabelDetail = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();
  const Tvkabel = props.route.params.item;
  console.log('Tvkabel', Tvkabel);
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
            source={Images.sparkles.BackgroudTVKABEL}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
          />
        </View>
        <LinearGradient
          colors={['#B6BBC4', '#F3EEEA', '#ffffff']}
          style={styles.linearGradient2}
        >
          <Text
            style={[
              styles.buttonText,
              Fonts.textRegular,
              { color: Colors.Black, fontSize: 11 },
            ]}
          >
            You can update your electronic money
          </Text>
          <Text
            style={[
              Fonts.textRegular,
              {
                margin: 10,
                top: responsiveHeight(-2),
                color: Colors.Black,
                fontSize: 11,
              },
            ]}
          >
            balance here!
          </Text>
          <View
            style={{
              marginHorizontal: responsiveHeight(30),
              top: responsiveHeight(-7),
              marginRight: 3,
            }}
          >
            <Button label="Update Balance" />
          </View>
        </LinearGradient>
        <View
          style={{
            marginHorizontal: 20,
            padding: 10,
          }}
        >
          <Text
            style={[
              Fonts.textRegular,
              {
                margin: 10,
                top: responsiveHeight(-2),
                color: Colors.Black,
                fontSize: 13,
              },
            ]}
          >
            PROVIDER NAME
          </Text>
          <Gap height={10} />
        </View>
        <View
          style={[
            Layout.row,
            { marginHorizontal: 20, backgroundColor: Colors.white },
          ]}
        >
          <Image
            source={Tvkabel.images}
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
                {Tvkabel.judul}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                marginHorizontal: responsiveHeight(32),
                top: responsiveHeight(-4),
                margin: 20,
                marginRight: responsiveHeight(7),
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                source={Images.icons.iconRight2}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, top: responsiveHeight(-2) }}>
          <Text>CARD NUMBER</Text>
          <Gap height={5} />
          <View>
            <Modal isVisible={modal}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  height: responsiveHeight(38),
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
                    INFORMASION
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
                    our customer number can be acquired from your personal
                    monthly
                  </Text>
                </View>
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
                    billing or by calling your ISP customer service.
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
                    Format : [89450] + [11 digits number]
                  </Text>
                </View>

                <Gap height={10} />
                <Image
                  source={Images.sparkles.STRUKTV}
                  style={[
                    {
                      width: 215,
                      height: 121,
                      alignSelf: 'center',
                      borderRadius: 10,
                    },
                  ]}
                />
                <Gap height={20} />
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
                source={Images.icons.iconInformasion}
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
              Your transaction status through DANA will be confirmed in real
              time
            </Text>
            <View>
              <Text
                style={[
                  Fonts.textBold,
                  { fontSize: 12, color: Colors.textGray200, margin: 3 },
                ]}
              >
                or no later than 5 (five) working days.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TvkabelDetail;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: '#F6FDC3',
    borderWidth: 1,
    borderColor: '#F1A900',
    marginHorizontal: 20,
    height: responsiveHeight(11),
    top: responsiveHeight(-2),
  },
  text: { margin: 5, flexDirection: 'row' },
  linearGradient2: {
    paddingLeft: 15,
    paddingRight: 15,

    height: responsiveHeight(9),
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'justify',
    margin: 10,
    color: Colors.white,
    backgroundColor: 'transparent',
  },
});
