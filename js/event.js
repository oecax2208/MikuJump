function tap_start() {

    if (!start) {
        start = true;
        document.removeEventListener("keydown", tap_start);
        setTimeout(addGameEvent, 800)
        setTimeout(Game.Play, 1500)
    }
}


function addGameEvent() {

    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 32 && player.jumpTime == 1 && start && !over) {
            player.jumpForce = 25;
            player.jumpTime--;
            voice_1.play()
        }
    });

    document.addEventListener('touchstart', function (event) {
        event.preventDefault();
        if (player.jumpTime == 1 && !over) {
            player.jumpForce = 25;
            player.jumpTime--;
            voice_1.play()
        };
    }, true);

    reloadBtn.onclick = Game.Restart;
    reloadBtn.hover = () => {
        reloadBtn.style.top = gameoverText.style.top + document.getElementById('reload').height / 2 - 10 + "px";
        reloadBtn.style.left = canvasW * 0.5 - document.getElementById('reload').width * 0.6 + 10 + "px";
    };
}