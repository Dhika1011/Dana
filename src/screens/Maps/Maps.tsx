import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
export default class Maps extends Component {
  render() {
    return (
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        provider={PROVIDER_GOOGLE}
      ></MapView>
    );
  }
}
