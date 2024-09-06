import React from 'react'


import { IoHeadset } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { GoVideo } from "react-icons/go";
import { RiPlayListFill } from "react-icons/ri";
import { FcMusic } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
			<a href='/'>
				<em aria-hidden='true'></em>
				<FcMusic />
				<span>뮤직<br />오늘</span>
			</a>
        </h1>

		<nav className='header__menu'>
			<ul className='menu'>
				<li className='active'>
					<a href='/'>
						<IoHeadset />뮤직오늘
					</a>
				</li>
				<li className='artist'>
					<a href='/artist'>
						<FaRegStar />아티스트
					</a>
				</li>
				<li className='musicvideo'>
					<a href='/musicvideo'>
						<GoVideo />뮤직비디오
					</a>
				</li>
				<li className='playlist'>
					<a href='/playlist'>
						<RiPlayListFill />맞춤형플리
					</a>
				</li>
			</ul>
			<ul className='keyword'>
				<li>
					<a href='/search/비 오는 날 플리'>비 오는 날 듣기 좋은 <IoIosSearch /></a>
				</li>
				<li>
					<a href='/search/공부집중 잘 되는 플리<'>공부집중 잘 되는 <IoIosSearch /></a>
				</li>
				<li>
					<a href='/search/드라이브 신나는 플리'>드라이브 신나는 플리 <IoIosSearch /></a>
				</li>
				
			</ul>
		</nav>
    </header>
  )
}

export default Header