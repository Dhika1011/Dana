import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import Gap from './Gap';
import { Datamart } from './Datamart';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const CarrdMart = () => {
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
      <View style={{ flexDirection: 'row' }}>
        <Text style={[Fonts.textBold]}>What's New</Text>
        <Gap width={20} />
        <View style={{ marginHorizontal: responsiveHeight(12), marginTop: -3 }}>
          <Button label="promo" />
        </View>
      </View>
      <View style={{ marginTop: -17 }}>
        <Text>The best news of the week!</Text>
      </View>
      <Gap height={10} />
      <FlatList
        data={Datamart}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 20,
          marginVertical: 10,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View
              style={{
                borderRadius: 7,
                padding: 3,
                marginHorizontal: 5,
                width: responsiveWidth(28),
                height: responsiveHeight(9),
                borderColor: Colors.circleButtonBackground,
                borderWidth: 1, // Warna tepi
              }}
            >
              <Image
                source={item.images}
                style={{
                  width: 48,
                  height: 40,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
              />
              <View
                style={{
                  alignSelf: 'center',
                  backgroundColor: '#F99417',
                  borderBottomLeftRadius: 7,
                  borderBottomRightRadius: 7,
                  padding: 2,
                  width: responsiveWidth(28),
                  height: 20,
                  top: responsiveHeight(1),
                }}
              >
                <Text
                  style={[
                    Fonts.textBold,
                    {
                      color: Colors.white,
                      fontSize: 10,
                      textAlign: 'center',
                      top: 2,
                    },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </View>
            <Gap height={20} />
            <View
              style={{
                alignSelf: 'center',
                borderColor: Colors.circleButtonBackground,
                borderRadius: 7,
                borderWidth: 1,
                padding: 5,
                width: 100,
              }}
            >
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 10, textAlign: 'center' },
                ]}
              >
                {item.Km}
              </Text>
            </View>
            <Gap height={10} />
            <View style={{ alignSelf: 'center' }}>
              <Text
                style={[Fonts.textBold, { fontSize: 12, textAlign: 'center' }]}
              >
                {item.alamat}
              </Text>
            </View>
            <Gap height={16} />
            <View style={{ alignSelf: 'center' }}>
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 10, textAlign: 'center' },
                ]}
              >
                {item.desc}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CarrdMart;

const styles = StyleSheet.create({});
