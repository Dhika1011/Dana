import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/theme/Variables';
import Input from '@/components/Input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Gap } from '@/components';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useTheme } from '@/hooks';

const SendtoGroup = () => {
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState('');
  const [number, onChangeNumber] = React.useState('');
  const [value, onChangeText] = React.useState('Rp.0');
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
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.Background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              paddingTop: responsiveHeight(8),
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        ></View>
        <View style={styles.Card}>
          <View style={[Layout.row]}>
            <View>
              <Image
                source={Images.icons.iconSendChat}
                style={{ width: 45, height: 45 }}
              />
            </View>
            <Gap width={10} />
            <View>
              <Text style={[Fonts.textRegular, { fontSize: 14 }]}>
                Send to Chat
              </Text>
              <Gap height={5} />
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 17, color: Colors.Black },
                ]}
              >
                Share to Chat or Social Media
              </Text>
            </View>
            <Gap width={10} />
          </View>
          <View
            style={{
              borderWidth: 0.5,
              marginVertical: 5,
              top: 20,
              borderColor: Colors.gray,
            }}
          />
          <Gap height={40} />
          <View>
            <Text
              style={[
                Fonts.textBold,
                {
                  color: Colors.Black,
                  fontSize: 14,
                },
              ]}
            >
              Send Amount
            </Text>
            <Gap height={10} />
            <View
              style={{
                backgroundColor: value,
                borderBottomColor: Colors.textGray400,
                borderBottomWidth: 0.5,
                borderColor: Colors.gray,
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
          <View>
            <Input
              value={Number}
              keyboardType="number-pad"
              onChangeText={(val: string) => setNumber(val)}
            />
          </View>
        </View>
        <Gap height={10} />
        <View style={styles.Card2}>
          <View style={[Layout.row]}>
            <View>
              <Image
                source={Images.icons.iconClock2}
                style={{ width: 36, height: 36 }}
              />
            </View>
            <Gap width={10} />

            <View>
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 12, color: Colors.textGray400 },
                ]}
              >
                Expliry Time
              </Text>
              <Gap height={5} />
              <Text
                style={[Fonts.textBold, { fontSize: 14, color: Colors.Black }]}
              >
                24 Hours
              </Text>
            </View>
            <Gap width={120} />
            <TouchableOpacity style={[Layout.alignItemsEnd]}>
              <Text
                style={[
                  Fonts.textBold,
                  {
                    fontSize: 15,
                    color: Colors.primary,
                  },
                ]}
              >
                Change
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SendtoGroup;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('35%'),
    // marginTop: responsiveHeight(-6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: responsiveHeight(-4),
  },
  Card2: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('10%'),
    // marginTop: responsiveHeight(-6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: responsiveHeight(-4),
  },
});
