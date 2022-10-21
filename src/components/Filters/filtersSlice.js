import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
    name: 'filter',
    initialState: {
        search: '',
        status: ''
    },
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload
        }, 
    }
})

export const { searchFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
