


chrome.commands.onCommand.addListener((command) => {
    if(command === 'kill_lights'){
        let sendObj = {
            command
        }
    }
});

function sendData(sendObj){
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            sendObj
        );
    });
}