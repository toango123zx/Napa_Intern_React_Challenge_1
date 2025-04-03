import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header header__background">
            <Link to='/' className='header__logo'>
                <button className='button  header__button--logo'>IMDb</button>
            </Link>
        </div>
    )
}
