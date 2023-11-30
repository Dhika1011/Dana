import {
  StyleSheet,
  Text,
  View,
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
import { DataProfile } from './Data/DataProfile';
import { Colors } from '@/theme/Variables';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CardProfile = (props: any) => {
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
    <View style={{ flex: 1, height: hp('100%'), width: wp('80%') }}>
      <View style={styles.card}>
        <FlatList
          data={DataProfile}
          numColumns={2} // Mengatur jumlah kolom menjadi 2
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() => navigation.navigate(item.Halaman)}
            >
              <View>
                <Image source={item.images} style={{ width: 40, height: 40 }} />
              </View>
              <Gap height={2} />
              <Text
                style={[Fonts.textBold, { textAlign: 'center', fontSize: 12 }]}
              >
                {item.name}
              </Text>
              <View>
                <Text
                  style={[
                    Fonts.textBold,
                    {
                      textAlign: 'center',
                      fontSize: 12,
                      color: Colors.primary,
                    },
                  ]}
                >
                  {item.desc}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={{ top: responsiveHeight(1) }}>
        <View style={styles.garis} />
        <Gap height={6} />
        <View style={[Layout.row, Layout.justifyContentBetween]}>
          <View style={[Layout.row]}>
            <View style={styles.cove1}>
              <Image
                source={Images.icons.iconUp}
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                }}
              />
            </View>
            <Gap width={10} />
            <View style={{ top: 2 }}>
              <Text style={[Fonts.textRegular, { fontSize: 13 }]}>
                Uang Masuk
              </Text>
              <Gap height={2} />
              <Text
                style={[Fonts.textBold, { textAlign: 'center', fontSize: 13 }]}
              >
                Rp 1.000.00
              </Text>
            </View>
          </View>
          <View style={[Layout.row]}>
            <View style={styles.cove2}>
              <Image
                source={Images.icons.iconDown}
                style={{
                  width: 24,
                  height: 24,
                  alignSelf: 'center',
                }}
              />
            </View>
            <Gap width={10} />
            <View style={{ top: 2 }}>
              <Text style={[Fonts.textRegular, { fontSize: 13 }]}>
                Uang Keluar
              </Text>
              <Gap height={2} />
              <Text
                style={[Fonts.textBold, { textAlign: 'center', fontSize: 13 }]}
              >
                Rp 100.000
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardProfile;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
    marginHorizontal: responsiveWidth(-4),
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  garis: {
    borderWidth: 0.8,
    marginVertical: 5,
    borderColor: Colors.gray,
  },
  cove1: {
    backgroundColor: Colors.success,
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
  cove2: {
    backgroundColor: Colors.secenday,
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderRadius: 40 / 2,
  },
});
