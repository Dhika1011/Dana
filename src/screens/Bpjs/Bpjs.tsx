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
import Button2 from '@/components/Button2';
import RadioButton from '@/components/RadioButton';
import Input from '@/components/Input';
import { useState } from 'react';
import { Button, Gap } from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '@/theme/Variables';
import Modal from 'react-native-modal';

const Bpjs = () => {
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
            source={Images.sparkles.BackgroundBPJS}
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
                  How to find out the BPJS number
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
                  Your BPJS number is located on the
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  front of your BPJS card. If your card is
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  lost, please open the bpjs-kesehatan.go.id
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  site, then enter the BPJS number of one
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  of your family members registered on
                </Text>
                <Gap height={3} />
                <Text
                  style={[
                    Fonts.textRegular,
                    { fontSize: 12, color: Colors.Black, textAlign: 'center' },
                  ]}
                >
                  the same Family Card.
                </Text>
                <Gap height={7} />
              </View>

              <Image
                source={Images.sparkles.BackgroundBpjs}
                style={[{ width: 215, height: 121, alignSelf: 'center' }]}
              />
              <Gap height={10} />
              <View style={{ marginHorizontal: 20 }}>
                <Button label="Ok" onPress={() => setModal(false)} />
              </View>
            </View>
          </Modal>
        </View>
        <View style={{ padding: 10, flex: 1 }}>
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
          </View>

          <TouchableOpacity
            onPress={() => setModal(true)}
            style={{
              justifyContent: 'center',
              marginLeft: responsiveScreenWidth(86),
              top: responsiveHeight(-4),
            }}
          >
            <Image
              source={Images.icons.iconInformasion2}
              style={[{ width: 25, height: 25 }]}
            />
          </TouchableOpacity>

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
          <LinearGradient
            colors={['#4c669f', '#4176FF', '#108EE9']}
            style={styles.linearGradient}
          >
            <Text style={[styles.buttonText, Fonts.textBold]}>
              Manage monthly bills easily
            </Text>
            <Text
              style={[
                Fonts.textBold,
                {
                  margin: 10,
                  top: responsiveHeight(-2),
                  color: Colors.white,
                  fontSize: 14,
                },
              ]}
            >
              with Subscriptions!
            </Text>
            <View
              style={{
                marginHorizontal: responsiveHeight(25),
                top: responsiveHeight(-7),
                marginRight: -10,
              }}
            >
              <Button2 label="Subscribe" />
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bpjs;

const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,

    height: responsiveHeight(9),
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'justify',
    margin: 10,
    color: Colors.white,
    backgroundColor: 'transparent',
  },
});
