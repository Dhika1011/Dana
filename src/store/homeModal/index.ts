import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'homeModal',
  initialState: { 
    isVisibleModal: false
 } as ModalState,
  reducers: {
    changeHomeModal: (state, { payload: { isVisibleModal } }: ModalPayload) => {
      if (typeof isVisibleModal !== 'undefined') {
        state.isVisibleModal = isVisibleModal;
      }
    }
  },
});

export const { changeHomeModal } = slice.actions;

export default slice.reducer;

export type ModalState = {
  isVisibleModal:boolean;
};

type ModalPayload = {
  payload: ModalState;
};
