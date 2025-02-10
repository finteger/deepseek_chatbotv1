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

    //Add user message
    chatBox.innerHTML += `<div class="user-message">You: ${prompt}</div>`;
  

    try {
        abortController = new AbortController();

        const response = await fetch('http://localhost:8080/api/chat-stream',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({prompt}),
            signal: abortController.signal
        });

        const botDiv = document.createElement('div');
        botDiv.className = 'bot-message';
        botDiv.textContent = 'AI: ';
        chatBox.appendChild(botDiv);


    } catch (error) {
        
    }

}