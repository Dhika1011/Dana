import { View, Text, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Gap from './Gap';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Datanih } from './Data/Datanih';

const CardBisnis = () => {
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
      <View>
        <Text style={[Fonts.textBold, { fontSize: 14 }]}>{Datanih.nama}</Text>
      </View>
      <Gap height={30} />
      <Image
        source={Images.sparkles.Backgroundkoin}
        style={{ width: 180, height: 100, alignSelf: 'center' }}
      />
      <Gap height={30} />
      <View
        style={[
          Layout.row,
          { marginHorizontal: -5, justifyContent: 'space-between' },
        ]}
      >
        <View>
          <Image
            source={Datanih.Icon1}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
          <Gap height={6} />
          <View>
            <Text
              style={[Fonts.textRegular, { fontSize: 12, textAlign: 'center' }]}
            >
              {Datanih.desc}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={Datanih.Icon2}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
          <Gap height={6} />
          <View>
            <Text
              style={[Fonts.textRegular, { fontSize: 12, textAlign: 'center' }]}
            >
              {Datanih.desc2}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={Datanih.Icon3}
            style={{ width: 30, height: 30, alignSelf: 'center' }}
          />
          <Gap height={6} />
          <View>
            <Text
              style={[Fonts.textRegular, { fontSize: 12, textAlign: 'center' }]}
            >
              {Datanih.desc3}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardBisnis;
