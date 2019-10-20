let lastImage = "default";

function connect (targetDomElement) {
    const targetImage = document.createElement("img");
    targetImage.id = "imagehost";
    targetDomElement.appendChild(targetImage);

    const webSocket = new WebSocket("ws://localhost:8080");
    
    webSocket.onopen = (_) => { webSocket.send("Hello."); };
    webSocket.onerror = (err) => { 
        console.log("Errors, attempting to reconnect...");
        //setTimeout(() => connect(targetDomElement), 1000);
    };

    webSocket.onmessage = (ev) => {
        if(lastImage != ev.data) {
            lastImage = ev.data;
            targetImage.src = `/content/${lastImage}`;
        }
    }
}

connect(document.getElementById("image-placeholder"));