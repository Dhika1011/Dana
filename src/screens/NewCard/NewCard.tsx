import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  RefreshControl,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, Gap } from '@/components';
import LinearGradient from 'react-native-linear-gradient';
import Input from '@/components/Input';
import {
  responsiveHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { Colors } from '@/theme/Variables';
import Button2 from '@/components/Button2';
import Modal from 'react-native-modal';

const NewCard = () => {
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
  const [value, onChangeText] = React.useState('Enter Card Number');
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ marginHorizontal: 20, padding: 10 }}>
          <View>
            <Text
              style={[
                Fonts.textBold,
                {
                  fontSize: 14,
                  color: Colors.white,
                },
              ]}
            >
              Card Number
            </Text>
            <Gap height={5} />
            <View
              style={{
                backgroundColor: value,
                borderBottomColor: Colors.textGray200,
                borderBottomWidth: 0.5,
              }}
            >
              <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                onChangeText={text => onChangeText(text)}
                value={value}
                style={{ padding: 10, color: Colors.textGray200 }}
              />
            </View>
            <Gap height={80} />
            <View style={{ top: responsiveHeight(-1) }}>
              <Button label="Countinue" />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NewCard;

const styles = StyleSheet.create({});
