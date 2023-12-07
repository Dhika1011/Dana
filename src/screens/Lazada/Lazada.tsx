import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@/hooks';
import { useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

const Lazada = () => {
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
      source={{ uri: 'https://www.lazada.co.id/' }}
      style={{ flex: 1 }}
    />
  );
};

export default Lazada;

const styles = StyleSheet.create({});
