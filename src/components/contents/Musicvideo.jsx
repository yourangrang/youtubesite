import React from 'react'

import { musicvideoText } from '../../data/musicvideo'
import { Link } from 'react-router-dom'

const Musicvideo = () => {
    return (
        <section id='musicvideo'>
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
    )
}

export default Musicvideo