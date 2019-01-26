// wrap classes and methods
window.Game = {};
// ---------------------------
// var
// ---------------------------
// UI
var canvas, ctx;
var canvasH, canvasW;
var gameoverText, startBtn, reloadBtn;
//  class    /  id --->
var startText, startTextDiv, startTextL, startTextR;
var promptText;
var score_text, score = 0;



var horizon;
// enemy disappear & back position 
var dis_pos, back_pos;


// map
var map;


// character
var player, cur_enemy;
var enemyArr = [];
// player expression
var blinkTime = 0;
var walkTime = 0;


var start = false;
// is gameover ? 
var over = false;


// voice
var voice_title = [];
var voice_miku = [];


// -------------------------
// const
// -------------------------

// size
const mapSize = 20;

// speed
const map_speed = 2;
const player_speed = 10;






