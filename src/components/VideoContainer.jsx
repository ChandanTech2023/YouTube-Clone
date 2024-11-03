import React, { useEffect } from 'react'
import axios from "axios"
import {BASE_URL,API_KEY ,YOUTUBE_VIDEO_API } from '../Constants/YoutubeApi'
const VideoContainer = () => {
  // Now always use UseEffect hook for Api calling
  const fetchYoutubeVideo =async(BASE_URL)=>{
    try{
      const res =await axios.get(YOUTUBE_VIDEO_API)
      console.log(res);
    }catch(error){
      console.log("Error fetching data :" ,error);
      throw error;
      
    }
  }
  useEffect(() => {
    fetchYoutubeVideo();

  }, [])
  
  return (
    <div>
        
    </div>
  )
}

export default VideoContainer