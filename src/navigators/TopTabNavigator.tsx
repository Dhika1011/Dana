import { Gap } from '@/components';
import { DataCompleated } from '@/components/DataCompleated';
import { useTheme } from '@/hooks';
import { Fonts } from '@/theme';
import { Colors } from '@/theme/Variables';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function InProgres(params: any) {
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
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.white,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ padding: 90 }}>
          <Image
            source={Images.sparkles.Background}
            style={{ height: 151, width: 150, alignSelf: 'center' }}
          />
          <Text style={[Fonts.textBold, { textAlign: 'center' }]}>
            There's nothing here yet...
          </Text>
          <Gap height={3} />
          <Text
            style={[
              Fonts.textSmall,
              { fontSize: 12, color: Colors.textGray200, textAlign: 'center' },
            ]}
          >
            you have complited everyting
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
function Completed(params: any) {
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <FlatList
          data={DataCompleated}
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
              <View style={[Layout.row]}>
                <View
                  style={{
                    borderColor: Colors.gray,
                    borderWidth: 1,
                    justifyContent: 'center',
                    padding: 7,
                    width: 55,
                    height: 55,
                    borderRadius: 6,
                  }}
                >
                  <Image
                    source={item.images}
                    style={{ width: 40, height: 40 }}
                  />
                </View>
                <Gap width={10} />
                <View>
                  <Text
                    style={[
                      Fonts.textRegular,
                      { color: Colors.Black, fontSize: 17 },
                    ]}
                  >
                    {item.Name}
                  </Text>
                  <Gap height={15} />
                  <Text
                    style={[
                      Fonts.textSmall,
                      { color: Colors.Black, fontSize: 12 },
                    ]}
                  >
                    {item.Tanggal}
                  </Text>
                </View>
                <Gap width={31} />
                <View
                  style={{
                    top: responsiveHeight(-2),
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    alignSelf: 'flex-end',
                  }}
                >
                  <Text
                    style={[
                      Fonts.textBold,
                      {
                        color: Colors.Black,
                        fontSize: 15,
                      },
                    ]}
                  >
                    {item.harga}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  marginVertical: 5,
                  top: 20,
                  borderColor: Colors.gray,
                }}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
      <Gap height={50} />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const screenOptions = {
  tabBarInactiveTintColor: Colors.white,
  tabBarStyle: { backgroundColor: Colors.primary, height: 50 },
};

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="History"
      screenOptions={screenOptions}
      sceneContainerStyle={{ backgroundColor: Colors.white }}
    >
      <Tab.Screen name="InProgres" component={InProgres} />
      <Tab.Screen name="Completed" component={Completed} />
    </Tab.Navigator>
  );
}
export function TopTabNavigator() {
  return <MyTabs />;
}
