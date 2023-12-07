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

const Watter = (props: any) => {
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
            },
          ]}
        >
          <View
            style={[
              Layout.justifyContentBetween,
              Layout.justifyContentBetween,
              Layout.row,
            ]}
          >
            <Image
              source={Images.sparkles.BackgroundWatter}
              style={[{ width: 45, height: 50 }]}
            />
            <Image
              source={Images.sparkles.BackgroundWatter3}
              style={[{ width: 45, height: 45 }]}
            />
            <Image
              source={Images.sparkles.BackgroundWatter2}
              style={[{ width: 45, height: 45 }]}
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <Input
              placeholder="Find your location provider"
              value={Name}
              onChangeText={(val: string) => setName(val)}
            />
            <Gap height={5} />
          </View>
        </View>
        <View style={{ marginHorizontal: 20, top: 10 }}>
          <Text style={[Fonts.textBold, { fontSize: 13, color: Colors.Black }]}>
            JABODETABEK
          </Text>
        </View>
        <Gap height={20} />
        <FlatList
          data={DataWatter}
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
              onPress={() => navigation.navigate('WaterDetail', { item: item })}
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
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <Gap width={10} />
                <View>
                  <Text
                    style={[
                      Fonts.textRegular,
                      { color: Colors.Black, fontSize: 13 },
                    ]}
                  >
                    {item.judul}
                  </Text>
                  <Gap height={5} />
                  <Text
                    style={[
                      Fonts.textSmall,
                      { color: Colors.Black, fontSize: 10 },
                    ]}
                  >
                    {item.desc}
                  </Text>
                </View>
              </View>

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
        <View style={{ marginHorizontal: 80, alignSelf: 'center' }}>
          <Button2 label="SEE MORE" />
        </View>
        <Gap height={50} />
      </ScrollView>
    </View>
  );
};

export default Watter;

const styles = StyleSheet.create({});
