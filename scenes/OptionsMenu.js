class OptionsMenu extends Phaser.Scene {
    constructor() {
        super('OptionsMenu');
        this.soundEnabled = true; // Default sound setting
    }

    preload() {
        // Load any assets needed for the options menu
        // For now we'll just use text for our buttons
    }

    create() {
        // Add title text
        const titleText = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 4, 
            'OPTIONS', 
            {
                fontFamily: 'Arial',
                fontSize: '48px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        // Add sound toggle option
        const soundText = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 2, 
            'Sound: ON', 
            {
                fontFamily: 'Arial',
                fontSize: '28px',
                color: '#ffffff'
            }
        ).setOrigin(0.5);

        // Make sound toggle interactive
        soundText.setInteractive({ useHandCursor: true });
        soundText.on('pointerover', () => {
            soundText.setStyle({ fill: '#ff0' });
        });
        soundText.on('pointerout', () => {
            soundText.setStyle({ fill: '#fff' });
        });
        soundText.on('pointerdown', () => {
            this.soundEnabled = !this.soundEnabled;
            soundText.setText(`Sound: ${this.soundEnabled ? 'ON' : 'OFF'}`);
            // In a real game, we would update a sound manager here
        });

        // Add back button
        const backButton = this.add.text(
            this.cameras.main.width / 2, 
            this.cameras.main.height / 2 + 100, 
            'BACK', 
            {
                fontFamily: 'Arial',
                fontSize: '32px',
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
        // Not needed for a simple options menu
    }
}

// Export the scene
export default OptionsMenu; 