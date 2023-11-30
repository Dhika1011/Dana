import * as React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';

function Courousel1() {
  const screenWidth = Math.round(Dimensions.get('screen').width);
  const PAGE_WIDTH = screenWidth;
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: 150,
  } as const;
  const progressValue = useSharedValue<number>(0);
  const images = [
    {
      image: require('../theme/assets/images/bener1.jpg'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('../theme/assets/images/bener2.jpg'),
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: require('../theme/assets/images/bener122.jpg'),
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: require('../theme/assets/images/bener4.jpg'),
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: require('../theme/assets/images/themarvel.jpg'),
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: require('../theme/assets/images/bener13.jpg'),
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
    {
      image: require('../theme/assets/images/bener14.jpg'),
      desc: 'Red fort in India New Delhi is a magnificient masterpeiece of humans',
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={PAGE_WIDTH}
        height={PAGE_WIDTH / 2}
        autoPlay={true}
        data={images}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log(, index)}*//
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.92,
          parallaxScrollingOffset: 40,
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              marginHorizontal: 2,
              justifyContent: 'center',
            }}
          >
            <Image
              source={item.image}
              style={{ height: 150, width: '100%', borderRadius: 8 }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default Courousel1;
