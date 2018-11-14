//轉換成atk
function convertToAtk(arr){
    var flag = false;
    //先排順序
    sort(arr);
    switch(arr.length){
        case 1:      
            //checkTypeFor1
            currentAtk = new attack(1, card[arr[0]].valueNum, card[arr[0]].colorNum);
            console.log(currentAtk.value+" 單張");
            messageText.innerHTML = currentAtk.value+" 單張";
            flag = true;
            break;
        case 2:
            //checkTypeFor2
            if(card[arr[0]].valueNum == card[arr[1]].valueNum){
                currentAtk = new attack(2, card[arr[0]].valueNum, card[arr[0]].colorNum);
                console.log(currentAtk.value+" pair");
                messageText.innerHTML = currentAtk.value+" pair";
                flag = true;
            }
            else
                console.log("錯誤！！！！！");
            break;
        case 5:
            flag = checkTypeFor5(arr);
            
            if(currentAtk.type == 3){
                console.log(currentAtk.value+" 順子");
                messageText.innerHTML = currentAtk.value+" 順子";
            }
            else if(currentAtk.type == 4){
                console.log(currentAtk.value+" 葫蘆");
                messageText.innerHTML = currentAtk.value+" 葫蘆";
            }
            else if(currentAtk.type == 5){
                console.log(currentAtk.value+" 鐵支");
                messageText.innerHTML = currentAtk.value+" 鐵支";
            }
            else if(currentAtk.type == 6){
                console.log(currentAtk.value+" 同花");
                messageText.innerHTML = currentAtk.value+" 同花";
            }
            else {
                console.log("錯誤！！！！！");
                messageText.innerHTML = "錯誤！！！！！";
            }
            break;
        defalut:
            console.log("錯誤！！！！！");
            messageText.innerHTML = "錯誤！！！！！";
    }

    currentAtk = {

    }

    return flag;
}

// check 5 * card
function checkTypeFor5(arr) {
    var maxSameNum = 0, currentSameNum;
    var valueNum = 0, currentValue;
    var type = 0, colorNum = 0;
    var time;
    var sameColor = true;

    //葫蘆  鐵支  
    for (i = 0; i < 5; ++i) {
        currentSameNum = 1;

        if (i == 4)
            j = 0;
        else
            j = i + 1;
        //判斷其他4張牌
        for (time = 1; time < 5; ++time) {
            if (card[arr[i]].valueNum == card[arr[j]].valueNum)
                currentSameNum++;
            currentValue = card[arr[i]].valueNum;
            if (j++ == 4)
                j = 0;
        }
        if (currentSameNum > maxSameNum) {
            maxSameNum = currentSameNum;
            valueNum = currentValue;
        }
    }
    //判斷剩下2張是否相同
    if (maxSameNum == 3) {
        var check = [];
        var a = 0;
        for (i = 0; i < 5; ++i) {
            if (card[arr[i]].valueNum != valueNum)
                check[a++] = card[arr[i]].valueNum;
        }
        if (check[0] == check[1]) {
            type = 4;
        }
    }
    else if (maxSameNum == 4)
        type = 5;


    //順子  同花
    for (i = 0; i < 4; ++i) {
        var difference = Math.abs(card[arr[i]].valueNum - card[arr[i + 1]].valueNum);
        if (difference == 1 || difference == 9) {
            if (card[arr[i]].colorNum != card[arr[i + 1]].colorNum)
                sameColor = false;
        }
        else
            break;
        if (i == 3)
            type = 3;
    }
    if (type == 3) {
        if (card[arr[4]].valueNum == 1) {
            if (card[arr[0]].valueNum == 13){
                valueNum = 1;
                colorNum = card[arr[4]].colorNum;
            }
            else{
                valueNum = 5;
                colorNum = card[arr[0]].colorNum;
            }
        }
        else if (card[arr[4]].valueNum == 2){
            valueNum = 2;
            colorNum = card[arr[4]].colorNum;
        }
        else{
            valueNum = card[arr[0]].valueNum;
            colorNum = card[arr[0]].colorNum;
        }

        if (sameColor)
            type = 6;
    }
    currentAtk = new attack(type, valueNum, colorNum);
    for(i = 0; i < arr.length; ++i)
        console.log(card[arr[i]].valueNum);
    console.log(currentAtk.type);
    
    if(type != 0){
        
        return true;
    }
}


//判斷有沒有上次出的牌大
function beatLastAtk(){
    if(firstAtk){
        firstAtk = false;
        return true;
    }
    var flag = false;
    if(currentAtk.type == lastAtk.type){

        if(currentAtk.value == lastAtk.value){
            if(currentAtk.color > lastAtk.color)
                flag = true;
        }
        else if(currentAtk.value <= 2 && lastAtk.value > 2){
            flag = true;
        }
        else if(currentAtk.value > 2 && lastAtk.value <= 2){
            flag = false;
        }
        else if(currentAtk.value > lastAtk.value){
            flag = true;
        }
    }

    return flag;
}
