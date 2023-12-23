import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Gap } from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import Input from '@/components/Input';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '@/theme/Variables';
import Button2 from '@/components/Button2';
import Modal from 'react-native-modal';
import CardListEwalet from '@/components/CardListEwalet';
import { DataEwallet2 } from '@/components/Data/DataEwallet2';
import { DataMoney } from '@/components/Data/DataMoney';

const Money = (props: any) => {
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
  const [Name, setName] = useState('');
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
            source={Images.sparkles.BackgroudEmoney}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
          />
        </View>
        <FlatList
          data={DataMoney}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              onPress={() => navigation.navigate('MoneyDetail', { item: item })}
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
              <Gap height={10} />
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

export default Money;

const styles = StyleSheet.create({});
