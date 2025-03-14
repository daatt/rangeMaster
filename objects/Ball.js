class Ball extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'ball');
        
        // Add this sprite to the scene and enable physics
        scene.add.existing(this);
        scene.physics.add.existing(this);
        
        // Set ball properties
        this.setCollideWorldBounds(true);
        this.setBounce(0.5);
        this.setFriction(0.5, 0.5);
        this.setScale(0.15); // Reduced from 0.5 to make the ball smaller
        
        // Status flags
        this.isInFlight = false;
        this.isReset = true;
        
        // Starting position
        this.startX = x;
        this.startY = y;
    }
    
    // Reset the ball to starting position
    reset() {
        this.setPosition(this.startX, this.startY);
        this.setVelocity(0, 0);
        this.setAcceleration(0, 0);
        this.setAngularVelocity(0);
        this.isInFlight = false;
        this.isReset = true;
        this.setVisible(true);
    }
    
    // Launch the ball with given power and angle
    launch(power, angle) {
        // Convert angle from degrees to radians
        const radians = Phaser.Math.DegToRad(angle);
        
        // Calculate velocity components based on power and angle
        const velocityX = Math.cos(radians) * power;
        const velocityY = -Math.sin(radians) * power; // Negative because y increases downward
        
        // Apply velocity to the ball
        this.setVelocity(velocityX, velocityY);
        
        // Update status flags
        this.isInFlight = true;
        this.isReset = false;
    }
    
    // Update method to check if ball has stopped or is out of bounds
    update() {
        // If ball is in flight but has very low velocity, consider it stopped
        if (this.isInFlight && 
            Math.abs(this.body.velocity.x) < 5 && 
            Math.abs(this.body.velocity.y) < 5 && 
            this.body.touching.down) {
            this.isInFlight = false;
        }
        
        // If ball is out of visible bounds, prepare for reset
        if (this.y > this.scene.physics.world.bounds.height || 
            this.x < 0 || 
            this.x > this.scene.physics.world.bounds.width) {
            this.isInFlight = false;
        }
    }
}

export default Ball; 