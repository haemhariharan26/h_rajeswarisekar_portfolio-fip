const video = document.getElementById('myVideo');
const playPauseButton = document.getElementById('play-pause');
const seekBar = document.getElementById('seek-bar');
const muteButton = document.getElementById('mute');
const volumeBar = document.getElementById('volume-bar');
const fullscreenButton = document.getElementById('fullscreen');

playPauseButton.addEventListener('click', togglePlayPause);
seekBar.addEventListener('input', handleSeekBar);
muteButton.addEventListener('click', toggleMute);
volumeBar.addEventListener('input', handleVolume);
fullscreenButton.addEventListener('click', toggleFullscreen);

function togglePlayPause() {
    if (video.paused || video.ended) {
        video.play();
        playPauseButton.textContent = 'Pause';
    } else {
        video.pause();
        playPauseButton.textContent = 'Play';
    }
}

function handleSeekBar() {
    const seekValue = seekBar.value;
    const time = (seekValue * video.duration) / 100;
    video.currentTime = time;
}

function toggleMute() {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
}

function handleVolume() {
    const volumeValue = volumeBar.value;
    video.volume = volumeValue / 100;
}

function toggleFullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
}

video.addEventListener('timeupdate', updateSeekBar);
video.addEventListener('ended', handleVideoEnd);

function updateSeekBar() {
    const value = (video.currentTime / video.duration) * 100;
    seekBar.value = value;
}

function handleVideoEnd() {
    playPauseButton.textContent = 'Replay';
}

// Handle clicks on video tabs
document.getElementById('beer-video').addEventListener('click', function() {
    updateVideo('assets/demoreel-video/demoreel-final.mp4', 'assets/demoreel-video/demoreel-final.png');
});

document.getElementById('make-up-video').addEventListener('click', function() {
    updateVideo('assets/demoreel-video/sports-motion-graphic.mp4', 'assets/demoreel-video/sports-motion-graphic.png');
});

document.getElementById('earbud-project').addEventListener('click', function() {
    updateVideo('assets/demoreel-video/makeup-video.mp4', 'assets/demoreel-video/makeup-video.png');
});

// Function to update video source and poster
function updateVideo(videoSrc, posterSrc) {
    video.src = videoSrc;
    video.poster = posterSrc;
    video.load(); // Load the new video
    video.play(); // Auto-play the new video
}