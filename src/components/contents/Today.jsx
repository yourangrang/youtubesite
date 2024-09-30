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
                    <Link to={videos[3].page}>
                        <img src={videos[3].img} alt={videos[3].title} />
                    </Link>
                </div>
                <div className='today__text'>
                    <span className='today'>today!</span>
                    <h3 className='title'>
                        <Link to={videos[3].page}>{videos[3].title}</Link>
                    </h3>
                    <p className='desc'>{videos[3].desc}</p>
                    <div className='info'>
                        <span className='author'>
                            <Link to={`/channel/${videos[3].channelId}`}>{videos[3].author}</Link>
                        </span>
                        <span className='date'>{videos[3].date}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Today