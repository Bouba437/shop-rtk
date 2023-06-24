import { createSlice } from "@reduxjs/toolkit";
import { tvs as tvActions } from "../tvs/tvSlice";

const initialState = {
    phones: 5,
    tablets: 10
}

const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        phones: (state, action) => { // Action {type: 'phone/phones', payload: undefined}
            state.phones -= action.payload
        },
        tablets: (state, action) => {
            state.tablets -= action.payload
        }
    },
    extraReducers: builder => { // Action {type: 'phone/tablets', payload: number}
        builder.addCase(tvActions, (state, action) => {
            state.phones -= action.payload
        })
    }
})

export default phoneSlice.reducer;
export const { phones, tablets } = phoneSlice.actions;