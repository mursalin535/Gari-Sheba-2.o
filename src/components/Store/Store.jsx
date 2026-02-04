import { configureStore } from '@reduxjs/toolkit';
import testimonialReducer from './TestimonialSlice';
import offersReducer from './Offers'
import carReducer from './Cars'
import truckReducer from './Trucks'
import jeepReducer from './Jeeps'
import superCarReducer from './SuperCars';
import serviceReducer from './ServiceCompany'
import insuranceReducer from './InsuranceCompany';
import carExpertReducer from './Experts'

const store = configureStore({
    reducer: {
        testimonials: testimonialReducer,
        offers:offersReducer,
        cars:carReducer,
        trucks:truckReducer,
        jeeps:jeepReducer,
        superCars:superCarReducer,
        ServiceCompany:serviceReducer,
        insuranceCompany:insuranceReducer,
        carExperts:carExpertReducer
    }
});

export default store;
