import { songs } from './songs.js';
import { elements, renderPlaylist, updateSongInfo, updatePlayButton, formatTime } from './ui.js';

const state = {
    currentSongIndex: 0,
    isPlaying: false,
};

export const audio = new Audio();

export function loadSong(song) {
    updateSongInfo(song);
    audio.src = song.url;
    renderPlaylist(songs, state.currentSongIndex);
}

export function togglePlayPause() {
    state.isPlaying = !state.isPlaying;
    if (state.isPlaying) {
        audio.play();
    } else {
        audio.pause();
    }
    updatePlayButton(state.isPlaying);
}

export function prevSong() {
    state.currentSongIndex--;
    if (state.currentSongIndex < 0) {
        state.currentSongIndex = songs.length - 1;
    }
    loadSong(songs[state.currentSongIndex]);
    state.isPlaying = true; 
    audio.play();
    updatePlayButton(state.isPlaying);
}

export function nextSong() {
    state.currentSongIndex++;
    if (state.currentSongIndex > songs.length - 1) {
        state.currentSongIndex = 0;
    }
    loadSong(songs[state.currentSongIndex]);
    state.isPlaying = true; 
    audio.play();
    updatePlayButton(state.isPlaying);
}

export function handlePlaylistClick(event) {
    const playlistItem = event.target.closest('.playlist-item');
    if (!playlistItem) return;

    const clickedIndex = parseInt(playlistItem.dataset.index);
    if (clickedIndex === state.currentSongIndex) {
        togglePlayPause();
    } else {
        state.currentSongIndex = clickedIndex;
        loadSong(songs[state.currentSongIndex]);
        state.isPlaying = true;
        audio.play();
        updatePlayButton(state.isPlaying);
    }
}

export function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    elements.progress.style.width = `${progressPercent}%`;

    elements.durationEl.textContent = formatTime(duration);
    elements.currentTimeEl.textContent = formatTime(currentTime);
}

export function setProgress(event) {
    const width = elements.progressBar.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    if (duration) {
        audio.currentTime = (clickX / width) * duration;
    }
}

export function init() {
    loadSong(songs[state.currentSongIndex]);
}
