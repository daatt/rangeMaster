// Main configuration file for Range Master game
import StartScreen from './scenes/StartScreen.js';
import GameScreen from './scenes/GameScreen.js';
import OptionsMenu from './scenes/OptionsMenu.js';

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
    scene: [StartScreen, GameScreen, OptionsMenu]
};

// Initialize the game
const game = new Phaser.Game(config);

console.log('Phaser game initialized successfully'); 