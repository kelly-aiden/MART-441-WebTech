// Global game config
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

// Game scenes
const gameScenes = {
    main: new Phaser.Scene('main'),
    gameOver: new Phaser.Scene('gameOver')
};

// Initialize the game
game = new Phaser.Game(config);

// Add the gameOver scene
gameScenes.gameOver = new Phaser.Scene('gameOver');
gameScenes.gameOver.create = function() {
    this.add.text(400, 300, 'Game Over!', {
        fontSize: '64px',
        fill: '#ff0000'
    });
    this.time.addEvent({
        delay: 3000,
        callback: () => game.destroy(true),
        loop: false
    });
};
game.scene.add('gameOver', gameScenes.gameOver);

// Add the main scene
gameScenes.main = new Phaser.Scene('main');
game.scene.add('main', gameScenes.main);

// Function to reset the timer
function resetTimer(scene) {
    timer.timeLeft = 120; // Reset to 2 minutes
    timer.timerText = scene.add.text(20, 20, `Time: ${timer.timeLeft}`, {
        fontSize: '32px',
        fill: '#fff'
    });
    timer.start(scene);
}

// Preload assets (common to all levels)
function preload() {
    this.load.image('tiles', 'assets/tilesets/platformer-tiles.png');
    this.load.image('coin', 'assets/sprites/coin.png');
    this.load.spritesheet('dude', 'assets/sprites/dude.png', {
        frameWidth: 32,
        frameHeight: 48
    });
}

// Create the main scene
function create() {
    // Initialize the timer
    resetTimer(this);

    // Load the level script
    loadLevelScript();
}

// Update function (empty here, but can be used for level-specific logic)
function update() {}
