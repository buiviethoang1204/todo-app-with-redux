import { combineReducers } from "@reduxjs/toolkit";
import filtersReducer from "../components/Filters/filtersSlice";
import todoListReducer from "../components/TodoList/todoSlice";

// const rootReducer = (state = {}, action) => {
//     console.log(state, action);
//     return {
//         filter: filtersReducer(state.filter, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;
