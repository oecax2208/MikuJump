// wrap classes and methods
window.Game = {};

var canvas, ctx;

var horizon;



var rock = new Image();


var map;
var mapSize = 20;
var mapSpeed = 2;
// character
var player, cur_enemy;
var enemyArr = [];



var speed = 10;
// player expression
var blinkTime = 0;
var walkTime = 0;
// is gameover ? 
var over = false;
var canvasH, canvasW;
var gameoverText, reloadBtn;


