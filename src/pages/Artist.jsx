import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { artistText } from '../data/artist'
import { Link } from 'react-router-dom'

// import { FaRegStar } from "react-icons/fa6";
   

const Artist = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const artistPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "인기 아티스트"
            description="인기 아티스트를 소개합니다.">
            

            <section id='artistPage' className={artistPageClass}>
            <h2>인기 아티스트</h2>
            <div className="artist__inner" >
                {artistText.map((artist, key)=>(
                    <div className='artist' key={key}>
                        <div className="artist__img play__icon">
                            <Link to={`/channel/${artist.channelId}`}>
                                <img src={artist.img} alt={artist.name}/>
                            </Link>
                        </div>
                        <div className="artist__info">
                            <Link to={`/channel/${artist.channelId}`}>
                                {artist.name}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </Main>
    )
}

export default Artist