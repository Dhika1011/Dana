/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import buttonStyles from './components/Buttons';
import { CommonParams } from '../../@types/theme';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.textGray400,
        height: 45,
        borderRadius: 10,
        paddingStart: 20,
      },
    }), button2: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary2: {
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: (borderColor: string,backgroundColor:string) => ({
        // maxWidth:'100%',
        flexGrow:1,
        borderWidth: 2,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: Colors.text,
        fontFamily: 'Manrope-Regular',
        minHeight: 50,
        paddingHorizontal: 10,
        borderRadius: 8,
      }),
    }),
  };
  
}
