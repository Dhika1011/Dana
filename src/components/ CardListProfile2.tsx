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
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Gap from './Gap';
import { DataProfilelist2 } from './Data/DataProfilelist2';

const CardListProfile2 = () => {
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
        data={DataProfilelist2}
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
            onPress={() => navigation.navigate('ViewAll', { item: item })}
          >
            <View style={[Layout.row, Layout.justifyContentBetween]}>
              <Image source={item.images} style={{ width: 25, height: 25 }} />

              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    { color: Colors.Black, fontSize: 16 },
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

export default CardListProfile2;

const styles = StyleSheet.create({});
