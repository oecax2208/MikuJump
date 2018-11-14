//建立 card * 52
function buildAllCards(){
    var colorNum = 0;
    var colorString;
    var valueNum = 1; 
    var valueChar;
    
    for(i = 1; i < 53; ++i){
        if(++colorNum > 4){
            colorNum = 1;
            ++valueNum;
        }
        //colorString
        if (colorNum == 1)
            colorString = "clubs";
        else if (colorNum == 2)
            colorString = "diamonds";
        else if (colorNum == 3)
            colorString = "hearts";
        else
            colorString = "spades";
        //valueChar
        if (valueNum == 13)
            valueChar = "k";
        else if (valueNum == 12)
            valueChar = "q";
        else if (valueNum == 11)
            valueChar = "j";
        else if (valueNum == 1)
            valueChar = "a";
        else
            valueChar = valueNum.toString();

        card[i] = new PokerCard(colorNum, colorString, valueNum, valueChar);
    }
}


//發牌
function startANewGame() {
    var i;
    var x;
    //亂數
    for (i = 0; i < 52; ++i) {
        posX = 0;
        posY = 0;
        while (true) {
            x = Math.floor((Math.random() * 52) + 1);
            if (rand.indexOf(x) == -1)
                break;
        }

        rand.push(x);
        if (i <= 12)
            playerOrder.push(rand[i]);
        else if (i <= 25)
            enemy1.push(rand[i]);
        else if (i <= 38)
            enemy2.push(rand[i]);
        else
            enemy3.push(rand[i]);
    }
    sort(playerOrder);
    sort(enemy1);
    sort(enemy2);
    sort(enemy3);
    
    buildPlayerCard(playerOrder);
}


//建立 player 牌的屬性
function buildPlayerCard(arr){
    var newCard;
    var locked = false;
    for (i = 0; i < 13; ++i) {
        if (i <= 12) {
            // arr[i] -->  52張中的第幾張牌
            newCard = new player(playerCardYTop, arr[i], locked);
            playerCard.push(newCard);
        }
    }
}

