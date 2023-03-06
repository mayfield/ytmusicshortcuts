function nextTrack() {
    document.querySelector('.ytmusic-player-bar.next-button').click();
}

function prevTrack() {
    document.querySelector('.ytmusic-player-bar.previous-button').click();
}

function playPause() {
    document.querySelector('#play-pause-button').click();
}

const commands = {
    nextTrack,
    prevTrack,
    playPause,
};

chrome.runtime.onMessage.addListener(command => {
    console.info("command from bg page", command);
    commands[command]();
});
