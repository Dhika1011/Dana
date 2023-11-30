import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '@/theme/Variables';

export default class BanerSlider extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      images: [
        require('../../theme/assets/images/bener1.jpg'),
        require('../../theme/assets/images/bener2.jpg'),
        require('../../theme/assets/images/bener3.png'),
        require('../../theme/assets/images/bener4.jpg'),
        require('../../theme/assets/images/PosterGuardianofGalaxsi.png'),
        require('../../theme/assets/images/PosterAv.png'),
        require('../../theme/assets/images/PosterHullk.png'),
        require('../../theme/assets/images/spidermannn.png'),
        require('../../theme/assets/images/bener12.png'),
        require('../../theme/assets/images/Banner44.png'),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          sliderBoxHeight={132}
          ImageComponentStyle={styles.slider}
          dotStyle={styles.dotStyle}
          dotColor={Colors.primary}
          imageLoadingColor={Colors.error}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -15,
  },
  slider: {
    borderRadius: 10,
    width: 380,
    height: 207,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
