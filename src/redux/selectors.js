import { createSelector } from "@reduxjs/toolkit"

export const searchTextSelector = state => state.filter.search
export const todoListSelector = state => state.todoList
//reselect
export const todoRemainingSelector = createSelector(
    todoListSelector,
    searchTextSelector,
    (todoList, searchText) => {
        return todoList.filter(todo => {
            return todo.name.includes(searchText)
        })
    })
    