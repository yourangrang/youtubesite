import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main';


const Home = lazy(() => import('./pages/Home'));
const Artist = lazy(() => import('./pages/Artist'));
const Musicvideo = lazy(() => import('./pages/Musicvideo')); 
const Playlist = lazy(() => import('./pages/Playlist')); 
const Channel = lazy(() => import('./pages/Channel')); 
const Video = lazy(() => import('./pages/Video')); 
const Search = lazy(() => import('./pages/Search')); 
const Not = lazy(() => import('./pages/Not')); 



const App = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<Main />}>
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
			</Suspense>
		</BrowserRouter>
	)
}

export default App;