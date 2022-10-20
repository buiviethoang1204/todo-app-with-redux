import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})