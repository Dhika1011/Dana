import {
  StyleSheet,
  Text,
  View,
  RefreshControl,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import { Colors } from '@/theme/Variables';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Button, Gap } from '@/components';

const MyBills = () => {
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
              backgroundColor: Colors.white,
            },
          ]}
        >
          <Image
            source={Images.sparkles.BackgroundDanaBills}
            style={[{ width: 433, height: 206, alignSelf: 'center' }]}
          />
        </View>
        <View style={{ padding: 20, marginHorizontal: 20 }}>
          <Text
            style={[
              Fonts.textRegular,
              { fontSize: 14, color: Colors.Black, textAlign: 'center' },
            ]}
          >
            Want to request DANA to multiple people?
          </Text>
          <Gap height={3} />
          <Text
            style={[
              Fonts.textBold,
              { fontSize: 14, color: Colors.Black, textAlign: 'center' },
            ]}
          >
            Try the feature now!
          </Text>
          <Gap height={20} />
          <View>
            <Button label="Split Bills" />
          </View>
        </View>
        <Gap height={10} />
        <View style={{ marginHorizontal: 20 }}>
          <Text
            style={[
              Fonts.textBold,
              {
                fontSize: 16,
                color: Colors.Black,
                textAlign: 'justify',
              },
            ]}
          >
            Split Bill History
          </Text>

          <View
            style={{
              borderWidth: 0.6,
              marginVertical: 5,
              top: 10,
              borderColor: Colors.gray,
            }}
          />
        </View>
        <View style={{ padding: 15 }}>
          <Image
            source={Images.sparkles.BackgroundSpill}
            style={{ height: 141, width: 140, alignSelf: 'center' }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyBills;

const styles = StyleSheet.create({});
