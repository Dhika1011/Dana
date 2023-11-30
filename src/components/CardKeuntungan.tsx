import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Gap from './Gap';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { DataBisnis } from './Data/DataBisnis';
import Button from './Button';
import { Colors } from '@/theme/Variables';

const CardKeuntungan = () => {
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
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  return (
    <View style={{ flex: 1, height: hp('100%'), width: wp('80%') }}>
      <Text style={[Fonts.textBold, { fontSize: 18 }]}>
        Nikmati keuntungannya!
      </Text>
      <Gap height={20} />
      <FlatList
        data={DataBisnis}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.page1}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginBottom: 15 }}>
            <View style={[Layout.row]}>
              <Image source={item.images} style={{ width: 69, height: 69 }} />
              <Gap width={10} />
              <View style={{ marginTop: 3 }}>
                <Text
                  style={[
                    Fonts.textBold,
                    { color: Colors.Black, fontSize: 15 },
                  ]}
                >
                  {item.judul}
                  <Gap width={10} />
                </Text>
                <Gap height={4} />
                <Text
                  style={[
                    Fonts.textSmall,
                    { color: Colors.Black, fontSize: 13 },
                  ]}
                >
                  {item.desc}
                  <Gap width={10} />
                </Text>
                <View>
                  <Text
                    style={[
                      Fonts.textSmall,
                      { color: Colors.Black, fontSize: 13 },
                    ]}
                  >
                    {item.desc1}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{ marginHorizontal: 50 }}>
        <Button label="DAFTAR SEKARANG" />
      </View>
    </View>
  );
};

export default CardKeuntungan;

const styles = StyleSheet.create({
  page1: {
    borderRadius: 10,
  },
  card: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
    marginHorizontal: -20,
  },
});
