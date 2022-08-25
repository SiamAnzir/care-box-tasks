import axios from "axios";

const videoPlaylistUrl = 'https://care-box-backend.herokuapp.com/api/v1/applicant_test/get_video_link/';

export const fetchVideosData = async () => {
    try{
        const {data} = await axios.get(videoPlaylistUrl);
        return data;
    }
    catch (error){
        return error
    }
}