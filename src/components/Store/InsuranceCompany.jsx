import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    company: "Liberty Manuel Insurance",
    pay: "120$/annual",
    given: "3,200+",
    rating: "4.3/5",
    satisfactory: "79%",
    offering: "100,000$",
    logo: "/insucom1.webp",
    details:
      "Liberty Manuel Insurance offers dependable coverage built for everyday drivers. With flexible plans, responsive claim handling, and competitive pricing, it delivers a balanced insurance solution for customers seeking reliability, affordability, and long-term peace of mind."
  },
  {
    id: 2,
    company: "United Healthcare Insurance",
    pay: "150$/annual",
    given: "5,400+",
    rating: "4.5/5",
    satisfactory: "85%",
    offering: "150,000$",
    logo: "/insucom2.webp",
    details:
      "United Healthcare Insurance provides premium coverage with industry-leading customer satisfaction. Designed for those who value strong financial protection, fast claim processing, and nationwide support, it is a trusted option for comprehensive and secure insurance coverage."
  },
  {
    id: 3,
    company: "State Farm Insurance",
    pay: "95$/annual",
    given: "2,800+",
    rating: "4.2/5",
    satisfactory: "76%",
    offering: "80,000$",
    logo: "/insucom3.webp",
    details:
      "State Farm Insurance focuses on affordable and essential coverage. It is ideal for budget-conscious customers looking for straightforward policies, dependable service, and consistent support from a well-established and trusted insurance provider."
  },
  {
    id: 4,
    company: "Allstate Protection Insurance",
    pay: "135$/annual",
    given: "4,100+",
    rating: "4.4/5",
    satisfactory: "82%",
    offering: "120,000$",
    logo: "/insucom4.webp",
    details:
      "Allstate Protection Insurance combines strong coverage with proactive customer care. Its policies emphasize risk protection, flexibility, and long-term security, making it a solid choice for customers who prioritize safety and customized insurance solutions."
  },
  {
    id: 5,
    company: "Progressive Auto Insurance",
    pay: "110$/annual",
    given: "3,900+",
    rating: "4.1/5",
    satisfactory: "74%",
    offering: "90,000$",
    logo: "/insucom5.webp",
    details:
      "Progressive Auto Insurance is known for competitive pricing and digital convenience. It suits modern drivers who want flexible plans, transparent pricing, and efficient online services without compromising on essential coverage and claim reliability."
  },
 
  {
    id: 7,
    company: "Geico Insurance Services",
    pay: "105$/annual",
    given: "4,500+",
    rating: "4.6/5",
    satisfactory: "87%",
    offering: "95,000$",
    logo: "/insucom7.webp",
    details:
      "Geico Insurance Services stands out for excellent customer satisfaction and cost-effective plans. With fast digital claims, easy policy management, and strong support, it is ideal for customers seeking efficiency, savings, and top-rated service."
  },
  {
    id: 8,
    company: "Farmers Insurance Group",
    pay: "140$/annual",
    given: "3,300+",
    rating: "4.2/5",
    satisfactory: "78%",
    offering: "105,000$",
    logo: "/insucom8.webp",
    details:
      "Farmers Insurance Group provides personalized insurance solutions with flexible coverage options. Known for customer-focused service and tailored plans, it is well-suited for individuals seeking customized protection and dependable long-term support."
  }
];

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    addInsurance: (state, action) => {
      state.push(action.payload);
    },
    removeInsurance: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateInsurance: (state, action) => {
      const index = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    sortByRating: (state) => {
      state.sort((a, b) => {
        const ratingA = parseFloat(a.rating.split("/")[0]);
        const ratingB = parseFloat(b.rating.split("/")[0]);
        return ratingB - ratingA;
      });
    },
    sortByPrice: (state) => {
      state.sort((a, b) => {
        const priceA = parseInt(a.pay.replace(/\D/g, ""));
        const priceB = parseInt(b.pay.replace(/\D/g, ""));
        return priceA - priceB;
      });
    }
  }
});

export const {
  addInsurance,
  removeInsurance,
  updateInsurance,
  sortByRating,
  sortByPrice
} = insuranceSlice.actions;

export default insuranceSlice.reducer;
