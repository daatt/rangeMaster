class StartScreen extends Phaser.Scene {
    constructor() {
        super('StartScreen');
    }

    preload() {
        // Load any assets needed for the start screen
        // For now we'll just use text for our buttons
    }

    create() {
        // Add title text
        const titleText = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 3, 
            'RANGE MASTER', 
            {
                fontFamily: 'Arial',
                fontSize: '48px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        // Add play button
        const playButton = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 2, 
            'PLAY', 
            {
                fontFamily: 'Arial',
                fontSize: '32px',
                color: '#ffffff'
            }
        ).setOrigin(0.5);

        // Make play button interactive
        playButton.setInteractive({ useHandCursor: true });
        playButton.on('pointerover', () => {
            playButton.setStyle({ fill: '#ff0' });
        });
        playButton.on('pointerout', () => {
            playButton.setStyle({ fill: '#fff' });
        });
        playButton.on('pointerdown', () => {
            this.scene.start('GameScreen');
        });

        // Add options button
        const optionsButton = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 2 + 60, 
            'OPTIONS', 
            {
                fontFamily: 'Arial',
                fontSize: '32px',
                color: '#ffffff'
            }
        ).setOrigin(0.5);

        // Make options button interactive
        optionsButton.setInteractive({ useHandCursor: true });
        optionsButton.on('pointerover', () => {
            optionsButton.setStyle({ fill: '#ff0' });
        });
        optionsButton.on('pointerout', () => {
            optionsButton.setStyle({ fill: '#fff' });
        });
        optionsButton.on('pointerdown', () => {
            this.scene.start('OptionsMenu');
        });
    }

    update() {
        // Not needed for a simple start screen
    }
}

// Export the scene
export default StartScreen; 