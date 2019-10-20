const webSocket = new WebSocket("ws://localhost:8080");
webSocket.onopen = (ev) => {
    webSocket.send("UI Connected."); 
};

webSocket.onmessage = (ev) => {
    
}