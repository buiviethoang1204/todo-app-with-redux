import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { todoRemainingSelector } from '../../redux/selectors'
import todoSlice from './todoSlice'

function TodoList() {
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const [todoName, setTodoName] = useState('')
    const todoList = useSelector(todoRemainingSelector)
    const dispatch = useDispatch()

    const handleAddBtnCkick = () => {
        dispatch(todoSlice.actions.addTodo({
            id: uuid(),
            name: todoName,
            completed: false    
        }))
        setTodoName('')
    }

    const handleInputChange = (e) => {
        setTodoName(e.target.value)
    }

    return (
        <div>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.name}</li>
                ))}
            </ul>
            <br/>
            <div>
                <label>Add todo</label>
                <input
                    ref={inputRef}
                    value={todoName}
                    onChange={handleInputChange}
                    type='text'
                    placeholder='Add todo...'
                    style={{
                        margin: 10,
                        padding: 10
                    }}
                />
                <button onClick={handleAddBtnCkick} style={{padding:10, cursor:'pointer'}}>Add</button>
            </div> 
        </div>
        
    )
}

export default TodoList
