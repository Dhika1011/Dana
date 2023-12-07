import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const Games = () => {
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
    <WebView source={{ uri: 'https://www.unipin.com/' }} style={{ flex: 1 }} />
  );
};

export default Games;

const styles = StyleSheet.create({});
