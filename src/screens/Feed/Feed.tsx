import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { Colors } from '@/theme/Variables';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { DataFotoFeed } from '@/components/Data/DataFotoFeed';
import { Gap } from '@/components';

const Feed = (props: any) => {
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
    <View style={{ flex: 1 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={[
            {
              paddingTop: responsiveHeight(1),
              backgroundColor: Colors.primary,
              paddingHorizontal: responsiveScreenWidth(2),
            },
          ]}
        >
          <FlatList
            data={DataFotoFeed}
            horizontal={true}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={item.images}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: Colors.white }}>
          <FlatList
            data={DataFotoFeed}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              justifyContent: 'space-between',
            }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  Layout.row,
                  {
                    paddingVertical: 10,
                    marginHorizontal: 20,
                  },
                ]}
              >
                <Image
                  source={item.images}
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
                <Gap width={10} />
                <View>
                  <Text
                    style={[
                      Fonts.textBold,
                      { color: Colors.Black, fontSize: 17 },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Gap height={3} />
                  <Text
                    style={[
                      Fonts.textRegular,
                      { color: Colors.Black, fontSize: 13 },
                    ]}
                  >
                    {item.des}
                  </Text>
                  <Gap height={10} />
                  <View style={styles.card1}>
                    <View
                      style={[
                        Layout.row,
                        {
                          borderColor: Colors.gray,
                          borderWidth: 1,
                          justifyContent: 'center',
                          padding: 7,
                          width: 45,
                          height: 43,
                          top: responsiveHeight(-1),
                        },
                      ]}
                    >
                      <Image
                        source={item.gamabar}
                        style={{
                          width: 30,
                          height: 30,
                          justifyContent: 'center',
                        }}
                      />
                    </View>
                    <Gap width={3} />
                    <View
                      style={{
                        top: responsiveHeight(-5),
                        alignSelf: 'flex-end',
                      }}
                    >
                      <Text
                        style={[
                          Fonts.textBold,
                          {
                            color: Colors.Black,
                            fontSize: 14,
                            textAlign: 'left',
                          },
                        ]}
                      >
                        {item.des2}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  card1: {
    backgroundColor: Colors.white,
    marginHorizontal: 15,
    padding: 30,
    borderRadius: 10,
    height: 75,
    // marginTop: responsiveHeight(-6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
