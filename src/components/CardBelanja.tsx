import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import { DataBelanja } from './DataBelanja';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Gap from './Gap';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CardBelanja = () => {
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
    <View style={styles.textWrapper}>
      <FlatList
        data={DataBelanja}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.page}
        renderItem={({ item }) => (
          <View style={styles.Page1}>
            <View style={[Layout.row]}>
              <Image
                source={item.images}
                style={{ width: 15, height: 15, borderRadius: 50 }}
              />

              <Gap width={10} />
              <View>
                <Text style={[Fonts.textRegular, { color: Colors.Black }]}>
                  {item.name}
                  <Gap width={10} />
                  <Text style={{ fontSize: 12, color: Colors.Black }}>
                    {item.des}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CardBelanja;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 15,
    borderRadius: 10,

    backgroundColor: Colors.white,
  },
  Page1: {
    marginTop: 5,
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 5,
  },
  textWrapper: {
    height: hp('70%'), // 70% of height device screen
    width: wp('80%'), // 80% of width device screen
  },
});
