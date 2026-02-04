import { createSlice } from '@reduxjs/toolkit';

let id = 0;

const initial = [
  {
    id: id++,
    name: 'Abdul Malik',
    image: 'abdul_malik.webp',
    rating: "5/5",
    userExp: 5,
    saying: "Absolutely amazing platform! Sold my car in just 3 days and got the best price. The process was smooth and hassle-free throughout."
  },
  {
    id: id++,
    name: 'Sarah Johnson',
    image: 'sarah_johnson.webp',
    rating: "4.5/5",
    userExp: 3,
    saying: "Found my dream car here at an unbeatable price. The seller was genuine and the verification process gave me peace of mind."
  },
  {
    id: id++,
    name: 'Michael Chen',
    image: 'michael_chen.webp',
    rating: "5/5",
    userExp: 7,
    saying: "Been using this platform for years. Insurance comparison saved me thousands! Customer support is responsive and genuinely helpful every time."
  },
  {
    id: id++,
    name: 'Priya Sharma',
    image: 'priya_sharma.webp',
    rating: "4/5",
    userExp: 2,
    saying: "Great service booking system! Found a reliable mechanic nearby and got my car serviced at a reasonable price."
  },
  {
    id: id++,
    name: 'James Williams',
    image: 'james_williams.webp',
    rating: "5/5",
    userExp: 4,
    saying: "The marketplace is fantastic! Bought and sold multiple cars here. Trustworthy sellers and fair deals."
  },
  {
    id: id++,
    name: 'Nupur Ahmed',
    image: 'nupur_ahmed.webp',
    rating: "4.5/5",
    userExp: 6,
    saying: "One-stop solution for everything car-related. From buying to insurance to servicing, everything is seamless."
  },
  {
    id: id++,
    name: 'Daniel Roberts',
    image: 'daniel_roberts.webp',
    rating: "5/5",
    userExp: 8,
    saying: "Very professional platform. Transparent pricing and genuine listings made my buying experience stress-free."
  },
  {
    id: id++,
    name: 'Ayesha Khan',
    image: 'ayesha_khan.webp',
    rating: "4/5",
    userExp: 3,
    saying: "Insurance plans were clearly explained and easy to compare. Helped me choose the right coverage quickly."
  },
  {
    id: id++,
    name: 'Robert Miller',
    image: 'robert_miller.webp',
    rating: "5/5",
    userExp: 6,
    saying: "Customer support deserves a shoutout. They guided me through every step of selling my vehicle."
  },
  {
    id: id++,
    name: 'Sneha Patel',
    image: 'sneha_patel.webp',
    rating: "4.5/5",
    userExp: 4,
    saying: "Smooth UI and reliable information. Booking car services has never been easier."
  }
];

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: initial,
  reducers: {
    addTestimonial: (state, action) => {
      state.push(action.payload);
    },
    removeTestimonial: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
    updateTestimonial: (state, action) => {
      const index = state.findIndex(t => t.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    getUser: (state, action) => {
      return state.find(t => t.id === action.payload);
    },
    getAllUsers: (state) => state
  }
});

export const {
  addTestimonial,
  removeTestimonial,
  updateTestimonial,
  getUser,
  getAllUsers
} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;

