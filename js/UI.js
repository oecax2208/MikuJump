function getUI() {
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    startBtn = document.getElementById('startBtn');
    startTextDiv = document.getElementById('startText')
    startTextL = document.getElementById('startTextLeft');
    startTextR = document.getElementById('startTextRight');
    promptText = document.getElementById('promptText');
    score_text = document.getElementById('score');
    gameoverText = document.getElementById("gameoverText");
    reloadBtn = document.getElementById("reloadBtn");
}


function setStyle() {

    canvasW = window.innerWidth;
    canvasH = window.innerHeight;
    canvasH = (canvasH > canvasW) ? Math.floor(canvasW / 2) : canvasH;
    canvas.width = canvasW;
    canvas.height = canvasH;

    horizon = canvasH * 0.9;
    dis_pos = canvasW * 0.3;
    back_pos = canvasW * 1.5;

    startBtn.style.fontSize = canvasW * 0.03 + "px";
    startBtn.style.top = canvasH * 0.5 - canvasW * 0.06 + "px";
    startBtn.style.left = canvasW * 0.5 - canvasW * 0.06 + "px";


    startTextDiv.style.fontSize = canvasW * 0.1 + "px";
    startTextDiv.style.top = canvasH * 0.5 - canvasW * 0.05 + "px";
    startTextR.style.top = canvasH * 0.3 + "px";

    promptText.style.fontSize = canvasW * 0.03 + "px";
    promptText.style.top = canvasH * 0.9 - canvasW * 0.015 + "px";
    promptText.style.left = canvasW * 0.5 - canvasW * 0.03 * 4.5 + "px";


    score_text.style.fontSize = canvasW * 0.04 + "px";
    score_text.style.top = canvasH * 0.1 + "px";
    score_text.style.right = canvasW * 0.1 + "px";

    gameoverText.style.fontSize = canvasW * 0.08 + "px";
    gameoverText.style.top = canvasH * 0.2 + "px";

    reloadBtn.style.top = canvasH * 0.45 - document.getElementById('reload').width / 2 + "px";
    reloadBtn.style.left = canvasW * 0.5 - document.getElementById('reload').width / 2 + "px";
}

function startBtnClick() {

    startBtn.remove();
    Game.Create(); 
    Game.rand_enemy();
}


function startTextEffectL() {
    var t = 0;
    var t_t = 120
    var flag = true;

    var s = setInterval(() => {

        startTextL.style.opacity = 1 - (t_t - t) / t_t

        if (t >= t_t / 4 && flag) {
            voice_title[0].play();
            flag = false;
        }

        if (++t >= t_t) {
            clearInterval(s)
            startTextL.style.opacity = 1
            startTextEffectR()
        }
    }, 10)
}

function startTextEffectR() {

    var y = canvasH * 0.3;
    var rebound_t = 5
    var force = canvasH * 0.05;
    var sub_force = force / 40
    var forceArr = [0.00005, 0.0015, 0.003, 0.01, 0.02]
    var gravity = canvasH * 0.01

    startTextR.style.opacity = 1

    var s = setInterval(() => {

        if (force >= 0)
            force -= sub_force
        else
            force = - gravity

        if (y > 0 && force <= 0) {
            force = canvasH * forceArr[rebound_t-- - 1]
            sub_force = force / 40

        }

        y -= force
        startTextR.style.top = y + 'px'

        if (rebound_t == 0) {
            clearInterval(s)
            startTextR.style.top = 0;
            setTimeout(promptTextEff, 1000)
        }

    }, 10)

    voice_title[1].play();
}


function promptTextEff() {

    var t = 0;
    var sub = 1;
    var s = setInterval(() => {

        if (start)
            clearInterval(s)

        if (t > 10 || t < 0) {
            if (sub == 1)
                sub = -1
            else
                sub = 1
        }

        t += sub
        promptText.style.opacity = t / 10

    }, 100)

    document.addEventListener("keydown", tap_start);
    document.addEventListener('touchstart', tap_start);

}

function closeStartUI() {

    startTextDiv.style.display = 'none'
    promptText.style.display = 'none'

    score_text.style.display = 'block';

}