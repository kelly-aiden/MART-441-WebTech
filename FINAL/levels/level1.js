var config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 600,
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
var score = 0;
var gameOver = false;
var scoreText;
var level = 1;

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
    //platforms.create(625, 190, 'ground').setScale(4, 0.8).refreshBody();

    platforms.create(1165, 190, 'ground').setScale(0.05, 0.5).refreshBody();
    platforms.create(1050, 250, 'ground').setScale(0.05, 0.5).refreshBody();

    //spikes
    hazards = this.physics.add.staticGroup();
    hazards.create(825, 590, 'spike').setScale(0.35,0.3).refreshBody();
    hazards.create(1140, 590, 'spike').setScale(0.28,0.3).refreshBody();


     // The player and its settings
    player = this.physics.add.sprite(100, 450, 'dude');
    player.setScale(2);

    //  Player physics properties. Give the little guy a slight bounce.
    player.setBounce(0.2);
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

    //  Some coins to collect, 12 in total, evenly spaced 70 pixels apart along the x axis
    coins = this.physics.add.group();

    // Add coins to the game 
    coins.create(100, 100, 'coin').setScale(0.03);
    coins.create(200, 200, 'coin').setScale(0.03);

    //Add a star to the game
    star = this.physics.add.sprite(100, 450, 'star');
    star.setScale(0.08);

    bombs = this.physics.add.group();

    //  The score
    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

    //  Collide the player and the coins with the platforms
    this.physics.add.collider(player, platforms);
    this.physics.add.collider(coins, platforms);
    this.physics.add.collider(star, platforms);
    this.physics.add.collider(bombs, platforms);
    this.physics.add.collider(bombs, hazards);

    //  Checks to see if the player overlaps with any of the coins if he does call the collectCoin function
    this.physics.add.overlap(player, coins, collectCoin, null, this);

    this.physics.add.overlap(player, star, collectStar, null, this);

    this.physics.add.collider(player, bombs, hitBomb, null, this);

    this.physics.add.collider(player, hazards, hitSpikes, null, this);

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

function collectCoin (player, coin)
{
    coin.disableBody(true, true);

    //  Add and update the score
    score += 10;
    scoreText.setText('Score: ' + score);

    if (coins.countActive(true) === 0)
    {
        //  A new batch of coins to collect
        coins.children.iterate(child => {
            child.enableBody(true, child.x, 0, true, true)
        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var bomb = bombs.create(x, 16, 'bomb');
        bomb.setBounce(1);
        bomb.setCollideWorldBounds(true);
        bomb.setVelocity(Phaser.Math.Between(-250, 250), 20);
        bomb.allowGravity = false;

    }
}

function collectStar (player, star)
{

}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    player.anims.play('turn');

    gameOver = true;
}

function hitSpikes (player, hazards)
{
    score -= 50;
    scoreText.setText('Score: ' + score);

    player.setPosition(100, 500);
    player.setVelocity(0);
}