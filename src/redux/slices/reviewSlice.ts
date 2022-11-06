import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";



type reviewType = {
    title: string;
    name: string;
}
interface reviewsType {
    reviews: reviewType[],
}
const initialState: reviewsType = {
    reviews: [{
        title: `I want to express my gratitude to you once again! You have
        a wonderful kindergarten and an amazing teaching staff!
        Ilyasik has such positive changes, the whole family can't stop admiring you all!`,
        name: 'Maria Sofarova',
    },
    {
        title: `My daughter Maryam started going to Stork Academy every day for 3 months.
        My original goal was at least adapted to understand the command in Russian,
        but how happy I was even now at home.`,
        name: 'Irina Maksimova',
    },
    {
        title: `I think that for children who go to English-speaking kindergartens, the Russian-speaking
        winter camp in Aist
        is a great opportunity to keep their 2nd language. The center is located in its own
        separate villa with a good area`,
        name: 'Anna Bobrenko',
    },], 
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        setReview: (state, action: PayloadAction<reviewType>) => {
            state.reviews = [...state.reviews, action.payload]
        }
    }
})

export const reviewSelector = (state: RootState) => state.reviewSlice; 
export const { setReview } = reviewSlice.actions;
export default reviewSlice.reducer;