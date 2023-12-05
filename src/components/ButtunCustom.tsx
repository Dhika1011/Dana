import React from 'react';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

import { useTheme } from '../hooks';
import { Colors } from '@/theme/Variables';
import { Image } from 'react-native';
import Gap from './Gap';

type Props = {
  onPress: any;
  mode?: 'fill' | 'outline';
  label?: string;
  disabled?: boolean;
  isLoading?: boolean;
  labelStyle?: any;
  buttonStyle?: any;
  children?: any;
};

function IconRightBordered(props: any) {
  return (
    <View
      style={[
        props.Layout.justifyContentCenter,
        props.Layout.alignItemsCenter,
        {
          borderWidth: 0.8,
          borderRadius: 20,
          height: 16,
          width: 16,
          borderStyle: 'dashed',
          borderColor: props.Colors.white,
        },
      ]}
    ></View>
  );
}

const ButtonCustom = ({
  mode,
  label,
  disabled,
  onPress,
  isLoading,
  labelStyle,
  buttonStyle,
  children,
}: Props) => {
  const { Layout, Common, Fonts, Colors, Images } = useTheme();
  return Platform.OS === 'android' ? (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      // background={TouchableNativeFeedback.Ripple(
      //     'rgba(0,0,0,0.15)',
      //     false,
      // )}
    >
      <View
        style={[
          mode == 'outline' ? Common.button2.outline2 : Common.button2.rounded2,
          buttonStyle,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator
            color={Colors.primary}
            size={24}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={[
              Layout.fill,
              { width: '100%' },
              Layout.row,
              Layout.alignItemsCenter,
              children ? Layout.center : Layout.justifyContentCenter,
            ]}
          >
            <Text
              style={[
                Fonts.textRegular,
                { color: Colors.Black, fontSize: 14 },
                labelStyle,
              ]}
            >
              {label}
            </Text>
            {children}
          </View>
        )}
      </View>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          mode == 'outline' ? Common.button2.outline2 : Common.button2.rounded2,
          buttonStyle,
        ]}
      >
        {isLoading ? (
          <ActivityIndicator
            color={Colors.primary}
            size={20}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <View
            style={[
              Layout.fill,
              {
                width: '100%',
              },
              Layout.row,
              Layout.alignItemsCenter,
              children ? Layout.center : Layout.justifyContentCenter,
            ]}
          >
            <View>
              <Image
                source={Images.icons.iconGift}
                style={{ width: 17, height: 17, marginLeft: -25 }}
              />
            </View>
            <Gap width={5} />
            <Text
              style={[
                Fonts.textRegular,
                { color: Colors.primary, fontSize: 14 },
                labelStyle,
              ]}
            >
              {label}
            </Text>
            {children}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

ButtonCustom.defaultProps = {
  onPress: () => {},
  mode: 'fill',
  label: '',
  disabled: false,
  isLoading: false,
  labelStyle: {},
  buttonStyle: {
    borderWidth: 2,
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
  },
  children: null,
};

export default ButtonCustom;
