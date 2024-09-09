import React from 'react'

import { FcMusic } from "react-icons/fc";

const Logo = () => {
  return (
        <h1 className='header__logo'>
			<a href='/'>
				<em aria-hidden='true'></em>
				<FcMusic />
				<span>뮤직<br />오늘</span>
			</a>
        </h1>
  )
}

export default Logo