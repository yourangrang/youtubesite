import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Today = ({videos, id}) => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    const todayClass = loading ? 'isLoading' : 'isLoaded';

    
    return (
        <section id={id} className={todayClass}>
            <div className='today__inner'>
                <div className='today__thumb play__icon'>
                    <Link to={`/video/${videos[5].videoId}`}>
                        <img src={videos[5].img} alt={videos[5].title} />
                    </Link>
                </div>
                <div className='today__text'>
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link to={videos[5].page}>{videos[5].title}</Link>
                    </h3>
                    <p className='desc'>{videos[5].desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${videos[5].channelId}`}>{videos[5].author}</Link>
                        </span>
                        <span className='date'>{videos[5].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today