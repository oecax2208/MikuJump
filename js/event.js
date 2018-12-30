function addEvent(){
    document.addEventListener("keyup", function (event) {
        if (event.keyCode == 32 && player.jumpTime == 1) {
            player.jumpForce = 25;
            player.jumpTime--;
        }
    });
    canvas.addEventListener('touchstart', function (event) {
        event.preventDefault();
        if (player.jumpTime == 1) {
            player.jumpForce = 25;
            player.jumpTime--;
        };
    }, true);

}