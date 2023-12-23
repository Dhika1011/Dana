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

const BankServies = () => {
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
                fontSize: 20,
              },
            ]}
          >
            Create your bank Account
          </Text>
          <Text
            style={[
              Fonts.textRegular,
              {
                color: Colors.Black,
                marginHorizontal: 20,
                fontSize: 12,
                top: responsiveHeight(-1),
              },
            ]}
          >
            Choose the bank account you want to create.
          </Text>
          <Gap height={10} />
          <TouchableOpacity
            style={[
              {
                backgroundColor: Colors.white,
                paddingHorizontal: responsiveScreenWidth(3),
              },
            ]}
            onPress={() => navigation.navigate('Danamon')}
          >
            <Image
              source={Images.sparkles.Denamon}
              style={[
                {
                  width: 317,
                  height: 96,
                  alignSelf: 'center',
                  borderRadius: 10,
                },
              ]}
            />
          </TouchableOpacity>
          <Gap height={20} />
          <TouchableOpacity
            style={[
              {
                backgroundColor: Colors.white,
                paddingHorizontal: responsiveScreenWidth(3),
              },
            ]}
            onPress={() => navigation.navigate('Bca')}
          >
            <Image
              source={Images.sparkles.Bca}
              style={[
                {
                  width: 317,
                  height: 96,
                  alignSelf: 'center',
                  borderRadius: 10,
                },
              ]}
            />
          </TouchableOpacity>
        </View>
        <View style={{ top: responsiveHeight(2) }}>
          <Image
            source={Images.sparkles.Balon}
            style={[
              {
                width: 317,
                height: 210,
                alignSelf: 'center',
                borderRadius: 10,
              },
            ]}
          />
        </View>
        <Gap height={15} />
        <View>
          <Text
            style={[
              Fonts.textRegular,
              {
                color: Colors.textGray200,
                marginHorizontal: 20,
                fontSize: 14,
                textAlign: 'center',
              },
            ]}
          >
            More banks are coming soon!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BankServies;

const styles = StyleSheet.create({});
