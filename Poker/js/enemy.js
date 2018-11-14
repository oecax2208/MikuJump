function enemyAttack(attackPeople){
    var total = 0;
    var back = false;
    var a = 'enemy' + attackPeople.toString();

    if('enemy1' == a)
        var cardArr = enemy1;
    else if('enemy2' == a)
        var cardArr = enemy2;
    else if('enemy3' == a)
        var cardArr = enemy3;

    console.log("-----------------------------");

    console.log(cardArr);

    for(var i = cardArr.length - 1; total <= cardArr.length; --i){
        //從3開始
        if(card[cardArr[i]].valueNum <= 2 && !back)
            continue;

        ++total;

        if(card[cardArr[i]].valueNum > currentAtk.value 
            && card[cardArr[i]].colorNum > currentAtk.color){
                console.log("index : " + cardArr[i]);
                console.log("value : " + card[cardArr[i]].valueNum);
                console.log("color : " + card[cardArr[i]].colorNum);
                cardArr.splice(i, 1);
                break;
            }
        //回到最後面的牌
        if(i == 0){
            i = cardArr.length - 1;
            back = true;
        }
    }   


    drawEnemy1();
    drawEnemy2();
    drawEnemy3();

    if(++attackPeople < 4)
        enemyAttack(attackPeople);
    else{
        attackPeople = 0;
        reDrawPlayer();
    }
}