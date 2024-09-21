import React from 'react'
import Main from '../components/section/Main'

import { musicvideoText } from '../data/musicvideo'
import { Link } from 'react-router-dom'



const Musicvideo = () => {
    return (
        <Main 
            title = "뮤직비디오"
            description="오늘의 인기 뮤직비디오 입니다.">
            

            <section id='musicvideoPage'>
            <h2>인기 뮤직비디오</h2>
            <div className="video__inner">
                {musicvideoText.map((video, key)=>(
                    <div className="video" key={key}>
                        <div className="video__thumb">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </Main>
    )
}

export default Musicvideo