import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today'
import Artist from '../components/contents/Artist'
import VideoSlider from '../components/videos/VideoSlider'

import { todayText } from '../data/today'
import { artistText } from '../data/artist'
import { playlistText } from '../data/playlist'
import { musicvideoText } from '../data/musicvideo'


const Home = () => {
    return (
        <Main 
            title = "뮤직오늘"
            description="뮤직오늘 사이트에 오신 것을 환영합니다.">
            
            <Today  videos={todayText} id="today"  />
            <Artist  videos={artistText} title="인기 아티스트" id="artist"  />
            <VideoSlider videos={musicvideoText} title="인기 뮤직비디오" id="musicvideo" />
            <VideoSlider videos={playlistText} title="상황에 맞는 플레이리스트를 골라보세요!" id="playlist" />
        </Main>
    )
}

export default Home