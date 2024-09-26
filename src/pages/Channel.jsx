import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/api';

import Main from '../components/section/Main';
import VideoSearch from '../components/videos/VideoSearch';



const Channel = () => {
    const { channelId } = useParams();
    const [ channelDetail, setChannelDetail ] = useState();
    const [ channelVideo, setChannelVideo ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ nextPageToken, setNextPageToken ] = useState(null);

    useEffect(()=>{
        const fetchResults = async()=>{
            try {
                const data = await fetchFromAPI(`channels?part=snippet&id=${channelId}`);
                setChannelDetail(data.items[0]);

                const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date`);
                setChannelVideo(videosData?.items);
                setNextPageToken(videosData?.nextPageToken);
            } catch(error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchResults();
    },[channelId]);

    const channelPageClass = loading ? 'isLoading' : 'isLoaded';

    const loadMoreVideos = async ()=>{
        if(nextPageToken) {
            const videosData = await fetchFromAPI(`search?channelId=${channelId}&part=snippet%2Cid&order=date&pageToken=${nextPageToken}`);
            setChannelVideo(prevVideos =>[...prevVideos,...videosData.items]);
            // setNextPageToken(videosData?.nextPageToken);
        }
    }

   
    

    return (
        <Main 
            title = "유튜브 채널"
            description="유튜브 채널페이지입니다.">
            
            {channelDetail && (
                <section id='channel' className={channelPageClass}>
                    <div className='channel__header' style={{backgroundImage:`url(${channelDetail.brandingSettings.image.bannerExternalUrl})`}}>
                        <div className='circle'>
                            <img src={channelDetail.snippet.thumbnails.high.url} alt={channelDetail.snippet.title} />
                        </div>
                    </div><div className='channel__info'>
                        <h3 className='title'>{channelDetail.snippet.title}</h3>
                        <p className='desc'>{channelDetail.snippet.description}</p>
                        <div className='info'>
                            <span>구독자 <em>{channelDetail.statistics.subscriberCount}</em> 명</span>
                            <span>비디오 <em>{channelDetail.statistics.videoCount}</em> 개</span>
                            <span>조회수 <em>{channelDetail.statistics.viewCount}</em> 회</span>
                        </div>
                    </div>
                    <div className="channel__video video__inner search">
                        <VideoSearch videos={channelVideo} />
                    </div>
                    <div className="channel__more">
                        {nextPageToken && <button onClick={loadMoreVideos}>더 보기</button>}
                    </div>
                </section>
            )}
        </Main>
    )
}

export default Channel