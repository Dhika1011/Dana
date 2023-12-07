import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Gap from './Gap';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { DataNews } from './DataNews';
import { Colors } from '@/theme/Variables';

const CardNews = () => {
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
        data={DataNews}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.page}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.Page1}
            onPress={() => navigation.navigate(item.halaman)}
          >
            <View style={[Layout.row]}>
              <Image
                source={item.images}
                style={{ width: 43, height: 43, borderRadius: 50 }}
              />
              <Gap width={10} />
              <View style={{ marginTop: 3 }}>
                <Text style={[Fonts.textBold, { color: Colors.Black }]}>
                  {item.des}
                  <Gap width={10} />
                </Text>
                <View>
                  <Text>{item.des1}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.Background },
  page: {
    paddingHorizontal: 15,
    borderRadius: 10,

    backgroundColor: Colors.Background,
  },
  Page1: {
    marginTop: 5,
    backgroundColor: Colors.white,
    elevation: 2,
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 5,
  },
});
