function sendOut(){
    //先牌順序，不然會會刪錯張
    sort(chooseIndex);

    if(convertToAtk(chooseValue)){
        for(i = 0; i < chooseIndex.length; ++i){
            var index = chooseIndex[i];
            playerCard.splice(index, 1);
            hover = 0;
        }
        if (beatLastAtk()){
            reDrawPlayer();
            reDrawMiddle();
            enemyAttack(++attackPeople);
        }
    }
    else
        giveUp();
    
    chooseIndex.length = 0;
    chooseValue.length = 0;
}
function giveUp(){
    var flag = false;
    for(i = 0; i < playerCard.length; ++i){
        if(!playerCard[i].locked)
            continue;
        else{
            playerCard[i].locked = false;
            playerCard[i].posY = playerCardYTop;
            flag = true;
        }
    }
    if(flag)
        reDrawPlayer();
}
function pass(){

}