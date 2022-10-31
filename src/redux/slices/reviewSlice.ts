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
    reviews: [],
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

export const reviewSelector = (state: RootState) => state.reviewSlice.reviews; 
export const { setReview } = reviewSlice.actions;
export default reviewSlice.reducer;