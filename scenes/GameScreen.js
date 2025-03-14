// Import the Ball class from objects directory
import Ball from '../objects/Ball.js';

class GameScreen extends Phaser.Scene {
    constructor() {
        super('GameScreen');
    }

    preload() {
        // Load game assets
        this.load.image('background', 'assets/background.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('target-standard', 'assets/target-standard.png');
        this.load.image('target-bonus', 'assets/target-bonus.png');
    }

    create() {
        // Add background
        this.add.image(400, 300, 'background').setScale(0.8); // Adjust scale as needed
        
        // Create the golf ball at the bottom center of the screen
        const ballX = this.cameras.main.width / 2;
        const ballY = this.cameras.main.height - 50; // 50 pixels from the bottom
        this.ball = new Ball(this, ballX, ballY);
        
        // Store a reference to the ball for use in update method
        this.ball.setDepth(1); // Ensure the ball is rendered above the background
        
        // Add temporary text to indicate we're in the game screen
        const gameText = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 2, 
            'Game Screen', 
            {
                fontFamily: 'Arial',
                fontSize: '32px',
                color: '#ffffff'
            }
        ).setOrigin(0.5);
        
        // Add temporary back button to return to start screen
        const backButton = this.add.text(
            100, 
            50, 
            'Back to Menu', 
            {
                fontFamily: 'Arial',
                fontSize: '20px',
                color: '#ffffff'
            }
        ).setOrigin(0.5);
        
        // Make back button interactive
        backButton.setInteractive({ useHandCursor: true });
        backButton.on('pointerover', () => {
            backButton.setStyle({ fill: '#ff0' });
        });
        backButton.on('pointerout', () => {
            backButton.setStyle({ fill: '#fff' });
        });
        backButton.on('pointerdown', () => {
            this.scene.start('StartScreen');
        });
    }

    update() {
        // Update the ball if it exists
        if (this.ball) {
            this.ball.update();
            
            // If the ball is out of bounds or stopped, reset it
            if (!this.ball.isInFlight && !this.ball.isReset) {
                this.ball.reset();
            }
        }
    }
}

// Export the scene
export default GameScreen; 