import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Image,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { Gap } from '@/components';

const LoyaltyDetail = (props: any) => {
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
  const DataLoyalty = props.route.params.item;
  console.log('DataLoyalty', DataLoyalty);
  ('use strict');
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
            Layout.row,
            {
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(3),
              paddingVertical: responsiveHeight(5),
            },
          ]}
        >
          <LinearGradient
            colors={['#88AB8E', '#AFC8AD', '#EEE7DA']}
            style={styles.linearGradient}
          >
            <View
              style={[
                Layout.row,
                Layout.justifyContentBetween,
                { top: responsiveHeight(2) },
              ]}
            >
              <Image
                source={{ uri: DataLoyalty.images }}
                style={{
                  width: 45,
                  height: 45,
                  alignSelf: 'flex-start',
                  borderRadius: 45 / 2,
                }}
              />
              <Text
                style={[
                  Fonts.textBold,
                  {
                    color: Colors.Black,
                    fontSize: 13,
                    top: responsiveHeight(2),
                  },
                ]}
              >
                Points
              </Text>
            </View>
            <View style={[Layout.alignItemsEnd]}>
              <View style={[Layout.row, { top: responsiveHeight(2) }]}>
                <Image
                  source={Images.icons.iconInformasion3}
                  style={{ width: 20, height: 20 }}
                />
                <Gap width={5} />
                <Text
                  style={[
                    Fonts.textBold,
                    {
                      color: Colors.Black,
                      fontSize: 20,
                    },
                  ]}
                >
                  0
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoyaltyDetail;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height: responsiveHeight(20),
    width: responsiveScreenWidth(5),
    paddingHorizontal: 20,
    borderRadius: 7,
  },
});
