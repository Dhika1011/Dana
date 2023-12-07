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
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Input from '@/components/Input';
import { useState } from 'react';
import { Button, Gap } from '@/components';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Modal from 'react-native-modal';

const Telkom = () => {
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
          <Image
            source={Images.sparkles.BackgroundTelkom}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
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
                  Cara Mengetahui Nomer
                </Text>
              </View>
              <Gap height={5} />
              <View>
                <Text
                  style={[
                    Fonts.textBold,
                    { fontSize: 14, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  Telepon atau Indihome
                </Text>
                <Gap height={6} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  Silahkan menghubungi pusat bantuan Telkom
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  ke 147 lalu sebutkan alamat rumah anda
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  atau dengan melihat kuitansi pembayaran
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  bulan sebelumnya.
                </Text>

                <Gap height={7} />
              </View>

              <Image
                source={Images.sparkles.Strukindighome}
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
            CUSTOMER ID
          </Text>
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
          <View style={{ padding: 10 }}>
            <Text
              style={[
                Fonts.textRegular,
                { fontSize: 11, color: Colors.textGray200, margin: 10 },
              ]}
            >
              Please enter customer number
            </Text>
          </View>
          <Gap height={10} />
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
          <Gap height={20} />
          <View style={{ marginHorizontal: 20 }}>
            <Button label="CHECK BILL" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Telkom;

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
  },
  text: { margin: 5, flexDirection: 'row' },
});
