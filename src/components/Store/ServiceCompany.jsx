import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        name: 'Garage Grudges',
        location: 'Dhanmondi-32, Dhaka',
        Owner: 'Abul Kalam',
        top: 'Repair, Wash, Services, Engines',
        rating: '4.5/5',
        reviews: '2k',
        logo: 'service1.webp'
    },
    {
        id: 2,
        name: 'Auto Care Plus',
        location: 'Gulshan-1, Dhaka',
        Owner: 'Karim Rahman',
        top: 'Body Work, Paint, Detailing, AC Repair',
        rating: '4.7/5',
        reviews: '3.5k',
        logo: 'service2.webp'
    },
    {
        id: 3,
        name: 'Speed Zone Garage',
        location: 'Banani, Dhaka',
        Owner: 'Shakib Ahmed',
        top: 'Engine Tuning, Performance, Brake Service',
        rating: '4.3/5',
        reviews: '1.8k',
        logo: 'service3.webp'
    },
    {
        id: 4,
        name: 'Elite Motors',
        location: 'Mirpur-10, Dhaka',
        Owner: 'Hasan Ali',
        top: 'Electrical, Diagnostics, Oil Change, Tires',
        rating: '4.6/5',
        reviews: '2.7k',
        logo: 'service4.webp'
    },
    {
        id: 5,
        name: 'City Car Center',
        location: 'Uttara, Dhaka',
        Owner: 'Rafiq Uddin',
        top: 'General Repair, Suspension, Alignment',
        rating: '4.4/5',
        reviews: '2.1k',
        logo: 'service5.webp'
    },
    {
        id: 6,
        name: 'Premium Auto Works',
        location: 'Mohakhali, Dhaka',
        Owner: 'Nasir Hossain',
        top: 'Luxury Cars, Detailing, Restoration',
        rating: '4.8/5',
        reviews: '4.2k',
        logo: 'service6.webp'
    },
    {
        id: 7,
        name: 'Quick Fix Garage',
        location: 'Tejgaon, Dhaka',
        Owner: 'Monir Khan',
        top: 'Quick Service, Oil Change, Battery, Inspection',
        rating: '4.2/5',
        reviews: '1.5k',
        logo: 'service7.webp'
    },
    {
        id: 8,
        name: 'Metro Auto Service',
        location: 'Motijheel, Dhaka',
        Owner: 'Jahangir Alam',
        top: 'Transmission, Clutch, Brake, Exhaust',
        rating: '4.5/5',
        reviews: '2.3k',
        logo: 'service8.webp'
    },
    {
        id: 9,
        name: 'Royal Car Clinic',
        location: 'Bashundhara, Dhaka',
        Owner: 'Salam Sheikh',
        top: 'Full Service, Engine, Body, Paint, Detailing',
        rating: '4.9/5',
        reviews: '5.1k',
        logo: 'service9.webp'
    }
];

const ServicesSlice = createSlice({
    name: 'Services',
    initialState,
    reducers: {
        addGarage: (state, action) => {
            state.push(action.payload);
        },
        removeGarage: (state, action) => {
            return state.filter(garage => garage.id !== action.payload);
        },
        updateGarage: (state, action) => {
            const index = state.findIndex(garage => garage.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        updateRating: (state, action) => {
            const { id, rating, reviews } = action.payload;
            const garage = state.find(g => g.id === id);
            if (garage) {
                garage.rating = rating;
                garage.reviews = reviews;
            }
        }
    }
});

export const { addGarage, removeGarage, updateGarage, updateRating } = ServicesSlice.actions;
export default ServicesSlice.reducer;
