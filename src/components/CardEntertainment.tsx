import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import { DataCard } from './DataCard';
import Gap from './Gap';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import Button from './Button';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { DataCard2 } from './DataCard2';
import { Colors } from '@/theme/Variables';
import { DataTiket } from './DataFavorit';
import { DataEntertainment } from './DataEntertainment';

const CardEntertainment = (props: any) => {
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
  const screenWidth = Math.round(Dimensions.get('window').width);
  const screenHeight = Math.round(Dimensions.get('window').height);
  return (
    <View style={styles.card}>
      <View style={{ marginHorizontal: 20, marginTop: -4 }}>
        <Text style={[Fonts.textBold, { fontSize: 16 }]}>Daily</Text>
      </View>
      <Gap height={1} />
      <View style={styles.garis} />
      <FlatList
        data={DataEntertainment}
        numColumns={4} // Mengatur jumlah kolom menjadi 2
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate(item.Halaman)}
          >
            <View>
              <Image source={item.images} style={{ width: 35, height: 35 }} />
            </View>
            <Gap height={2} />
            <Text
              style={[Fonts.textBold, { textAlign: 'center', fontSize: 12 }]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardEntertainment;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    flex: 1,
    marginHorizontal: -20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  garis: {
    borderWidth: 0.8,
    marginVertical: 5,
    borderColor: Colors.gray,
  },
});
