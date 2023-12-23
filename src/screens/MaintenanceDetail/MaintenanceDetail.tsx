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
import { Colors } from '@/theme/Variables';
const MaintenanceDetail = (props: any) => {
  const Maintenance = props.route.params.item;
  console.log('Maintenance', Maintenance);
  ('use strict');
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
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
  const [value, onChangeText] = React.useState('Rp.0');

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
            source={Images.sparkles.mainten}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
          />
        </View>
        <View
          style={{
            marginHorizontal: 20,
            padding: 10,
          }}
        >
          <Text style={[Fonts.textBold, { fontSize: 13, color: Colors.Black }]}>
            PROVIDER NAME
          </Text>
          <Gap height={10} />
        </View>
        <View
          style={[
            Layout.row,
            { marginHorizontal: 10, backgroundColor: Colors.white },
          ]}
        >
          <Image
            source={{ uri: Maintenance.images }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 40 / 2,
              borderWidth: 0.7,
              borderColor: Colors.gray,
            }}
          />
          <Gap width={10} />
          <View>
            <Text
              style={[
                Fonts.textBold,
                { color: Colors.Black, fontSize: 13, top: responsiveHeight(1) },
              ]}
            >
              {Maintenance.judul}
            </Text>
            <View
              style={{
                marginHorizontal: responsiveHeight(24),
                top: responsiveHeight(-4),
                margin: 20,
                marginRight: responsiveHeight(6),
              }}
            >
              <Button2 label="CHANGE" onPress={() => navigation.goBack()} />
            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 20, top: responsiveHeight(-2) }}>
          <Text style={[Fonts.textBold, { fontSize: 13, color: Colors.Black }]}>
            Virtual Account Number
          </Text>
          <Gap height={5} />
          <View>
            <Modal isVisible={modal}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  height: responsiveHeight(33),
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
                    Information
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
                    You can get your unit's virtual account number by
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
                    contacting your building management accordingly.
                  </Text>
                  <Gap height={6} />
                </View>

                <Image
                  source={Images.sparkles.StrukBangunan}
                  style={[
                    {
                      width: 146,
                      height: 126,
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
              placeholder="Type your VA number here"
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
          <View>
            <Text>PayMent Amount</Text>
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
                style={{ padding: 10 }}
              />
            </View>
          </View>
          <Gap height={40} />
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
              Your transaction status through DANA will be confirmed in
            </Text>
            <View>
              <Text
                style={[
                  Fonts.textBold,
                  { fontSize: 12, color: Colors.textGray200, margin: 3 },
                ]}
              >
                real time, or no later than 5 (five) working days.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MaintenanceDetail;

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
  input: {
    height: 40,
    margin: 12,

    padding: 10,
  },
});
