import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';



interface menuType {
    isOpenMobile: boolean;
    isOpenReview: boolean;
    isOpenSignUp: boolean;
}

const initialState: menuType = {
    isOpenMobile: false,
    isOpenReview: false,
    isOpenSignUp: false,
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setOpenMobile: (state, action: PayloadAction<boolean>) => {
            state.isOpenMobile = action.payload;
        },
        setOpenReview: (state, action: PayloadAction<boolean>) => {
            state.isOpenReview = action.payload;
        },
        setOpenSignUp: (state, action: PayloadAction<boolean>) => {
            state.isOpenSignUp = action.payload;
        },
    }})

export const menuSelector = (state: RootState) => state.menuSlice;
export const { setOpenMobile, setOpenReview, setOpenSignUp } = menuSlice.actions;
export default menuSlice.reducer;