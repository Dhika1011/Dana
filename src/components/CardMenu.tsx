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

const CardMenu = (props: any) => {
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
      <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
        <Image
          source={Images.sparkles.LogoLazada}
          style={{ width: 40, height: 40, borderRadius: 50 }}
        />
        <Gap width={10} />
        <View style={{ marginTop: 5 }}>
          <Text style={[Fonts.textBold, { fontSize: 16 }]}>Diskon Rp40rb</Text>
          <Text
            style={[Fonts.textBold, { fontSize: 12, color: Colors.primary }]}
          >
            Yuk Belanja di lazada
          </Text>
        </View>
        <Gap width={30} />
        <View
          style={{ marginHorizontal: 180, marginLeft: responsiveHeight(-1) }}
        >
          <Button label="Ambil" onPress={() => navigation.navigate('Lazada')} />
        </View>
      </View>
      <FlatList
        data={DataCard}
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

export default CardMenu;

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
});
