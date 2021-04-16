import React from 'react';
import { Card } from 'react-bootstrap';

const VideoDetail = ({ selectedVideo }) => {
    if (!selectedVideo) return <div></div> //Handling undefined/null properties in components during first render

    const src = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

    return(
        <Card style={{ width: '42rem' }}>
            <iframe
                frameBorder="0"
                height="400"
                width="100%"
                title="video"
                src={src}
            />
            <Card.Body>
                <Card.Title>
                    {selectedVideo.snippet.title}
                </Card.Title>
                <Card.Text>
                    {selectedVideo.snippet.description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default VideoDetail;

//HANDLING NULL STATE DURING FIRST RENDER 
//https://stackoverflow.com/questions/55359176/handling-undefined-null-properties-in-components-during-first-render

//EMBEDED YOUTUBE VIDEO --->  <iframe />
//https://stackoverflow.com/questions/44715819/iframes-and-react-js-how-to-embed-a-youtube-video-into-my-app