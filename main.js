// Main configuration file for Range Master game

// Game configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
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

// Initialize the game
const game = new Phaser.Game(config);

// Empty scene methods
function preload() {
    // Assets will be loaded here in future steps
}

function create() {
    // Game objects will be created here in future steps
    console.log('Phaser game initialized successfully');
}

function update() {
    // Game logic will be updated here in future steps
} 