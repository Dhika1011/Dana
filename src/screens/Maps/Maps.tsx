import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Maps = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView style={styles.maps} />
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
  maps: { width: '100%', height: '100%' },
});
