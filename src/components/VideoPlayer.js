import {useState,useEffect} from "react";
import {fetchVideosData} from "../api/index"
import ReactPlayer from "react-player";
import {Card, Container,Button,Col,Row,Spinner} from "react-bootstrap";

const VideoPlayer = () => {
    const [videoPlaylist,setVideoPlaylist] = useState([]);
    const [playingVideoUrl,setPlayingVideoUrl] = useState('');
    const [playingVideoId,setPlayingVideoId] = useState(0);
    useEffect(
        () => {
            const fetchResult = async () => {
                const result = await fetchVideosData();
                setVideoPlaylist(result);
                setPlayingVideoUrl(result[0].link);
            }
            fetchResult().then(response => response);
        },[]
    );
    const selectedVideoHandler = (video) => {
        setPlayingVideoUrl(video.link);
        setPlayingVideoId(video.id);
    }
    console.log(playingVideoUrl);
    const videoButton = videoPlaylist.map((video) => (
        <div key={video.id} className="p-2">
            <Button
                className=""
                variant="outline-info"
                onClick={() => selectedVideoHandler(video)}> Stream Link {video.id}
            </Button>
        </div>
    ))
    if(videoPlaylist === []){
        return <Spinner animation="grow" variant="light" />;
    }
    return(
        <Container className="page-container">
            <h1 className="text-center pt-4">Video Player</h1>
            <div className="video-player-card">
                <Card bg="dark" className="p-4 mt-2">
                    <Row>
                        <Col className="react-player">
                            <ReactPlayer controls url={playingVideoUrl}/>
                        </Col>
                        <Col className="pt-5">
                            <h6 className="text-white p-3 pt-4">List of Videos</h6>
                            <div className="pt-4">{videoButton}</div>
                        </Col>
                    </Row>
                    <div className="pt-4">
                        {
                            (playingVideoId !== 0) ? (
                                <div>
                                    <h5 className="text-white text-center">
                                        Currently playing <font color="#0DCAF0"><b><u>Stream Link {playingVideoId}</u></b></font>
                                    </h5>
                                </div>
                            ) : (
                                ''
                            )
                        }
                    </div>
                </Card>
            </div>
        </Container>
    )
}

export default VideoPlayer;