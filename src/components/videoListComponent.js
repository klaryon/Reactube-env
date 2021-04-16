import React from 'react';
import VideoItem from './videoItemComponent'

function VideoList({ videos, onSelectVideo }) {
    const renderedVideos = videos.map((video,id) => (
            <VideoItem 
                onSelectVideo={onSelectVideo}
                video={video}
                key={id} //establish a key 1,2,3,4,5....
            />
        )
    )
    return(
        <div>
            {renderedVideos}
        </div>
    )
}

export default VideoList;
