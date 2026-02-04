import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 1,
        img: '/carExpert1.webp',
        name: 'Dr. Michael Robertson',
        qualification: 'Senior Car Insurance Expert',
        experience: '15 years',
        specialty: 'Comprehensive Coverage & Risk Assessment',
        sayAboutInsurance: 'Car insurance is important as cars engines and parts are expensive to repair or replace. A single accident can cost thousands in damages. Insurance protects you financially and legally on the road. To acquire car insurance, compare quotes from multiple providers, assess your coverage needs based on your vehicle value and driving habits, choose appropriate deductibles, and ensure you meet your state\'s minimum liability requirements. Always review policy exclusions and consider add-ons like roadside assistance.'
    },
    {
        id: 2,
        img: '/carExpert2.webp',
        name: 'Sarah Chen',
        qualification: 'Certified Auto Insurance Advisor',
        experience: '12 years',
        specialty: 'Claims Processing & Customer Advocacy',
        sayAboutInsurance: 'Many drivers underestimate the importance of comprehensive coverage until it\'s too late. Your car is likely one of your biggest investments, and protecting it should be a priority. When selecting insurance, don\'t just go for the cheapest option—evaluate the claims process, customer service ratings, and coverage limits. A good policy should cover collision, liability, uninsured motorists, and medical payments. Start by getting quotes online, review the fine print, and choose a provider with excellent customer reviews and fast claim settlements.'
    },
    {
        id: 3,
        img: '/carExpert3.webp',
        name: 'James Anderson',
        qualification: 'Auto Risk Management Specialist',
        experience: '18 years',
        specialty: 'High-Value Vehicle Insurance',
        sayAboutInsurance: 'Car insurance isn\'t just about protecting your vehicle—it\'s about protecting your financial future. Without proper coverage, a serious accident could lead to lawsuits, medical bills, and property damage claims that could bankrupt you. The method to acquire insurance is straightforward: determine your state\'s minimum requirements, assess your vehicle\'s value, gather quotes from at least 3-5 insurers, compare coverage options not just prices, and negotiate discounts for bundling, safe driving records, or anti-theft devices. Remember, adequate liability coverage is crucial.'
    },
    {
        id: 4,
        img: '/carExpert5.webp',
        name: 'Emily Martinez',
        qualification: 'Insurance Policy Analyst',
        experience: '10 years',
        specialty: 'Cost Optimization & Policy Comparison',
        sayAboutInsurance: 'The right car insurance can save you from financial disaster while the wrong one can drain your wallet unnecessarily. Engines, transmissions, and electronics are incredibly expensive—a major repair can easily exceed $5,000. To get the best insurance, start by understanding the different types: liability covers others you injure, collision covers your car in accidents, and comprehensive covers theft, weather, and vandalism. Request personalized quotes, check for discounts like good student, military, or multi-car rates, and review your policy annually to ensure it still meets your needs.'
    },
    {
        id: 5,
        img: '/carExpert6.webp',
        name: 'Robert Thompson',
        qualification: 'Senior Claims Adjuster',
        experience: '20 years',
        specialty: 'Accident Investigation & Fair Settlements',
        sayAboutInsurance: 'Having witnessed thousands of claims, I can confidently say that proper insurance is non-negotiable. Modern cars have complex computer systems, sensors, and safety features that are prohibitively expensive to repair out-of-pocket. Beyond vehicle damage, you need protection from liability if you cause injury or property damage to others. To acquire insurance efficiently: gather your driver\'s license, vehicle information, and driving history; use comparison websites to get multiple quotes; evaluate deductibles carefully—higher deductibles lower premiums but increase out-of-pocket costs; and always opt for adequate liability limits, ideally 100/300/100 or higher.'
    },
    {
        id: 6,
        img: '/carExpert4.webp',
        name: 'Lisa Park',
        qualification: 'Auto Insurance Consultant',
        experience: '14 years',
        specialty: 'New Driver & Teen Coverage',
        sayAboutInsurance: 'Car insurance is your financial safety net on the road. Engines alone can cost $5,000-$15,000 to replace, and that\'s before labor and additional damages. More importantly, if you cause an accident, you could be personally liable for hundreds of thousands in medical bills and property damage. The acquisition process is simple: identify what coverage you legally need in your state, determine what additional protection you want based on your car\'s value and your financial situation, collect quotes from both online and local insurers, verify the company\'s financial stability and claim satisfaction ratings, and finalize your policy. Don\'t forget to ask about usage-based insurance programs that can lower rates for safe drivers.'
    }
];

const carExpertsSlice = createSlice({
    name: 'carExperts',
    initialState,
    reducers: {
        addExpert: (state, action) => {
            state.push(action.payload);
        },
        removeExpert: (state, action) => {
            return state.filter(expert => expert.id !== action.payload);
        },
        updateExpert: (state, action) => {
            const index = state.findIndex(expert => expert.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        sortByExperience: (state) => {
            return state.sort((a, b) => {
                const expA = parseInt(a.experience);
                const expB = parseInt(b.experience);
                return expB - expA;
            });
        }
    }
});

export const { 
    addExpert, 
    removeExpert, 
    updateExpert, 
    sortByExperience 
} = carExpertsSlice.actions;

export default carExpertsSlice.reducer;
