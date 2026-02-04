import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, img: '/Car1.webp', price: '85,000$' },
  { id: 2, img: '/Car2.webp', price: '92,000$' },
  { id: 3, img: '/Car3.webp', price: '78,500$' },
  { id: 4, img: '/Car4.webp', price: '110,000$' },
  { id: 5, img: '/Car5.webp', price: '65,000$' },
  { id: 6, img: '/Car6.webp', price: '89,900$' },
];

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    // Adds a new car to the inventory
    addCar: (state, action) => {
      state.push(action.payload);
    },

    // Removes a car from the inventory via its ID
    deleteCar: (state, action) => {
      return state.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addCar, deleteCar } = carSlice.actions;
export default carSlice.reducer;
