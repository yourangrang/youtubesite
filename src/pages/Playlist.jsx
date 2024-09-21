import React from 'react'
import Main from '../components/section/Main'

import { playlistText } from '../data/playlist'
import { Link } from 'react-router-dom'



const Playlist = () => {
    return (
        <Main 
            title = "맞춤형 플레이리스트"
            description="맞춤형 플레이리스트영상 입니다.">
            

            <section id='playlistPage'>
                <h2>상황에 맞는 플레이리스트를 골라보세요!</h2>
                <div className="video__inner">
                    {playlistText.map((video, key)=>(
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

export default Playlist