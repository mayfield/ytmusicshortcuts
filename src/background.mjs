chrome.commands.onCommand.addListener(async (command) => {
    console.log(`Command: ${command}`);
    const tabs = await chrome.tabs.query({url: 'https://music.youtube.com/*'});
    for (const t of tabs) {
        chrome.tabs.sendMessage(t.id, command);
    }
});
