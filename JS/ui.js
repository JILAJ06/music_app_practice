export const elements = {
    mainArtwork: document.querySelector('.song-artwork-container .song-artwork'),
    nowPlayingContainer: document.querySelector('.now-playing'),
    playlistContainer: document.querySelector('.up-next'),
    playerArtwork: document.querySelector('.player-song-info img'),
    playerTitle: document.querySelector('.player-song-info .song-title'),
    playerArtist: document.querySelector('.player-song-info .artist-name'),
    prevButton: document.querySelector('.control-button:nth-child(2)'),
    playButton: document.querySelector('.play-button'),
    playButtonIcon: document.querySelector('.play-button .material-symbols-outlined'),
    nextButton: document.querySelector('.control-button:nth-child(4)'),
    currentTimeEl: document.querySelector('.progress-bar-container .time:first-child'),
    durationEl: document.querySelector('.progress-bar-container .time:last-child'),
    progressBar: document.querySelector('.progress-bar'),
    progress: document.querySelector('.progress'),
};

export function renderPlaylist(songs, currentSongIndex) {
    elements.playlistContainer.innerHTML = '';
    elements.nowPlayingContainer.innerHTML = '';

    songs.forEach((song, index) => {
        const isActive = index === currentSongIndex;
        const songItemHTML = `
            <div class="playlist-item ${isActive ? 'active' : ''}" data-index="${index}">
                ${isActive ? '<span class="material-symbols-outlined sound-wave">bar_chart</span>' : '<span class="material-symbols-outlined play-icon">play_arrow</span>'}
                <img src="${song.artwork}" alt="Artwork">
                <div class="song-details">
                    <p class="song-title">${song.title}</p>
                    <p class="artist-name">${song.artist}</p>
                </div>
            </div>`;
        
        if (isActive) {
            elements.nowPlayingContainer.innerHTML = `<p class="list-subtitle">Reproduciendo ahora</p>${songItemHTML}`;
        } else {
            elements.playlistContainer.innerHTML += songItemHTML;
        }
    });
}

export function updateSongInfo(song) {
    elements.mainArtwork.src = song.artwork;
    elements.playerArtwork.src = song.artwork;
    elements.playerTitle.textContent = song.title;
    elements.playerArtist.textContent = song.artist;
}

export function updatePlayButton(isPlaying) {
    elements.playButtonIcon.textContent = isPlaying ? 'pause' : 'play_arrow';
}

export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    if (secs < 10) secs = `0${secs}`;
    return isNaN(minutes) || isNaN(secs) ? '0:00' : `${minutes}:${secs}`;
}