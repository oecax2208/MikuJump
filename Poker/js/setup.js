var canvas, ctx;
var sendOutBtn, giveUpBtn, passBtn;
var messageText;
var canvasWidth, canvasHeight, cardHeight;
var playerCardYTop;
var playerCardYBottom;
var playerCardYHover;
var position2, position3, position4;
var position2, position3, position4;
//滑鼠位置
var mousePosX;
var mousePosY;
//player、enemy2第一張牌位置
var playerX;
//中間放置牌位置
var middleY;
// card間隔 
//   1.3        2.4
var overlap, overlap2;

var playerPosX = [];
var playerPosY = [];

var card = [];
rand = [];
playerCard = [];
enemy1 = [];
enemy2 = [];
enemy3 = [];
// player 牌的順序
var playerOrder = [];

var lastAtk, currentAtk;
var firstAtk = true;

var chooseValue = [];
var chooseIndex = [];

var i, j, value = 1, color = 0;
var hover = 0;

//出牌者
var attackPeople = 0;


buildAllCards();


window.onload = function () {
    canvas = document.getElementById("mainCanvas");
    ctx = canvas.getContext("2d");
    sendOutBtn = document.getElementById("sendOut");
    giveUpBtn = document.getElementById("giveUp");
    passBtn = document.getElementById("pass");
    messageText = document.getElementById("messageText");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    //player牌的X從這裡開始
    playerX = canvasWidth * 0.2;
    middleY = canvasHeight * 0.3;
    overlap = canvasWidth * 0.04;
    overlap2 = canvasWidth * 0.025;
    //button position
    //出牌
    sendOutBtn.style.fontSize = "30px";
    sendOutBtn.style.left = canvasWidth * 0.8 + "px";
    sendOutBtn.style.top = canvasHeight * 0.68 + "px";
    //捨棄
    giveUpBtn.style.fontSize = "30px";
    giveUpBtn.style.left = canvasWidth * 0.8 + "px";
    giveUpBtn.style.top = canvasHeight * 0.78 + "px";
    //pass
    passBtn.style.fontSize = "30px";
    passBtn.style.left = canvasWidth * 0.8 + "px";
    passBtn.style.top = canvasHeight * 0.88 + "px";


    //  卡寬是長的0.75倍
    cardHeight = canvasWidth * 0.08 / 0.75;
    playerCardYTop = canvasHeight - cardHeight - 20;
    playerCardYBottom = canvasHeight - 20;
    playerCardYHover = playerCardYTop - cardHeight * 0.5;

    startANewGame();
    reDrawPlayer();

    drawEnemy1();
    drawEnemy2();
    drawEnemy3();

}

