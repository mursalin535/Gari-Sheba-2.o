import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "Winter Discount, But It’s Hot ", prev: "$75,000", now: "$60,000", dis: "20%", img: "/OfferCar1.jpg" },
  { id: 2, title: "Luxury Ride, Crazy Deal", prev: "$120,000", now: "$96,000", dis: "20%", img: "/OfferCar2.avif" },
  { id: 3, title: "Speed Meets Savings", prev: "$95,000", now: "$76,000", dis: "20%", img: "/OfferCar3.jpg" },
  { id: 4, title: "Future Ready, Budget Steady", prev: "$88,000", now: "$70,400", dis: "20%", img: "/OfferCar4.webp" },
  // Adding your new assets
  { id: 5, title: "Off-Road King, Urban Price", prev: "$55,000", now: "$44,000", dis: "20%", img: "/OfferCar5.webp" },
  { id: 6, title: "Family Comfort, Small Price", prev: "$45,000", now: "$36,000", dis: "20%", img: "/OfferCar6.webp" },
  { id: 7, title: "The Hybrid Hero", prev: "$62,000", now: "$49,600", dis: "20%", img: "/OfferCar7.webp" },
  { id: 8, title: "Turbo Charged Savings", prev: "$105,000", now: "$84,000", dis: "20%", img: "/OfferCar8.webp" },
  { id: 9, title: "Vintage Soul, Modern Deal", prev: "$150,000", now: "$120,000", dis: "20%", img: "/OfferCar9.webp" },
  { id: 10, title: "Sleek Street Performer", prev: "$98,000", now: "$78,400", dis: "20%", img: "/OfferCar10.webp" },
  { id: 11, title: "Midnight Edition Special", prev: "$115,000", now: "$92,000", dis: "20%", img: "/OfferCar11.webp" },
];

const offerSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    AddOffer: (state, action) => {
      state.push(action.payload);
    },
    DeleteOffer: (state, action) => {
      return state.filter((offer) => offer.id !== action.payload);
    },
  },
});

export const { AddOffer, DeleteOffer } = offerSlice.actions;
export default offerSlice.reducer;
