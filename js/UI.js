function getScreenSize(){
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");

    canvasW = window.innerWidth;
    canvasH = window.innerHeight;
    canvasH = (canvasH > canvasW) ? Math.floor(canvasW / 2) : canvasH;
    canvas.width = canvasW;
    canvas.height = canvasH;

    horizon = canvasH * 0.9;
}