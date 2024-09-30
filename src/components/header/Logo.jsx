import React from 'react'
import { Link } from 'react-router-dom';

import { FcMusic } from "react-icons/fc";

const Logo = ({ toggleMenu }) => {
  return (
        <h1 className='header__logo'>
			<Link to='/'>
				<em aria-hidden='true' onClick={toggleMenu}><FcMusic /><p className='menubtn'></p></em>
				<span>뮤직<br />오늘</span>
			</Link>
        </h1>
  )
}

export default Logo