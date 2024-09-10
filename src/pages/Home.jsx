import React from 'react'
import Main from '../components/section/Main'
import Artist from '../components/contents/Artist'
import Musicvideo from '../components/contents/Musicvideo'
import Playlist from '../components/contents/Playlist'


const Home = () => {
    return (
        <Main 
            title = "뮤직오늘"
            description="뮤직오늘 사이트에 오신 것을 환영합니다.">
            
            <Artist />
            <Musicvideo />
            <Playlist />
        </Main>
    )
}

export default Home