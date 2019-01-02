// wrap classes and methods
window.Game = {};
// ---------------------------
// var
// ---------------------------
var canvas, ctx;
var canvasH, canvasW;
var gameoverText, reloadBtn;
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


// is gameover ? 
var over = false;





// -------------------------
// const
// -------------------------

// size
const mapSize = 1;

// speed
const map_speed = 2;
const player_speed = 10;






