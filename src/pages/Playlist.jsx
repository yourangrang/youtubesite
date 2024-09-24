import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { playlistText } from '../data/playlist'
import VideoCard from '../components/videos/VideoCard'


const Playlist = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const playlistPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "맞춤형 플레이리스트"
            description="맞춤형 플레이리스트영상 입니다.">
            

            <section id='playlistPage' className={playlistPageClass}>
                <h2>상황에 맞는 플레이리스트를 골라보세요!</h2>
                <div className="video__inner">
                    <VideoCard videos={playlistText} />
                </div>
            </section>
        </Main>
    )
}

export default Playlist