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
import { Datatvcabel } from '@/components/Data/Datatvcabel';
import { DataMaintenance } from '@/components/Data/DataMaintenance';

const Tvkabel = (props: any) => {
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
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        >
          <Image
            source={Images.sparkles.BackgroudTv}
            style={[{ width: 428, height: 87, alignSelf: 'center' }]}
          />
        </View>
        <View style={[{ marginHorizontal: 10 }]}>
          <Input
            placeholder="Search provider here"
            value={Number}
            keyboardType="number-pad"
            onChangeText={(val: string) => setNumber(val)}
          />
        </View>
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
            PROVIDER LIST
          </Text>
        </View>
        <FlatList
          data={Datatvcabel}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              onPress={() =>
                navigation.navigate('TvkabelDetail', { item: item })
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

export default Tvkabel;

const styles = StyleSheet.create({});
