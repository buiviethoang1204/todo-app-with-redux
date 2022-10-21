import { createSlice } from "@reduxjs/toolkit";
import { addTodo } from "../../redux/actions";

export const todoSlice = createSlice({
    name: 'todoList',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})  

export default addTodo;
