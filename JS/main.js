import { elements } from './ui.js';
import * as player from './player.js';

function main() {
    elements.playButton.addEventListener('click', player.togglePlayPause);
    elements.prevButton.addEventListener('click', player.prevSong);
    elements.nextButton.addEventListener('click', player.nextSong);

    player.audio.addEventListener('timeupdate', player.updateProgress);
    player.audio.addEventListener('ended', player.nextSong);
    
    elements.progressBar.addEventListener('click', player.setProgress);
    
    elements.nowPlayingContainer.addEventListener('click', player.handlePlaylistClick);
    elements.playlistContainer.addEventListener('click', player.handlePlaylistClick);

    player.init();
}

document.addEventListener('DOMContentLoaded', main);