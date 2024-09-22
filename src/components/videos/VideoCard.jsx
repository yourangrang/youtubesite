import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({videos}) => {
    return (
        <>
            {videos.map((video, key)=>(
                <div className='video' key={key}>
                    <div className="video__thumb play__icon">
                        <Link to={`/video/${video.videoId}`}>
                            <img src={video.img} alt={video.title}/>
                            <div className="video__title">{video.topic}</div>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoCard