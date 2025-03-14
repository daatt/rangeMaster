# Range Master Architecture

## Project Structure
The Range Master game follows a modular architecture to maintain code organization and separation of concerns. The project is structured as follows:

```
range-master/
│
├── index.html           # Entry point for the web application
├── main.js              # Main game configuration and initialization
│
├── assets/              # Game assets (images, sounds, etc.)
│   ├── background.png   # Driving range background
│   ├── ball.png         # Golf ball sprite
│   ├── target-standard.png # Standard target
│   └── target-bonus.png # Bonus target with higher point value
│
├── scenes/              # Game scene classes
│   ├── StartScreen.js   # Main menu scene
│   ├── GameScreen.js    # Actual gameplay scene
│   └── OptionsMenu.js   # Options menu scene
│
├── objects/             # Game object classes (ball, targets, etc.)
│
├── utils/               # Utility functions and helper methods
│
└── constants/           # Game constants and configuration values
```

## File Purposes

### Core Files

#### index.html
- **Purpose**: Serves as the entry point for the web application
- **Key Features**:
  - Contains viewport settings for proper mobile display
  - Links to the Phaser CDN
  - Contains basic styling for the game canvas
  - Links to main.js script with type="module" for ES6 module support

#### main.js
- **Purpose**: Initializes the Phaser game instance with configuration
- **Key Features**:
  - Imports the scene classes using ES6 module syntax
  - Defines game dimensions (800x600)
  - Configures the physics engine (Arcade)
  - Sets up the scene array with all available scenes
  - Initializes the game with the StartScreen as the default scene

### Scene Files

#### scenes/StartScreen.js
- **Purpose**: Provides the main menu interface for the game
- **Key Features**:
  - Displays the game title "RANGE MASTER"
  - Presents interactive "PLAY" button that transitions to the GameScreen scene
  - Presents interactive "OPTIONS" button that transitions to the OptionsMenu scene
  - Implements hover effects for buttons with color changes
  - Uses Phaser's text objects for UI elements

#### scenes/GameScreen.js
- **Purpose**: Contains the actual gameplay elements and mechanics
- **Key Features**:
  - Loads and displays the driving range background
  - Preloads game assets (ball, targets)
  - Creates and manages the golf ball object from Ball.js
  - Positions the ball at the bottom center of the screen
  - Updates the ball's state in the game loop
  - Handles automatic ball reset when out of bounds or stopped
  - Provides a "Back to Menu" button for returning to the StartScreen
  - Will eventually handle target interactions and scoring

#### scenes/OptionsMenu.js
- **Purpose**: Provides user-configurable settings for the game
- **Key Features**:
  - Displays "OPTIONS" title
  - Implements a togglable sound setting (ON/OFF)
  - Presents a "BACK" button to return to the StartScreen
  - Uses state variable (soundEnabled) to track current settings
  - Demonstrates interactive UI elements with hover effects

### Directory Purposes

#### scenes/
- Contains separate Phaser Scene classes for different game states
- Each scene implements the standard Phaser lifecycle methods:
  - constructor: Sets up the scene key
  - preload: Loads necessary assets
  - create: Sets up game objects and UI elements
  - update: Handles frame-by-frame logic (when needed)

#### objects/
- Contains classes for game entities and game objects
- Current implementation:
  - Ball.js: Golf ball class with physics properties and movement logic
- Future implementation:
  - Target.js: Targets with collision detection

#### utils/
- Will contain helper functions for common tasks
- Future implementation:
  - Calculation utilities
  - Game mechanics helpers

#### constants/
- Will contain game configuration values
- Future implementation:
  - Physics settings
  - Scoring values
  - Gameplay parameters

#### assets/
- Contains all game graphics and media files
- Currently includes:
  - background.png: Driving range background
  - ball.png: Golf ball sprite
  - target-standard.png: Standard target sprite
  - target-bonus.png: Bonus target sprite with higher point value

## Design Patterns

- **Scene Management**: Using Phaser's built-in scene system for game state management
  - The game uses a scene-based architecture where each game state is a separate scene
  - Scenes can transition between each other using scene.start() method
  - Each scene handles its own asset loading, object creation, and update logic

- **Object-Oriented Approach**: Game entities will be encapsulated in their own classes
  - Scenes are implemented as ES6 classes extending Phaser.Scene
  - Future game objects will be implemented as classes with their own properties and methods

- **Component-Based Design**: Objects will have their own properties and behaviors
  - UI elements like buttons use composition of Phaser's built-in objects with custom event handlers
  - Future game objects will follow this pattern for extensibility

- **Event-Driven Programming**: 
  - Interactive elements (buttons) use event listeners for user interaction
  - Events like 'pointerover', 'pointerout', and 'pointerdown' control UI behavior

## Technical Decisions

1. **Using Phaser's Arcade Physics**: Provides a lightweight physics engine suitable for this type of game
2. **Loading Phaser via CDN**: Simplifies setup and reduces local dependencies
3. **Modular File Structure**: Enhances maintainability and separation of concerns
4. **ES6 Modules**: Using import/export syntax for better code organization and encapsulation
5. **Interactive Text as Buttons**: Simplifies UI implementation while maintaining flexibility

### Game Object Files

#### objects/Ball.js
- **Purpose**: Represents the golf ball that players will interact with
- **Key Features**:
  - Extends Phaser.Physics.Arcade.Sprite for built-in physics integration
  - Tracks ball state with isInFlight and isReset flags
  - Provides methods for launching the ball with physics-based trajectory
  - Implements collision detection with world boundaries
  - Handles automatic ball reset when stopped or out of bounds
  - Manages its own update logic within the Phaser game loop
