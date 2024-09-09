import React from 'react'
import Menu from '../header/Menu'
import Logo from '../header/Logo'

const Header = () => {
	

    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
        </header>
    )
}

export default Header