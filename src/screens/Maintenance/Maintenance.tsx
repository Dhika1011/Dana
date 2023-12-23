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
import { DataEcomerrs } from '@/components/Data/DataEcomerrs';
import { Datatvcabel } from '@/components/Data/Datatvcabel';
import { DataMaintenance } from '@/components/Data/DataMaintenance';

const Maintenance = () => {
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
            source={Images.sparkles.mainten}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
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
        <FlatList
          data={DataMaintenance}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor: Colors.white,
                paddingHorizontal: 20,
                paddingVertical: 20,
              }}
              onPress={() =>
                navigation.navigate('MaintenanceDetail', { item: item })
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
                    source={{ uri: item.images }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40 / 2,
                      borderWidth: 0.7,
                      borderColor: Colors.gray,
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

export default Maintenance;

const styles = StyleSheet.create({});
