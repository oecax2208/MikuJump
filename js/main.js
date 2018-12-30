
window.onload = () => {
    

    gameoverText = document.getElementById("gameoverText");
    reloadBtn = document.getElementById("reloadButton");


    Game.Create();
    Game.rand_enemy();
    Game.Play();

    
}



