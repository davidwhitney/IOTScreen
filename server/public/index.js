function connect (targetDomElement) {
    const webSocket = new WebSocket("ws://localhost:8080");
    webSocket.onopen = (_) => { webSocket.send("Hello."); };
    webSocket.onmessage = (ev) => {
        targetDomElement.innerHTML = ev.data;
    }
}

connect(document.getElementById("image-placeholder"));