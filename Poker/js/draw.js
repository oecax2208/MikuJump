function reDrawPlayer(){

    ctx.clearRect(playerX - 10, playerCardYHover - 2,
        overlap * 12 + cardHeight * 0.75 + 20, playerCardYBottom + 2);

    for(i = 0; i < playerCard.length; ++i){
        ctx.drawPokerCard(playerX + overlap * i, playerCard[i].posY, cardHeight, 
            card[playerCard[i].index].colorString, card[playerCard[i].index].valueChar);
    }
}



function reDrawMiddle(){
    var middleX = canvasWidth * 0.05 * (5 - chooseValue.length);
    if(chooseValue.length == 1)
        var middleX = canvasWidth * 0.45;
    else if(chooseValue.length == 2)
        var middleX = canvasWidth * 0.4;
    else   
        var middleX = canvasWidth * 0.25;

    ctx.clearRect(0, 0, canvasWidth, playerCardYHover);
    for(i = 0; i < chooseValue.length; ++i){
        ctx.drawPokerCard(middleX + overlap * 2 * i, middleY, cardHeight, 
            card[chooseValue[i]].colorString, card[chooseValue[i]].valueChar);
    }

    // store currenyAtk to lastAtk
    lastAtk = currentAtk;
}


function drawEnemy1(){
    ctx.clearRect(canvasWidth - cardHeight - 30, 0, canvasWidth, canvasHeight);

    ctx.save();
    ctx.translate(canvasWidth - cardHeight - 20, canvasHeight * 0.85);
    ctx.rotate(-90 * Math.PI / 180);
    for(var i = 0; i < enemy3.length; ++i){
        ctx.drawPokerBack(overlap2 * i, 0, cardHeight, '#5C72C2', '#2B4299');
    }
    ctx.restore();
}

function drawEnemy2(){
    ctx.clearRect(playerX - 10, 0, overlap * 12 + cardHeight * 0.75 + 20, canvasHeight + 30);

    for(var i = 0; i < enemy2.length; ++i){
        ctx.drawPokerBack(playerX + overlap * i, 20, cardHeight, '#5C72C2', '#2B4299');
    }
}


function drawEnemy3(){
    ctx.clearRect(0, 0, cardHeight + 30, canvasHeight);

    ctx.save();
    ctx.translate(cardHeight + 20, canvasHeight * 0.15);
    ctx.rotate(90 * Math.PI / 180);
    for(var i = 0; i < enemy1.length; ++i){
        ctx.drawPokerBack(overlap2 * i, 0, cardHeight, '#5C72C2', '#2B4299');
    }
    ctx.restore();
}

