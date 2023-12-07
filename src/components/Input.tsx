import React, { useRef, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useTheme } from '../hooks';
import { Colors } from '../theme/Variables';

type Props = {
  height?: number | string;
  mode?: 'plain' | 'outline';
  title?: string;
  onChangeText?: any;
  editable?: boolean;
  value?: string;
  maxLength?: number;
  placeholder?: string;
  isError?: boolean;
  errorMsg?: string;
  keyboardType?: 'default';
  autoCapitalize?: 'characters' | 'none' | 'words' | 'sentences';
  secureTextEntry?: boolean;

  style?: any;
  setSecureTextEntry?: any;
  onBlur?: any;
  onFocus?: any;
};
const eyeStyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 52,
};
const Serchtyle = {
  position: 'absolute',
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  width: 30,
  height: 52,
};

const Input = ({
  height,
  mode,
  onBlur,
  onFocus,
  style,
  title,
  onChangeText,
  editable,
  value,
  maxLength,
  placeholder,
  keyboardType,
  autoCapitalize,
  isError,
  errorMsg,
  secureTextEntry,

  setSecureTextEntry,
}: Props) => {
  const { Layout, Common, Fonts } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const borderColor = isFocus
    ? Colors.primary
    : isError
    ? Colors.Black
    : 'rgba(0,0,0,0.05)';
  const textColor = isFocus ? Colors.primary : Colors.gray;
  const fontStyle = isFocus
    ? Fonts.textRegular
    : isError
    ? Fonts.textRegular
    : Fonts.textSmall;
  const backgroundColor = editable ? Colors.inputBackground : '#F4F4F4';
  return (
    <View style={[{}, style]}>
      <Text style={[fontStyle, { fontSize: 12 }]}>{title}</Text>
      {/* <Gap height={6} /> */}
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        placeholderTextColor={Colors.gray}
        value={value}
        autoCapitalize={autoCapitalize}
        selectTextOnFocus
        onBlur={() => {
          setIsFocus(false);
          onBlur();
        }}
        onFocus={() => {
          setIsFocus(true);
          onFocus();
        }}
        secureTextEntry={secureTextEntry}
        textAlignVertical="center"
        style={[Common.textInput(borderColor, backgroundColor)]}
      />
      {isError && (
        <Text
          style={[
            Fonts.textSmall,
            {
              position: 'absolute',
              bottom: 3,
              left: 8,
              color: Colors.primary,
              fontSize: 9.5,
              marginHorizontal: 4,
            },
          ]}
        >
          {errorMsg}
        </Text>
      )}
      {title?.toLowerCase().includes('kata sandi') && (
        <TouchableOpacity
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          style={eyeStyle}
        >
          <MaterialCommunityIcons
            name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
            style={{ fontSize: 25, color: Colors.gray }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

Input.defaultProps = {
  height: 35,
  mode: 'plain',
  title: '',
  onChangeText: undefined,
  editable: true,
  value: '',
  maxLength: null,
  placeholder: '',
  keyboardType: 'default',
  autoCapitalize: 'words',
  isError: false,
  errorMsg: '',
  secureTextEntry: false,
  style: {},
  textContentType: '',
  setSecureTextEntry: null,
  onBlur: () => {},
  onFocus: () => {},
};

export default Input;
