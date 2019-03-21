// ----------------------------
// class -> Game.Map 
// ----------------------------
(() => {
    function Map(width, height) {
        this.x = 0;
        this.speed = map_speed;
        this.width = width;
        this.height = height;

        // map texture
        this.image = new Image();
    }

    // generate a map
    Map.prototype.generate = function () {
        var mctx = document.createElement("canvas").getContext("2d");
        mctx.canvas.width = this.width;
        mctx.canvas.height = this.height;

        // draw ground & sky
        mctx.fillStyle = "#CCEEFF";
        mctx.fillRect(0, 0, this.width, this.height);
        mctx.fillStyle = "#AA7700";
        mctx.fillRect(0, horizon, this.width, this.height - horizon);


        // draw clouds
        var cloudPos = [
            0, 0, 0, 0, 1, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 5, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 0, 0, 0, 0, 0, 2, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 4, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 3, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 1, 0, 0, 0
            , 0, 0, 0, 4, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 0, 0, 0, 0, 2, 0, 0, 0, 0
            , 0, 3, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 5, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 0, 0, 4, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 2, 0, 0, 0
            , 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 5, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 3, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 2
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 6, 0, 0, 0, 1, 0, 0, 0, 1
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 0, 2, 0, 0, 0, 0, 0, 4, 0
            , 0, 0, 0, 0, 5, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 0, 0, 1, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 5, 0, 0, 0
            , 2, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
            , 0, 3, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 2, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 3, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
            // ----------------------------
        ];
        var cloud_size = {
            "0": { w: 43 * 3, h: 28 * 3 },
            "1": { w: 29 * 3, h: 21 * 3 },
            "2": { w: 42 * 3, h: 29 * 3 },
            "3": { w: 72 * 3, h: 37 * 3 },
            "4": { w: 56 * 3, h: 36 * 3 }
        };
        var cloudArr = [];
        for (var i = 0; i < 5; ++i) {
            cloudArr[i] = new Image();
            cloudArr[i].setAttribute('crossOrigin', 'anonymous');
        }

        cloudArr[0].src = "picture/cloud1.png";
        cloudArr[1].src = "picture/cloud2.png";
        cloudArr[2].src = "picture/cloud3.png";
        cloudArr[3].src = "picture/cloud4.png";
        cloudArr[4].src = "picture/cloud5.png";

        var counter = 0, len = 0;
        for (i in cloudArr) {
            cloudArr[i].addEventListener('load', load_over, false);
            ++len;
        }


        function load_over() {
            if (++counter === len) {

                var x = ~~(canvasW / 5);
                var y = ~~(canvasH / 5);

                for (i in cloudPos) {
                    if (cloudPos[i] != 0) {

                        // canvas is divided into five, 
                        // but the map is divided into ten,
                        // so the position needs to be calculated.
                        var cx = x * ((~~(i / 50)) * 10 + (i % 10));
                        var cy = y * ((i % 50) / 10);
                        var j = i - 1;
                        
                        mctx.drawImage(cloudArr[j % 5], cx, cy
                            , cloud_size[(j % 5).toString()].w, cloud_size[(j % 5).toString()].h);
                    }
                }



                map.image.src = mctx.canvas.toDataURL("image/png");


            }
        }

    }

    Map.prototype.update = function (){
        this.x += this.speed;
        if(this.x >= this.width)
            this.x = 0;
        this.draw();
    }

    // draw map  to screen
    Map.prototype.draw = function () {

        // if cropped image is smaller than canvas we need to change the source dimensions
        if (this.width - this.x < canvasW){
            
            var sWidth = this.width - this.x;

            ctx.drawImage(this.image, this.x, 0, sWidth, canvasH, 0, 0, sWidth, canvasH);

            var cx = sWidth;
            sWidth = canvasW - cx;
            ctx.drawImage(this.image, 0, 0, sWidth, canvasH, cx, 0, sWidth, canvasH);
        }
        else{
            ctx.drawImage(this.image, this.x, 0, canvasW, canvasH, 0, 0, canvasW, canvasH);
        }

    }

    // add class
    Game.Map = Map;

})();


