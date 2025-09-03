import React, { useEffect, useState } from 'react';

const VideoGallery = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        // Fetch videos from the channel (replace with actual API endpoint)
        const fetchVideos = async () => {
            try {
                const response = await fetch('https://api.example.com/videos?channel=educandoalsoberano');
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="video-gallery">
            <h2>Video Gallery</h2>
            <div className="video-list">
                {videos.map(video => (
                    <div key={video.id} className="video-item">
                        <h3>{video.title}</h3>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={video.title}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGallery;