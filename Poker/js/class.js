class PokerCard{
    //color =  1 : 梅花 / 2 : 方塊 / 3 : 紅心 / 4 : 黑桃
    //  Num 判斷大小    /    char、string 畫圖 
    constructor(colorNum, colorString, valueNum, valueChar){
        this.colorNum = colorNum;
        this.colorString = colorString;
        this.valueNum = valueNum;
        this.valueChar = valueChar;
    }
}
class attack{
    //type : 1 = 單隻  2 = 胚  3 = 順子  4 = 葫蘆  5 = 鐵支  6 = 同花順
    constructor(type, value, color){
        this.type = type;
        this.value = value;
        this.color = color;
    }
    show(){
        console.log("type = "+ this.type);
        console.log("value = "+ this.value);
        console.log("color = "+ this.color);
    }
}
class player{
    constructor(posY, index, locked){
        this.posY = posY;
        this.index = index;
        this.locked = locked;
    }
}