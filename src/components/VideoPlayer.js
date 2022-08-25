import {useState,useEffect} from "react";
import {fetchVideosData} from "../api/index"
import ReactPlayer from "react-player";

const VideoPlayer = () => {
    const [videoPlaylist,setVideoPlaylist] = useState([]);
    const [playingVideoUrl,setPlayingVideoUrl] = useState('');
    useEffect(
        () => {
            const fetchResult = async () => {
                const result = await fetchVideosData();
                setVideoPlaylist(result);
            }
            fetchResult().then(response => response);
        },[]
    );
    console.log(videoPlaylist);

    const selectedVideoHandler = (video) => {
        setPlayingVideoUrl(video.link);
    }

    const videoButton = videoPlaylist.map((video) => (
        <div key={video.id}>
            <button onClick={() => selectedVideoHandler(video)}>Stream Link {video.id} </button>
        </div>
    ))
    console.log(playingVideoUrl);
    return(
        <div>
            Video Player
            <ReactPlayer controls url={playingVideoUrl}/>
            {videoButton}
        </div>
    )
}

export default VideoPlayer;