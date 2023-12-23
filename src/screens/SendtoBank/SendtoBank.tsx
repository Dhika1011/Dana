import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useTheme } from '@/hooks';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Input from '@/components/Input';

const SendtoBank = (props: any) => {
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
  const [Name, setName] = useState('');
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
        <View style={[{ marginHorizontal: 30, marginRight: 64 }]}>
          <Input
            placeholder="Find bank name/account number"
            value={Number}
            keyboardType="number-pad"
            onChangeText={(val: string) => setNumber(val)}
          />
          <TouchableOpacity
            onPress={() => setModal(true)}
            style={{
              justifyContent: 'center',
              marginLeft: responsiveScreenWidth(78),
              top: responsiveHeight(-4),
            }}
          >
            <Image
              source={Images.icons.iconScan2}
              style={[{ width: 25, height: 25, top: -5 }]}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[Layout.row, { marginHorizontal: 25 }]}
          onPress={() => navigation.navigate('AddNewBank')}
        >
          <Image
            source={Images.icons.iconAdd}
            style={[{ width: 25, height: 25 }]}
          />
          <Text
            style={[
              Fonts.textBold,
              {
                margin: 10,
                color: Colors.Black,
                fontSize: 14,
                top: responsiveHeight(-0.7),
              },
            ]}
          >
            Add new bank account
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SendtoBank;

const styles = StyleSheet.create({});
