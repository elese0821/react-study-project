import React, { useEffect, useState } from 'react'

const List = () => {
    const [list, setList] = useState(['11', '22'])
    const [inputValue, setInputValue] = useState('')
    const addToList = () => {
        setList((prevList) => {
            return [inputValue, ...prevList]
        })
        setInputValue('')
    }

    useEffect(() => {
        console.log('hi')
    }, [])
    return (
        <>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={addToList}>추가</button>

            <ul>
                {list.map((el, i) => {
                    return <li key={i}>{el}</li>
                })}
            </ul>
        </>
    )
}

export default List