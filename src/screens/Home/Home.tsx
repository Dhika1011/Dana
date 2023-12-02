import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '@/theme/Variables';
import {
  BennerSlider,
  Button,
  CardProtecton,
  Cardlist2,
  Gap,
} from '@/components';
import CardMenu from '../../components/CardMenu';
import { Dimensions } from 'react-native';
import { DataBelanja } from '@/components/DataBelanja';
import { DataMenu } from '@/components/DataMenu';
import CardList from '@/components/CardList';
import CarrdMart from '@/components/CarrdMart';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Dhika12 from '@/components/Courousel1';
import Courousel1 from '@/components/Courousel1';
import { useDispatch } from 'react-redux';
import { changeHomeModal } from '@/store/homeModal';

const Home = (props: any) => {
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
  const { height, width, scale, fontScale } = useWindowDimensions();
  const [refreshing, setRefreshing] = React.useState(false);
  const STYLES = ['default', 'dark-content', 'light-content'] as const;
  const TRANSITIONS = ['fade', 'slide', 'none'] as const;
  const dispatch = useDispatch();

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        height: hp('100%'),
        width: wp('100%'),
      }}
    >
      <View
        style={[
          {
            paddingTop: responsiveHeight(10),
            backgroundColor: Colors.primary,
            paddingHorizontal: responsiveScreenWidth(3),
          },
        ]}
      >
        <View style={[Layout.row, { marginHorizontal: 10 }]}>
          <Image
            source={Images.icons.Dana}
            style={{ height: 30, width: 30, top: responsiveHeight(-4) }}
          />
          <Gap width={9} />
          <View style={{ marginTop: responsiveHeight(-3) }}>
            <Text style={[Fonts.textSmall, { color: Colors.white }]}>
              RP.
              <Text style={[Fonts.textBold, { color: Colors.white }]}>
                39.000
              </Text>
            </Text>
          </View>
          <Gap width={5} />
          <TouchableOpacity style={{ marginTop: responsiveHeight(-3) }}>
            <Image
              source={Images.icons.IconMata}
              style={{ height: 24, width: 24 }}
            />
          </TouchableOpacity>
          <Gap width={170} />
          <TouchableOpacity onPress={() => navigation.navigate('Inbox')}>
            <Image
              source={Images.icons.IconPesan}
              style={{
                height: 25,
                width: 25,
                top: responsiveHeight(-3),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              backgroundColor: Colors.primary,
              padding: 20,
              paddingBottom: 50,
              top: responsiveHeight(-2),
            },
          ]}
        >
          <FlatList
            data={DataMenu}
            horizontal={true}
            contentContainerStyle={{
              justifyContent: 'space-between',
              flex: 1,
              marginHorizontal: 20,
              marginVertical: 10,
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  dispatch(changeHomeModal({ isVisibleModal: true }))
                }
              >
                <Image
                  source={item.images}
                  style={{ width: 35, height: 35, alignSelf: 'center' }}
                />
                <Gap height={5} />
                <View style={{ alignSelf: 'center' }}>
                  <Text style={[Fonts.textBold, { color: Colors.white }]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.name}
          />
        </View>
        <View style={{ marginTop: -40 }}>
          <View style={styles.card}>
            <CardMenu />
          </View>
          <Gap height={10} />
          <View style={styles.card2}>
            <FlatList
              data={DataBelanja}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.page}
              renderItem={({ item }) => (
                <View style={{ paddingVertical: 3 }}>
                  <TouchableOpacity
                    style={[Layout.row]}
                    onPress={() => navigation.navigate(item.Halaman)}
                  >
                    <Image
                      source={item.images}
                      style={{ width: 35, height: 33, borderRadius: 50 }}
                    />
                    <Gap width={5} />
                    <View style={{ marginTop: 5 }}>
                      <Text style={{ fontSize: 10 }}>
                        {item.name}
                        <Gap width={3} />
                        <Text
                          style={[
                            Fonts.textBold,
                            { fontSize: 10, color: Colors.primary },
                          ]}
                        >
                          {item.des}
                        </Text>
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={{ marginTop: -10 }}>
            <Courousel1 />
          </View>
        </View>
        <View style={styles.card1}>
          <CardList />
        </View>
        <Gap height={10} />
        <View style={styles.card1}>
          <CarrdMart />
        </View>
        <Gap height={15} />
        <View style={styles.card3}>
          <Cardlist2 />
        </View>
        <Gap height={10} />
        <View style={styles.card3}>
          <CardProtecton />
        </View>

        <Gap height={100} />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white,
    height: responsiveScreenHeight(65),
  },
  card: {
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
  },
  card2: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('25%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  page: {
    paddingHorizontal: 1,
    flex: 1,
  },
  page1: {
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  card1: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 10,
    height: hp('39%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card3: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('25%'),
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
