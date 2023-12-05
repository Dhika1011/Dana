import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Button from '../Button';
import Gap from '../Gap';
import { Data3 } from '../Data3';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Button2 from '../Button2';

const Cardlist2 = () => {
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
        <Text style={[Fonts.textBold]}>{Data3.nama}</Text>
        <Gap width={20} />
        <View style={{ marginHorizontal: responsiveHeight(12), marginTop: -3 }}>
          <Button2 label="Promo" />
        </View>
      </View>
      <View style={{ top: responsiveHeight(-4), marginLeft: -10 }}>
        <Text
          style={[
            Fonts.textRegular,
            { fontSize: 11, color: Colors.circleButtonColor },
          ]}
        >
          {Data3.desc}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          alignSelf: 'center',
          top: responsiveHeight(-2),
          marginLeft: responsiveScreenWidth(-3),
        }}
      >
        <Image
          resizeMode="cover"
          source={Images.sparkles.frame}
          style={{
            width: responsiveScreenWidth(90),
            height: 100,
            borderRadius: 9,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Cardlist2;

const styles = StyleSheet.create({});
