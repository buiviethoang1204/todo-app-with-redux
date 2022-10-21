import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { todoRemainingSelector } from '../../redux/selectors'
import addTodo from './todoSlice'

function TodoList() {
    const inputRef = useRef()
    const [todoName, setTodoName] = useState('')
    const todoList = useSelector(todoRemainingSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleAddBtnCkick = () => {
        dispatch(addTodo({
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
        <>
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
        </>
        
    )
}

export default TodoList
