import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Button2 from '@/components/Button2';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { Button, Gap } from '@/components';
import Input from '@/components/Input';
import Modal from 'react-native-modal';
import { DatatEducation } from '@/components/Data/DataEducation';
import { count } from 'console';

const Education = (props: any) => {
  const {
    Common,
    Fonts,
    Gutters,
    Layout,
    Images,
    Colors,
    darkMode: isDark,
  } = useTheme();

  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [Number, setNumber] = useState('');
  const [modal, setModal] = useState(false);

  const [dataTampil, setDataTampil] = useState(DatatEducation);
  const [dataSeleksi, setDataSeleksi] = useState(null);
  const [filter, setFilter] = useState([
    {
      namafilter: 'All instutation',
      tipe: 'category2',
    },
    {
      namafilter: 'Course',
      tipe: 'category',
    },
    {
      namafilter: 'School',
      tipe: 'category',
    },
    {
      namafilter: 'College',
      tipe: 'category',
    },
  ]);
  function filterdata(item: any) {
    let datahasilfilter = [...DatatEducation];

    if (item.tipe == 'category') {
      datahasilfilter = datahasilfilter.filter(
        x => x.category == item.namafilter,
      );
    }
    if (item.tipe == 'category') {
      datahasilfilter = datahasilfilter.filter(
        x => x.category == item.namafilter,
      );
    }
    if (item.tipe == 'category') {
      datahasilfilter = datahasilfilter.filter(
        x => x.category == item.namafilter,
      );
    }

    setDataTampil(datahasilfilter);
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>
          <Text
            style={[
              Fonts.textBold,
              {
                color: Colors.Black,
                margin: 20,
              },
            ]}
          >
            SELECT INSTITUTION
          </Text>
        </View>
        <View style={[{ marginHorizontal: 10 }]}>
          <Input
            placeholder="Search institution here"
            value={Number}
            keyboardType="number-pad"
            onChangeText={(val: string) => setNumber(val)}
          />
        </View>
        <Gap height={10} />
        <View style={[{ marginHorizontal: 10 }]}>
          <FlatList
            horizontal={true}
            data={filter}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor:
                    dataSeleksi == item.namafilter ? '#009900' : '#DDDDDD',
                  opacity: dataSeleksi == item.namafilter ? 1 : 0.5,
                  marginHorizontal: 5,
                  marginTop: 10,
                  backgroundColor: Colors.white,
                  height: 35,
                  marginBottom: 10,
                  paddingHorizontal: 20,
                  borderRadius: 50,
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 3,
                }}
                onPress={() => filterdata(item)}
              >
                <Text style={{ justifyContent: 'center' }}>
                  {item.namafilter}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <FlatList
          data={dataTampil}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              onPress={() =>
                navigation.navigate('EducationDetail', { item: item })
              }
            >
              <View style={[Layout.row]}>
                <View
                  style={{
                    justifyContent: 'center',
                    padding: 7,
                    width: 55,
                    height: 30,
                  }}
                >
                  <Image
                    source={item.images}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40 / 2,
                    }}
                  />
                </View>
                <Gap width={10} />
                <View style={{ justifyContent: 'center' }}>
                  <Text
                    style={[
                      Fonts.textBold,
                      {
                        color: Colors.Black,
                        fontSize: 13,
                      },
                    ]}
                  >
                    {item.judul}
                  </Text>
                </View>
              </View>
              <Gap height={5} />
              <View
                style={{
                  borderWidth: 0.5,
                  marginVertical: 5,
                  top: 5,
                  borderColor: Colors.gray,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default Education;

const styles = StyleSheet.create({});
