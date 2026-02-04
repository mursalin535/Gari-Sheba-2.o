import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, img: '/jeep1.webp', price: '95,000$' },
  { id: 2, img: '/jeep2.webp', price: '102,000$' },
  { id: 3, img: '/jeep3.webp', price: '88,500$' },
  { id: 4, img: '/jeep4.webp', price: '115,000$' },
  { id: 5, img: '/jeep5.webp', price: '79,000$' },
  { id: 6, img: '/jeep6.webp', price: '124,900$' },
  { id: 7, img: '/jeep7.webp', price: '108,000$' },
  { id: 8, img: '/jeep8.webp', price: '135,000$' },
];

const jeepSlice = createSlice({
  name: 'jeeps',
  initialState,
  reducers: {
    addJeep: (state, action) => {
      state.push(action.payload);
    },
    deleteJeep: (state, action) => {
      return state.filter((jeep) => jeep.id !== action.payload);
    },
  },
});

export const { addJeep, deleteJeep } = jeepSlice.actions;
export default jeepSlice.reducer;
