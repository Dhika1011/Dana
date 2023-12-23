import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
const MiniGames = () => {
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
    <WebView
      source={{ uri: 'https://m.dana.id/i/biller-app/game/home' }}
      style={{ flex: 1 }}
    />
  );
};

export default MiniGames;

const styles = StyleSheet.create({});
