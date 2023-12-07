import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Gap from './Gap';
import { DataProfilelist } from './Data/DataProfilelist';
import { layout } from 'types/theme';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const CardListProfile = () => {
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
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DataProfilelist}
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
              marginHorizontal: -8,
            }}
            onPress={() => navigation.navigate(item.Halaman)}
          >
            <View style={[Layout.row, Layout.justifyContentBetween]}>
              <Image source={item.images} style={{ width: 25, height: 25 }} />
              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    { color: Colors.Black, fontSize: 17 },
                  ]}
                >
                  {item.judul}
                </Text>
              </View>

              <View>
                <Image source={item.gambar} style={{ width: 25, height: 25 }} />
              </View>
            </View>

            <View
              style={{
                borderWidth: 0.5,
                marginVertical: 5,
                top: responsiveHeight(2),
                borderColor: Colors.gray,
              }}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardListProfile;

const styles = StyleSheet.create({});
