import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    phones: 5
}

const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        phones: state => {
            state.phones--
        }
    }
})

export default phoneSlice.reducer;
export const { phones } = phoneSlice.actions;