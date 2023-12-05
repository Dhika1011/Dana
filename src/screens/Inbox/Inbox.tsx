import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { Colors } from '@/theme/Variables';
import CardHights from '@/components/CardHights';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { Gap } from '@/components';
import { Datainbox } from '@/components/Data/Datainbox';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Inbox = () => {
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
        <View style={{ marginHorizontal: 5 }}>
          <View style={{ padding: 10 }}>
            <Text
              style={[Fonts.textBold, { color: Colors.Black, fontSize: 16 }]}
            >
              Highlights
            </Text>
          </View>
          <View style={{ marginHorizontal: 5, top: -3 }}>
            <CardHights />
          </View>
          <View>
            <View style={{ padding: 10 }}>
              <Text
                style={[Fonts.textBold, { color: Colors.Black, fontSize: 16 }]}
              >
                Today
              </Text>
            </View>
            <FlatList
              data={Datainbox}
              keyExtractor={item => item.id}
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
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      alignSelf: 'center',
                    }}
                  />

                  <Gap width={20} />
                  <View>
                    <View style={styles.card1}>
                      <Gap width={3} />
                      <View>
                        <Text
                          style={[
                            Fonts.textRegular,
                            {
                              color: Colors.Black,
                              fontSize: 14,
                              textAlign: 'justify',
                            },
                          ]}
                        >
                          {item.desc}
                        </Text>
                      </View>
                    </View>
                    <Gap height={6} />
                    <Text
                      style={[
                        Fonts.textRegular,
                        {
                          color: Colors.textGray400,
                          fontSize: 12,
                          textAlign: 'justify',
                        },
                      ]}
                    >
                      {item.day}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  card1: {
    backgroundColor: Colors.white,
    marginHorizontal: -10,
    padding: 10,
    borderRadius: 10,
    height: responsiveHeight(8),
    width: responsiveWidth(70),
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
