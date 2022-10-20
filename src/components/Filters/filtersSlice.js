import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
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