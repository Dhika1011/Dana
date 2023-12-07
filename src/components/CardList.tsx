import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React from 'react';
import Button from './Button';
import Gap from './Gap';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { DataList } from './DataList';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Buttons from '@/theme/components/Buttons';
import Button2 from './Button2';
import ButtonCustom from './ButtunCustom';

const CardList = (props: any) => {
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
        <View style={{ marginHorizontal: responsiveHeight(10), marginTop: -3 }}>
          <ButtonCustom label="View Promos" />
        </View>
      </View>
      <View style={{ marginTop: -17 }}>
        <Text>The best news of the week!</Text>
      </View>
      <Gap height={20} />
      <FlatList
        data={DataList}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.page1}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginBottom: 10 }}
            onPress={() => navigation.navigate(item.halaman)}
          >
            <View style={[Layout.row]}>
              <Image
                source={item.images}
                style={{ width: 43, height: 43, borderRadius: 50 }}
              />
              <Gap width={10} />
              <View style={{ marginTop: 3 }}>
                <Text style={[Fonts.textBold, { color: Colors.Black }]}>
                  {item.des}
                  <Gap width={10} />
                </Text>
                <View>
                  <Text>{item.des1}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={{ marginHorizontal: 70 }}>
        <Button2
          label="View All News"
          onPress={() => navigation.navigate('DanaNews')}
        />
      </View>
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  page1: {
    paddingHorizontal: 15,
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
