import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filtersSlice";
import todoReducer from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer: {
        filter: filterReducer,
        todoList: todoReducer
    }
})

export default store
