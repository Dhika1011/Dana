import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { Colors } from '@/theme/Variables';
import CardMenu2 from '@/components/CardMenu2';
import CardTiket from '@/components/CardTiket';
import { Gap } from '@/components';
import CardMenu from '@/components/CardMenu';
import CardBills from '@/components/CardBills';
import CardEntertainment from '@/components/CardEntertainment';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FlatList } from 'react-native';
import { DataBelanja } from '@/components/DataBelanja';
import { TouchableOpacity } from 'react-native';

const ViewAll = (props: any) => {
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
  const [filter, setFilter] = useState([
    { namaFilter: 'Semua' },
    { namaFilter: 'My Favorite' },
    { namaFilter: 'Ticket Booking' },
    { namaFilter: 'Bills' },
    { namaFilter: 'Ticket Booking' },
  ]);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.Background }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          horizontal
          data={filter}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setActiveIndex(index)}
              style={{
                borderWidth: 1,
                borderColor: activeIndex == index ? Colors.primary : '#fff',
                marginHorizontal: 5,
                marginTop: 10,
                backgroundColor: Colors.white,
                elevation: 2,
                height: 35,
                marginBottom: 10,
                paddingHorizontal: 20,
                borderRadius: 50,
                justifyContent: 'center',
              }}
            >
              <Text style={{ justifyContent: 'center' }}>
                {item.namaFilter}
              </Text>
            </TouchableOpacity>
          )}
        />
        {(activeIndex == 1 || activeIndex == 0) && (
          <>
            <Gap height={10} />
            <View style={styles.card}>
              <CardMenu2 />
            </View>
          </>
        )}
        {(activeIndex == 2 || activeIndex == 0) && (
          <>
            <Gap height={7} />
            <View style={styles.card}>
              <CardEntertainment />
            </View>
          </>
        )}
        {(activeIndex == 3 || activeIndex == 0) && (
          <>
            <Gap height={7} />
            <View style={styles.card1}>
              <CardBills />
            </View>
          </>
        )}
        {(activeIndex == 4 || activeIndex == 0) && (
          <>
            <Gap height={7} />
            <View style={styles.card}>
              <CardTiket />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('34%'),
    // marginTop: responsiveHeight(-6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card1: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('50%'),
    // marginTop: responsiveHeight(-6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
