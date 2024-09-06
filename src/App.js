import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Artist from './pages/Artist'
import Musicvideo from './pages/Musicvideo'
import Playlist from './pages/Playlist'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/section/Footer';

const App = () => {
	return (
		<BrowserRouter>
		<Header />
		<Main>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/artist' element={<Artist />}/>
				<Route path='/musicvideo' element={<Musicvideo/>}/>
				<Route path='/playlist' element={<Playlist />}/>
				<Route path='/channel/:channelId' element={<Channel />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/search/:searchId' element={<Search />} />
                <Route path='*' element={<Not />} />
			</Routes>
		</Main>
		<Footer />
		</BrowserRouter>
	)
}

export default App;