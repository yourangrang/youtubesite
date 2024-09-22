import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


import { FaRegStar } from "react-icons/fa6";

const Artist = ({videos, title, id}) => {
        const [loading, setLoading] = useState(true); 
    
        useEffect(() => {
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }, []);
    
        const artistClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <section id={id} className={artistClass}>
            <h2>{title}<FaRegStar /></h2>
            <div className="artist__inner overflow" >
            <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    navigation={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 20,
                        },
                        1240: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1640: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                        2000: {
                            slidesPerView: 9,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Navigation, Autoplay]}
                    className='mySwiper'
                >
                    {videos.map((artist, key)=>(
                        <SwiperSlide key={key}>
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
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Artist