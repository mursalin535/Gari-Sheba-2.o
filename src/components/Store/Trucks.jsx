import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, img: '/Truck1.webp', price: '125,000$' },
  { id: 2, img: '/Truck2.webp', price: '142,000$' },
  { id: 3, img: '/Truck3.webp', price: '118,500$' },
  { id: 4, img: '/Truck4.webp', price: '160,000$' },
  { id: 5, img: '/Truck5.webp', price: '95,000$' },
  { id: 6, img: '/Truck6.webp', price: '139,900$' },
];

const truckSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    // Adds a new truck to the inventory
    addTruck: (state, action) => {
      state.push(action.payload);
    },

    // Removes a truck from the inventory via its ID
    deleteTruck: (state, action) => {
      return state.filter((truck) => truck.id !== action.payload);
    },
  },
});

export const { addTruck, deleteTruck } = truckSlice.actions;
export default truckSlice.reducer;
