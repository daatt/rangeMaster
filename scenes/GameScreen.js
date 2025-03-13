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
        // Game logic will go here in future steps
    }
}

// Export the scene
export default GameScreen; 