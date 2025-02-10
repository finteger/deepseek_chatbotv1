let abortController = null;
let isGenerating = false;

async function sendMessage(){

    const inputBox = document.getElementById('input-box');
    const chatBox = document.getElementById('chat-box');
    const stopBtn = document.getElementById('stop-btn');
    const prompt = inputBox.value.trim();


    //Exit out function if no prompt is present
    if(!prompt) return;

    //Catch to stop generation if it is already running.
    if(isGenerating){
        stopGeneration();
    }

    



}