import { createSlice } from "@reduxjs/toolkit";
import { searchFilter } from "../../redux/actions";

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

export default searchFilter;
