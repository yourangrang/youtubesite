import React, { useState } from 'react'
import Menu from '../header/Menu'
import Logo from '../header/Logo'

const Header = () => {
    const [ isMenuActive, setIsMenuActive ] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuActive(!isMenuActive);
    }
	

    return (
        <header id='header' role='banner' className={isMenuActive? 'active':''}>
            <Logo toggleMenu={toggleMenu}/>
            <Menu />
        </header>
    )
}

export default Header