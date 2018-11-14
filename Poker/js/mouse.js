function mouseMove(event){
    mousePosX = event.clientX;
    mousePosY = event.clientY;
    if(mousePosX > playerX && mousePosX < (playerX + overlap * (playerCard.length + 1)) 
        && mousePosY > playerCardYTop && mousePosY < playerCardYBottom){
        var i, j;
        var posX = mousePosX - playerX;
        for(i = 0; i < playerCard.length; ++i){
            if(posX >　overlap && i != 12){
                posX -= overlap;
            }
            else{
                playerCard[i].posY = playerCardYHover;
                hover = i;
                break;
            }
        }
        for(i = 0; i < playerCard.length; ++i){
            if(i == hover || playerCard[i].locked)
                continue;
                playerCard[i].posY = playerCardYTop;
        }
    }
    else if(!playerCard[hover].locked){
        playerCard[hover].posY = playerCardYTop;
    }

    reDrawPlayer();
}
function mouseClick(event){
    if(mousePosX > playerX && mousePosX < (playerX + overlap * (playerCard.length + 1)) 
        && mousePosY > playerCardYTop && mousePosY < playerCardYBottom){
            if (!playerCard[hover].locked && chooseIndex.length <= 5) {
                playerCard[hover].locked = true;
                playerCard[hover].posY = playerCardYHover;
                chooseIndex.push(hover);
                chooseValue.push(playerCard[hover].index);
            }
            else {
                playerCard[hover].locked = false;
                playerCard[hover].posY = playerCardYTop;
                var index = chooseIndex.length - 1;
                chooseIndex.splice(index, 1);
                chooseValue.splice(index, 1);
            }
            reDrawPlayer();
    }
}
