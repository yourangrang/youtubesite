import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { musicvideoText } from '../data/musicvideo'
import VideoCard from '../components/videos/VideoCard'



const Musicvideo = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const musicvideoPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "뮤직비디오"
            description="오늘의 인기 뮤직비디오 입니다.">
            

            <section id='musicvideoPage' className={musicvideoPageClass}>
            <h2>인기 뮤직비디오</h2>
            <div className="video__inner">
                <VideoCard videos={musicvideoText} />
            </div>
        </section>
        </Main>
    )
}

export default Musicvideo