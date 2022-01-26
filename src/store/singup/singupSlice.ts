import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SingUpState } from './types';
import type { RootState } from '../../store';

/* ------------- Initial State ------------- */
const initialState: SingUpState = {
  fullName: '',
  phone: '',
  address: '',
  location: [],
  gender: '',
  weight: '',
  stature: '',
  birthdate: '',
};

export const singUpSlice = createSlice({
  name: 'singUp',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateUserField: (state, action: PayloadAction<object>) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { updateUserField } = singUpSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.singup;

export default singUpSlice.reducer;
