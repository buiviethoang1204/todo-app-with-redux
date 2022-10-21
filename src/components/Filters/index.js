import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import searchFilter from './filtersSlice'

function Filters() {
    const [searchText, setSearchText] = useState('')

    const dispatch = useDispatch()

    const handleSearchChange = (e) => {
        setSearchText(e.target.value)
        dispatch(searchFilter(e.target.value))
    }

    return (
        <>
            <div>
                <label>Search</label>
                <input
                onChange={handleSearchChange}
                value={searchText}
                type='text'
                placeholder='search'
                style={{
                    margin: 10,
                    padding: 10
                }}
                />
            </div>
            <br/>
            
        </>
    )
}

export default Filters
