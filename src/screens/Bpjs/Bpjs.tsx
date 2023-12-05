import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Button2 from '@/components/Button2';
import RadioButton from '@/components/RadioButton';

const Bpjs = () => {
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
            source={Images.sparkles.BackgroundBPJS}
            style={[{ width: 208, height: 87, alignSelf: 'center' }]}
          />
        </View>
        <View style={{ padding: 10 }}>
          <Text
            style={[
              Fonts.textBold,
              { fontSize: 12, color: Colors.textGray200 },
            ]}
          >
            CUSTOMER ID
          </Text>
          <View style={{ marginHorizontal: 20 }}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Bpjs;

const styles = StyleSheet.create({});
