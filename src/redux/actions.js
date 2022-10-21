export const addTodo = data => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilter = data => {
    return {
        type: 'filter/searchFilter',
        payload: data
    }
}

export const statusFilter = data => {
    return {
        type: 'filter/statusFilter',
        payload: data
    }
}
