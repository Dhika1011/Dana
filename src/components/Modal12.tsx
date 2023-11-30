import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Linking,
  AppRegistry,
  Alert,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { Colors } from '@/theme/Variables';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { ModalState, changeHomeModal } from '@/store/homeModal';

const Modal12 = () => {
  onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };

  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const homeModal = useSelector((state: { homeModal: any }) => state.homeModal);
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', e => {
      // Prevent default behavior
      e.preventDefault();

      // Do something manually
      // ...
      console.log('clicked');
      dispatch(changeHomeModal({ isVisibleModal: true }));
    });

    return unsubscribe;
  }, [navigation, homeModal, changeHomeModal]);

  console.log('isVisibleModal', homeModal.isVisibleModal);
  return (
    <Modal
      testID={'modal'}
      isVisible={homeModal.isVisibleModal}
      onSwipeComplete={() =>
        dispatch(changeHomeModal({ isVisibleModal: false }))
      }
      swipeDirection={['up', 'left', 'right', 'down']}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <View
        style={{
          height: 400,
          width: 400,
          backgroundColor: Colors.white,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => dispatch(changeHomeModal({ isVisibleModal: false }))}
        >
          <Text>I am the modal content!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default Modal12;
