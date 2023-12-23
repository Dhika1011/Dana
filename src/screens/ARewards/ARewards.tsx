import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const ARewards = () => {
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
      source={{ uri: 'https://link.dana.id/Qr8yPMpMnFb' }}
      style={{ flex: 1 }}
    />
  );
};
export default ARewards;

const styles = StyleSheet.create({});