// ----------------------------
// class -> Game.Player 
// ----------------------------
(() => {
    function Player(x, y, width, height, crashX, crashY, crashWidth, crashHeight,
        imgSrc0, imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6, imgSrc7, imgSrc8) {

        this.jumpTime = 1;
        this.jumpForce = 0;
        this.speed = player_speed;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.crashX = crashX;
        this.crashY = crashY;
        this.crashWidth = crashWidth;
        this.crashHeight = crashHeight;

        this.imgArr = [];
        for (var i = 0; i < 9; ++i) {
            this.imgArr[i] = new Image();
            var src = eval("imgSrc" + i.toString());
            this.imgArr[i].src = src;
        }

        // init direction 
        this.img = this.imgArr[0];

    }

    Player.prototype.update = function () {

        ++blinkTime;
        ++walkTime;
        if (!this.jumpTime) this.jump();
        this.draw();
    }

    Player.prototype.jump = function () {

        if (this.jumpForce > 0) {
            this.y -= this.jumpForce;
            this.crashY -= this.jumpForce;
            this.jumpForce -= 0.8;
        }
        if (this.jumpForce <= 0 && this.y < (canvasH * 0.93 - this.height)) {
            this.y += 7;
            this.crashY += 7;
        }
        else if (this.y >= (canvasH * 0.93 - this.height)) {
            this.jumpTime = 1;
        }
    }

    Player.prototype.crash = function (o) {
        //player position
        var left = this.crashX;
        var right = this.crashX + this.crashWidth;
        var up = this.crashY;
        var down = this.crashY + this.crashHeight;
        //player center point position
        var centerX = this.crashX + this.crashWidth / 2;
        var centerY = this.crashY + this.crashHeight / 2;
        //enemy position
        var eLeft = o.crashX;
        var eRight = o.crashX + o.crashWidth;
        var eUp = o.crashY;
        var eDown = o.crashY + o.crashHeight;

        if (left < eRight &&
            right > eLeft &&
            up < eDown &&
            down > eUp)

            Game.Gameover();
    }

    Player.prototype.cry = function cry() {

        if (this.jumpTime == 0)
            this.img = this.imgArr[8];
        else if (this.walkTime <= 35)
            this.img = this.imgArr[7];
        else
            this.img = this.imgArr[6];

        this.draw(1);
    }

    Player.prototype.draw = function draw(isCry) {

        //ctx.fillRect(this.crashX, this.crashY, this.crashWidth, this.crashHeight);

        //change player picture
        if (!isCry) {
            if (this.jumpTime == 1) {
                if (walkTime <= 15)
                    if (blinkTime <= 150)
                        this.img = this.imgArr[0];
                    else
                        this.img = this.imgArr[1];
                else
                    if (blinkTime <= 200)
                        this.img = this.imgArr[2];
                    else
                        this.img = this.imgArr[3];
            }
            else
                if (blinkTime <= 150)
                    this.img = this.imgArr[4];
                else
                    this.img = this.imgArr[5];
            if (blinkTime >= 200)
                blinkTime = 0;
            if (walkTime >= 30)
                walkTime = 0;
        }
        
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);


    }


    Game.Player = Player;

})();

