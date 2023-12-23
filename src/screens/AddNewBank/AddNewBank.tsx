import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/theme/Variables';
import Input from '@/components/Input';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Gap } from '@/components';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const AddNewBank = () => {
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: Colors.Background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View
          style={[
            {
              paddingTop: responsiveHeight(8),
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
            },
          ]}
        ></View>

        <View style={styles.Card}>
          <View>
            <Input
              title="Destination Bank"
              placeholder="Choose your Bank"
              value={Name}
              keyboardType="number-pad"
              onChangeText={(val: string) => setName(val)}
            />
          </View>
          <Gap height={20} />
          <View>
            <Input
              title="Destination Account Number"
              placeholder="Enter bank account number"
              value={Number}
              keyboardType="number-pad"
              onChangeText={(val: string) => setNumber(val)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddNewBank;

const styles = StyleSheet.create({
  Card: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: hp('27%'),
    // marginTop: responsiveHeight(-6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: responsiveHeight(-4),
  },
});
