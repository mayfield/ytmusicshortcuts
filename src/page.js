function nextTrack() {
    document.querySelector('[aria-label="Next song"]').click();
}

function prevTrack() {
    document.querySelector('[aria-label="Previous song"]').click();
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
