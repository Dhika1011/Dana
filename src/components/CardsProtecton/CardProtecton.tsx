import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button from '../Button';
import Gap from '../Gap';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { DataProtection } from '../DataProtection';
import Button2 from '../Button2';

const CardProtecton = () => {
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
  return (
    <View style={{ flex: 1, height: hp('70%'), width: wp('80%') }}>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: -10,
          top: responsiveHeight(-2),
        }}
      >
        <Image
          source={DataProtection.Icon1}
          style={{ width: 30, height: 30 }}
        />
        <Gap width={3} />
        <Text style={[Fonts.textBold, { top: responsiveHeight(1) }]}>
          {DataProtection.nama}
        </Text>
        <Gap width={20} />
        <View
          style={{
            marginHorizontal: responsiveHeight(22),
            marginTop: -3,
            marginLeft: responsiveScreenWidth(-1),
          }}
        >
          <Button2 label="Learn More" />
        </View>
        <Gap height={10} />
      </View>
      <View
        style={[
          Layout.row,
          { marginHorizontal: 40, justifyContent: 'space-between' },
        ]}
      >
        <View>
          <Image
            source={DataProtection.Icon2}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
          <Gap height={6} />
          <View>
            <Text
              style={[Fonts.textRegular, { fontSize: 12, textAlign: 'center' }]}
            >
              {DataProtection.desc}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={DataProtection.Icon3}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
          <Gap height={6} />
          <View>
            <Text style={[Fonts.textRegular, { fontSize: 12 }]}>
              {DataProtection.desc2}
            </Text>
          </View>
        </View>
      </View>
      <Gap height={20} />
      <View>
        <Text style={[Fonts.textBold, { fontSize: 12 }]}>
          {DataProtection.desc3}
        </Text>
      </View>
    </View>
  );
};

export default CardProtecton;

const styles = StyleSheet.create({});
