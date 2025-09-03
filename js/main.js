// This file contains the JavaScript code that adds interactivity to the webpage.

document.addEventListener('DOMContentLoaded', function() {
    const videoGallery = document.getElementById('video-gallery');

    // Function to fetch and display videos
    function fetchVideos() {
        // Example video data (this should be replaced with actual API calls)
        const videos = [
            {
                title: 'Video 1',
                url: 'https://www.youtube.com/watch?v=example1',
                thumbnail: 'https://img.youtube.com/vi/example1/0.jpg'
            },
            {
                title: 'Video 2',
                url: 'https://www.youtube.com/watch?v=example2',
                thumbnail: 'https://img.youtube.com/vi/example2/0.jpg'
            }
        ];

        videos.forEach(video => {
            const videoElement = document.createElement('div');
            videoElement.classList.add('video-item');

            videoElement.innerHTML = `
                <a href="${video.url}" target="_blank">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <h3>${video.title}</h3>
                </a>
            `;

            videoGallery.appendChild(videoElement);
        });
    }

    // Call the function to fetch and display videos
    fetchVideos();
});