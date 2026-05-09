var config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 600,
    parent: 'game-container',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var player;
var stars;
var bombs;
var platforms;
var spikes;
var cursors;
var spaceKey;
var gameOver = false;
var timerEvent;

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('sky', 'assets/bigsky.png');
    this.load.image('ground', 'assets/platform.png');
    this.load.image('star', 'assets/rainbow.png');
    this.load.image('coin', 'assets/coin.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('spike', 'assets/spikes.png');
    this.load.spritesheet('dude', 'assets/chick.png',
        { frameWidth: 16, frameHeight: 18 });
}

function create ()
{
    //  A simple background for our game
    this.add.image(600, 300, 'sky');

    //  The platforms group contains the ground and the 2 ledges we can jump on
    platforms = this.physics.add.staticGroup();

    //  Here we create the ground.
    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
    platforms.create(300, 568, 'ground').setScale(2,2).refreshBody();
    platforms.create(1000, 568, 'ground').setScale(0.2,2).refreshBody();
    platforms.create(1325, 568, 'ground').setScale(0.4,2).refreshBody();


    //  Now let's create some ledges
    platforms.create(350, 450, 'ground').setScale(1.5, 0.8).refreshBody();
    platforms.create(100, 350, 'ground').setScale(0.2, 0.8).refreshBody();
    platforms.create(600, 300, 'ground').setScale(1.65, 0.8).refreshBody();
    platforms.create(625, 190, 'ground').setScale(1.2, 0.8).refreshBody();

    platforms.create(1165, 190, 'ground').setScale(0.05, 0.5).refreshBody();
    platforms.create(1050, 250, 'ground').setScale(0.05, 0.5).refreshBody();

    //spikes
    hazards = this.physics.add.staticGroup();
    hazards.create(825, 590, 'spike').setScale(0.35,0.3).refreshBody();
    hazards.create(1140, 590, 'spike').setScale(0.28,0.3).refreshBody();


     // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setScale(2);

    //  Player physics properties
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 0 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 2 }),
        frameRate: 5,
        repeat: -1
    });

    this.anims.create({
        key: 'air',
        frames: [ { key: 'dude', frame: 3 } ],
        frameRate: 20
    });

    //  Input Events
    cursors = this.input.keyboard.createCursorKeys();
    //  Add space key
    spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    // Add coins to the game 
    coins = this.physics.add.group();
    coins.create(1275, 500, 'coin').setScale(0.03);
    coins.create(1165, 125, 'coin').setScale(0.03);
    coins.create(600, 400, 'coin').setScale(0.03);

    //Add a star to the game
    star = this.physics.add.sprite(450, 100, 'star');
    star.setScale(0.08);

    //Add bombs to the game
    bombs = this.physics.add.group();
    for (let i = 0; i < 3; i++) {
        var x = Phaser.Math.Between(300, 1000);
        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-250, 250), 20);
        bomb.allowGravity = false;
    }

    //  The text at the top of the screen
    coinText = this.add.text(1050, 16, 'GOLD:' + coinTotal + '/9', { fontSize: '50px', fill: '#000', fontStyle: 'bold', stroke: '#ffd500', strokeThickness: 4 });
    levelText = this.add.text(600, 16, '3/4', { fontSize: '50px', fill: '#000', fontStyle: 'bold', stroke: '#e1f1f5', strokeThickness: 4});
    timerText = this.add.text(10, 10, 'Time:' + timer, { fontSize: '50px', fill: '#000000', fontStyle: 'bold', stroke: '#f25757', strokeThickness: 4 });
    // Timer countdown - the timer logic with the this.time.addEvent, loop, and callback is all courtesy of Ecosia AI. I understand how it works but did not know about it before asking Ecosia AI
    timerEvent = this.time.addEvent({
        delay: 1000,
        callback: () => {
            timer--;
            timerText.setText('Time:' + timer);
            if (timer <= 0) {
                this.physics.pause()

                player.setTint(0xff0000);

                player.anims.play('air');

                timerEvent.remove();

                gameOver = true;

                const gameOverScreen = document.getElementById('game-container');
                //The delay mechanic presented here is also Ecosia AI. All of the html manipulation was me
                setTimeout(() => {
                    game.destroy(true);
                    gameOverScreen.style.display = 'flex';
                    gameOverScreen.style.justifyContent = 'center';
                    gameOverScreen.style.alignItems = 'center';
                    gameOverScreen.style.backgroundColor = 'black';
                    gameOverScreen.innerHTML = '<p style="color: red; font-size: 150px; font-weight: bold;">GAME OVER</p>';
                }, 3000);
            }
        },
        loop: true
    });


    //  collision physics with no significant outcomes
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(coins, platforms);
    this.physics.add.collider(star, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(bombs, hazards);

    //  checks all important player - object collisions and their outcomes
    this.physics.add.overlap(player, coins, collectCoin, null, this);

    this.physics.add.overlap(player, star, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitHazard, null, this);

    this.physics.add.collider(player, hazards, hitHazard, null, this);

}

function update ()
{
    if (gameOver)
    {
        return;
    }

    
    else if (cursors.left.isDown)
    {
        player.setVelocityX(-200);

        player.setFlipX(true);

        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(200);

        player.setFlipX(false);

        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);

        player.anims.play('turn');
    }

    if (!player.body.touching.down)
    {
        player.anims.play('air');
    }

    //space key for jumping
    if (spaceKey.isDown && player.body.touching.down)
    {
        player.setVelocityY(-250);

        player.anims.play('air');
    }
}

//handles score keeping for coins
function collectCoin (player, coin)
{
    coin.disableBody(true, true);

    //  Add and update the score
    coinTotal += 1;
    coinText.setText('GOLD:' + coinTotal + '/9');
}

//Once the rainbow star is collected, the level ends and is destroyed and the next level is loaded
function collectStar (player, star)
{
    star.disableBody(true, true);
    timer += 60; 

    game.destroy(true);

    var script4 = document.createElement('script');
    script4.src = 'level-4.js';
    document.body.appendChild(script4);
}

//When a bomb or spikes are hit, end game
function hitHazard (player, hazard)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('air');

    timerEvent.remove();

    gameOver = true;

    const gameOverScreen = document.getElementById('game-container');
    //The delay mechanic presented here is also Ecosia AI. All of the html manipulation was me
    setTimeout(() => {
        game.destroy(true);
        gameOverScreen.style.display = 'flex';
        gameOverScreen.style.justifyContent = 'center';
        gameOverScreen.style.alignItems = 'center';
        gameOverScreen.style.backgroundColor = 'black';
        gameOverScreen.innerHTML = '<p style="color: red; font-size: 150px; font-weight: bold;">GAME OVER</p>';
        }, 3000);
}