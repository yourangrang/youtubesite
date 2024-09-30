import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Main from '../components/section/Main'

import VideoSearch from '../components/videos/VideoSearch'
import { fetchFromAPI } from '../utils/api'

import { MdExpandMore } from "react-icons/md";

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    
    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        }, [searchId]);

    const fetchVideos = (query, pageToken='') =>{
        fetchFromAPI(`search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`)
        .then((data)=>{
            setNextPageToken(data.nextPageToken);
            setVideos((prevVideos)=>[...prevVideos,...data.items]);
        })
        .catch((error)=>{
            console.error('Error fetching data:', error);
        });
    };

    const handleLoadMore = () => {
        if(nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };
    



    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id='searchPage'>
                <h2><em>"{searchId}"</em> 에 대한 검색결과입니다.</h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더 보기 <MdExpandMore /></button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search