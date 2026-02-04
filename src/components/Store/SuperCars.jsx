import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, img: '/supercar1.webp', price: '250,000$' },
  { id: 2, img: '/supercar2.webp', price: '310,000$' },
  { id: 3, img: '/supercar3.webp', price: '285,000$' },
  { id: 4, img: '/supercar4.webp', price: '420,000$' },
  { id: 5, img: '/supercar5.webp', price: '195,000$' },
  { id: 6, img: '/supercar6.webp', price: '389,000$' },
  { id: 7, img: '/supercar7.webp', price: '275,000$' },
  { id: 8, img: '/supercar8.webp', price: '550,000$' },
  { id: 9, img: '/supercar9.webp', price: '325,000$' },
];

const superCarSlice = createSlice({
  name: 'supercars',
  initialState,
  reducers: {
    addSuperCar: (state, action) => {
      state.push(action.payload);
    },
    deleteSuperCar: (state, action) => {
      return state.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addSuperCar, deleteSuperCar } = superCarSlice.actions;
export default superCarSlice.reducer;
