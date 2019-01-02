function getUI(){
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    score_text = document.getElementById('score');
    gameoverText = document.getElementById("gameoverText");
    reloadBtn = document.getElementById("reloadBtn");
}


function setSize(){

    canvasW = window.innerWidth;
    canvasH = window.innerHeight;
    canvasH = (canvasH > canvasW) ? Math.floor(canvasW / 2) : canvasH;
    canvas.width = canvasW;
    canvas.height = canvasH;

    horizon = canvasH * 0.9;
    dis_pos = canvasW * 0.3;
    back_pos = canvasW * 1.5;

    score_text.style.fontSize = canvasW * 0.04 + "px";
    score_text.style.top = canvasH * 0.1 + "px";
    score_text.style.right = canvasW * 0.1 + "px";

    gameoverText.style.fontSize = canvasW * 0.08 + "px";
    gameoverText.style.top = canvasH * 0.2 + "px";

    reloadBtn.style.top = gameoverText.style.top + document.getElementById('reload').height / 2 + "px";
    reloadBtn.style.left = canvasW * 0.5  - document.getElementById('reload').width * 0.6 + "px";
}