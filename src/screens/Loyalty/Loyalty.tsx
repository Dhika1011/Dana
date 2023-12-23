import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
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
import { DataBills } from '@/components/Data/DataBills';
import { V4MAPPED } from 'dns';
import { DataMaintenance } from '@/components/Data/DataMaintenance';
import { DataLoyalty } from '@/components/Data/DataLoyalty';

const Loyalty = (props: any) => {
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
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  const [Name, setName] = useState('');
  const [Number, setNumber] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.card}>
          <Input
            placeholder="Search provider here"
            value={Number}
            keyboardType="number-pad"
            onChangeText={(val: string) => setNumber(val)}
          />
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
            <Text style={[Fonts.textBold, { fontSize: 16 }]}>
              All Merchants
            </Text>
          </View>
          <FlatList
            data={DataLoyalty}
            numColumns={4} // Mengatur jumlah kolom menjadi 2
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  navigation.navigate('LoyaltyDetail', { item: item })
                }
              >
                <View
                  style={{
                    borderWidth: 0.7,
                    borderColor: Colors.textGray200,
                    height: 70,
                    width: 70,
                    justifyContent: 'center',
                    borderRadius: 20,
                  }}
                >
                  <Image
                    source={{ uri: item.images }}
                    style={{
                      width: 35,
                      height: 35,
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <Gap height={10} />
                <View>
                  <Text
                    style={[
                      Fonts.textBold,
                      { textAlign: 'center', fontSize: 11 },
                    ]}
                  >
                    {item.judul}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Loyalty;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
    marginHorizontal: 20,
    top: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
