import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Datahights } from './Data/Datahights';
import { Colors } from '@/theme/Variables';
import Gap from './Gap';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';

const CardHights = () => {
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
    <View>
      <FlatList
        data={Datahights}
        horizontal={true}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: 20,
          marginVertical: 10,
          shadowColor: Colors.Black,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.65,
          elevation: 3,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: Colors.white,
              paddingHorizontal: 20,
              paddingVertical: 20,
              marginHorizontal: 5,
              borderRadius: 5,
            }}
          >
            <View style={[Layout.row]}>
              <Image
                source={item.images}
                style={{
                  width: 30,
                  height: 30,

                  alignSelf: 'center',
                }}
              />
              <Gap width={10} />
              <View>
                <Text
                  style={[
                    Fonts.textRegular,
                    { color: Colors.Black, fontSize: 15 },
                  ]}
                >
                  {item.desc}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardHights;

const styles = StyleSheet.create({});
