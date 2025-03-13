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
  - Links to main.js script

#### main.js
- **Purpose**: Initializes the Phaser game instance with configuration
- **Key Features**:
  - Defines game dimensions (800x600)
  - Configures the physics engine (Arcade)
  - Sets up the initial scene
  - Contains placeholder methods for the default scene (preload, create, update)

### Directory Purposes

#### scenes/
- Will contain separate Phaser Scene classes for different game states
- Future implementation:
  - StartScreen.js: Main menu scene
  - GameScreen.js: Actual gameplay scene
  - Each scene will have its own lifecycle methods (preload, create, update)

#### objects/
- Will contain classes for game entities
- Future implementation:
  - Ball.js: Golf ball class with physics properties
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
  - target sprites

## Design Patterns

- **Scene Management**: Using Phaser's built-in scene system for game state management
- **Object-Oriented Approach**: Game entities will be encapsulated in their own classes
- **Component-Based Design**: Objects will have their own properties and behaviors

## Technical Decisions

1. **Using Phaser's Arcade Physics**: Provides a lightweight physics engine suitable for this type of game
2. **Loading Phaser via CDN**: Simplifies setup and reduces local dependencies
3. **Modular File Structure**: Enhances maintainability and separation of concerns
