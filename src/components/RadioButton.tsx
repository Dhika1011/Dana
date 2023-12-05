import React from 'react';
import { View, Text } from 'react-native';
import { Colors } from '@/Theme/Variables';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTheme } from '@/hooks';

type Props = {
  isDisabled?: boolean;
  value?: boolean;
  label?: string;
  onPress?: any;
};

const RadioButton = ({ value, label, onPress, isDisabled }: Props) => {
  const { Layout, Gutters, Fonts } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[
        Layout.alignItemsCenter,
        Layout.row,
        { paddingVertical: 15, paddingRight: 40 },
      ]}
    >
      <View
        style={[
          Layout.alignItemsCenter,
          Layout.justifyContentCenter,
          {
            height: 20,
            width: 20,
            borderWidth: 1,
            borderColor: isDisabled
              ? Colors.lightGray
              : value == true
              ? Colors.success
              : Colors.lightGray,
            borderRadius: 10,
            marginRight: 10,
          },
        ]}
      >
        <View
          style={[
            {
              height: 10,
              width: 10,
              backgroundColor: isDisabled
                ? Colors.lightGray
                : value == true
                ? Colors.success
                : Colors.white,
              borderRadius: 10,
            },
          ]}
        />
      </View>
      <Text
        style={[
          Fonts.textSmall,
          {
            fontSize: 14,
            color: isDisabled
              ? Colors.lightGray
              : value == true
              ? Colors.success
              : Colors.Background,
          },
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

RadioButton.defaultProps = {
  isDisabled: false,
  value: false,
  label: '',
  onPress: () => {},
};

export default RadioButton;
