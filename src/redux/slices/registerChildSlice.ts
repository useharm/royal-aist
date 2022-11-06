import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type contactsType = {
    name: string;
    phone: string;
}

export type inputTypes = {
    junior: boolean;
    middle: boolean;
    senior: boolean;
}

type membersType = {
    count: number;
    groups: inputTypes;
    contacts: contactsType;
}

interface registerChildType {
    members: membersType[],
}

const initialState: registerChildType = {
    members: [],
}


const registerChildSlice = createSlice({
    name: 'registerChild',
    initialState,
    reducers: {
        setNewChild: (state, action: PayloadAction<membersType>) => {
            state.members = [...state.members, action.payload]
        }
    }
})


export const registerChildSelector = (state: RootState) => state.registerChildSlice; 
export const { setNewChild } = registerChildSlice.actions;
export default registerChildSlice.reducer;