import React from 'react';
import { Media } from 'react-bootstrap';


const VideoItem = ({ onSelectVideo, video }) => {
    return(
        <Media className="mediacard" onClick={() => onSelectVideo(video)}>
            <img
                width={140}
                className="align-self-center mr-3"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <Media.Body>
                <h5>{video.snippet.title}</h5>
            </Media.Body>
        </Media>
    )
}

export default VideoItem;



