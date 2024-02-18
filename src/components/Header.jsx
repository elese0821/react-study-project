import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/'>홈</Link>
            <Link to='/list'>가자</Link>
        </div>
    )
}

export default Header