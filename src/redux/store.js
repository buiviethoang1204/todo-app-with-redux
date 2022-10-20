import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todoSlice from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer: {
        filter: filtersSlice.reducer,
        todoList: todoSlice.reducer
    }
})

export default store