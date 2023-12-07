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
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Input from '@/components/Input';
import { Gap } from '@/components';
import { DataWatter } from '@/components/Data/DataWatter';
import Button2 from '@/components/Button2';
import { DataPenerimaNegara } from '@/components/Data/DataPenerimaNegara';

const PenerimaNegara = (props: any) => {
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
              paddingVertical: responsiveScreenWidth(3),
            },
          ]}
        >
          <TouchableOpacity style={[Layout.row, { margin: 10 }]}>
            <Image
              source={Images.icons.iconTanya}
              style={[
                {
                  width: 25,
                  height: 25,
                  padding: 5,
                  top: 2,
                  alignItems: 'center',
                },
              ]}
            />
            <Gap width={10} />
            <View>
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 13, color: Colors.white, textAlign: 'justify' },
                ]}
              >
                What's a billing code?
              </Text>
              <Gap width={10} />
              <Text
                style={[
                  Fonts.textRegular,
                  { fontSize: 10, color: Colors.white, textAlign: 'justify' },
                ]}
              >
                Learn how to get a billing code here
              </Text>
            </View>
            <Gap width={130} />
            <Image
              source={Images.icons.iconRight}
              style={[
                {
                  width: 15,
                  height: 15,

                  top: 8,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Input
            placeholder="Find your location provider"
            value={Name}
            onChangeText={(val: string) => setName(val)}
          />
          <Gap height={5} />
        </View>
        <View
          style={{
            borderWidth: 0.5,
            marginVertical: 5,
            top: 5,
            borderColor: Colors.gray,
            marginHorizontal: 20,
          }}
        />
        <Gap height={10} />
        <FlatList
          data={DataPenerimaNegara}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingHorizontal: 15,
            borderRadius: 10,

            backgroundColor: Colors.white,
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              onPress={() =>
                navigation.navigate('PenerimaNegara2', { item: item })
              }
            >
              <View style={[Layout.row]}>
                <View
                  style={{
                    justifyContent: 'center',
                    padding: 7,
                    width: 45,
                    height: 45,
                    borderWidth: 0.5,
                    borderColor: Colors.gray,
                    borderRadius: 50 / 2,
                  }}
                >
                  <Image
                    source={item.images}
                    style={{ width: 30, height: 30 }}
                  />
                </View>
                <Gap width={10} />
                <View style={{ justifyContent: 'center' }}>
                  <Text
                    style={[
                      Fonts.textBold,
                      {
                        color: Colors.Black,
                        fontSize: 12,
                        textAlign: 'center',
                      },
                    ]}
                  >
                    {item.judul}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default PenerimaNegara;

const styles = StyleSheet.create({});
