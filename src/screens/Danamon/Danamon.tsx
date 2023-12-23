import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';

const Danamon = () => {
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
    <WebView
      source={{
        uri: 'https://www.dbank.co.id/#/login/',
      }}
      style={{ flex: 1 }}
    />
  );
};

export default Danamon;

const styles = StyleSheet.create({});