// ----------------------------
// class -> Game.Enemy
// ----------------------------
(() => {
    function Enemy(imgSrc, x, y, width, height, crashX, crashY, crashWidth, crashHeight) {
        this.img = new Image()
        this.img.src = imgSrc;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.crashX = crashX;
        this.crashY = crashY;
        this.crashWidth = crashWidth;
        this.crashHeight = crashHeight;
    }
    Enemy.prototype.update = function () {
        this.x -= player.speed;
        this.crashX -= player.speed;

        this.draw();
    }
    // Back to the right of the screen
    Enemy.prototype.back = function () {
        if ((this.x < - dis_pos) || over) {
            var spacing = this.crashX - this.x;
            this.x = back_pos;
            this.crashX = this.x + spacing;

            Game.rand_enemy();
        }
    }

    Enemy.prototype.draw = function draw() {
        //ctx.fillRect(this.crashX, this.crashY, this.crashWidth, this.crashHeight);
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    Game.Enemy = Enemy;

})();


// ----------------------------
// Game.Create
// ----------------------------
(() => {
    Game.Create = () => {

        var pic_size = {
            player: {
                w: 49,
                h: 40,
                d: 2
            },

            tree: {
                w: 173 * 0.75,
                h: 209 * 0.75,
                d: 3
            },

            car: {
                w: 257,
                h: 82,
                d: 3
            }
        };

        // setup an object that represents the room
        map = new Game.Map(canvasW * mapSize, canvasH);
        // generate an image texture for the room
        map.generate();


        var width = canvasW * 0.15 * (pic_size["player"].w / Math.pow(10, pic_size["player"].d));
        var height = width / (pic_size["player"].w / Math.pow(10, pic_size["player"].d)) * (pic_size["player"].h / Math.pow(10, pic_size["player"].d));
        var x = canvasW * 0.05;
        var y = canvasH * 0.93 - height;
        player = new Game.Player(x, y, width, height, x + 10, y + 10, width - 20, height - 20
            , "picture/MikuStand1.png"
            , "picture/MikuStand2.png"
            , "picture/MikuWalk1.png"
            , "picture/MikuWalk2.png"
            , "picture/MikuJump1.png"
            , "picture/MikuJump2.png"
            , "picture/MikuStandCry.png"
            , "picture/MikuWalkCry.png"
            , "picture/MikuJumpCry.png");

        width = canvasW * 0.7 * (pic_size["tree"].w / Math.pow(10, pic_size["tree"].d));
        height = width / (pic_size["tree"].w / Math.pow(10, pic_size["tree"].d)) * (pic_size["tree"].h / Math.pow(10, pic_size["tree"].d));
        x = canvasW * 0.95;
        y = horizon - height + 20; // let tree on the ground 
        tree = new Game.Enemy("picture/tree.png", x, y, width, height, x + 10, y + 5, width - 20, height - 10);
        enemyArr.push(tree);


        width = canvasW * 0.5 * (pic_size["car"].w / Math.pow(10, pic_size["car"].d));
        height = width / (pic_size["car"].w / Math.pow(10, pic_size["car"].d)) * (pic_size["car"].h / Math.pow(10, pic_size["car"].d));
        x = canvasW * 0.95;
        y = horizon - height;

        car = new Game.Enemy("picture/car.png", x, y, width, height, x, y + 10, width, height - 10);
        enemyArr.push(car);

        startTextEffectL()

    }
})();



// ----------------------------
// Game.Play/Pause
// ----------------------------
(() => {
    var runningId = -1;
    var interval_t = 0;

    function addScore(){
        if(++interval_t > 1){
            score_text.innerHTML = ++score;
            interval_t = 0;
            if(!(score % 100)){
                ++map.speed;
                ++player.speed;
            }
            
        }
    }

    function gameLoop() {
        ctx.clearRect(0, 0, canvasW, canvasH);
        map.update();

        cur_enemy.back();
        cur_enemy.update();

        player.update();
        player.crash(cur_enemy);

        addScore();
    }

    Game.Play = () => {

        closeStartUI()
        if (runningId == -1) {
            runningId = setInterval(() => {
                gameLoop();
            }, 16.7);

        }
    }

    Game.Pause = () => {
        if (runningId == -1) {
            Game.play();
        }
        else {
            clearInterval(runningId);
            runningId = -1;
        }
    }
})();

// ----------------------------
// Game.rand_enemy
// ----------------------------
(() => {
    Game.rand_enemy = () => {
        cur_enemy = enemyArr[~~(Math.random() * enemyArr.length)];
    }
})();


// ----------------------------
// Game.Gameover
// ----------------------------
(() => {
    Game.Gameover = () => {
        Game.Pause();
        over = true;
        gameoverText.style.display = "block";
        reloadBtn.style.display = "block";

        voice_miku[3].play();
        player.cry();
    }
})();


// ----------------------------
// Game.Restart
// ----------------------------
(() => {
    Game.Restart = () => {
        gameoverText.style.display = "none";
        reloadBtn.style.display = "none";

        cur_enemy.back();
        over = false;
        Game.Clear();
        Game.Play();
    }
})();


// ----------------------------
// Game.Clear
// ----------------------------
(() => {
    Game.Clear = () => {
        player.speed = player_speed;
        map.speed = map_speed;
        map.x = 0;
        score = 0;
    }
}) ();