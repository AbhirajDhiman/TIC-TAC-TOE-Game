# Tic Tac Toe Game

This Tic Tac Toe game, created using HTML, CSS, and JavaScript, allows two players to compete by marking spaces on a 3x3 grid. The game tracks turns, detects wins and draws, and offers reset and new game options. It’s perfect for beginners to grasp DOM manipulation, event handling, and CSS transitions.🎮It allows two players to take turns marking spaces on a 3x3 grid, with the objective of being the first to align three of their marks in a row, column, or diagonal.

## Features
- **Interactive UI:** Responsive user interface with dynamic button color changes based on player turns.
- **Turn Tracking:** Alternates between "X" and "O" after each click.
- **Win and Draw Detection:** Checks for winning patterns after each move and displays a message when a player wins or the game ends in a draw.
- **Reset and New Game:** Buttons to reset the current game or start a new game for continuous play.

## How the Logic Works
1. **Turn Tracking:**
   - A boolean variable `turnO` tracks the current player. `true` for "O" and `false` for "X".
   - After each click, the variable toggles to switch turns.

2. **Event Handling:**
   - Each box on the grid has a click event listener attached.
   - On click, the box is marked with "X" or "O" depending on the current player's turn.

3. **Win Detection:**
   - The game checks predefined winning patterns stored in `WinPattern`.
   - After each move, the game checks if any pattern has all three positions filled by the same player's mark.

4. **Draw Detection:**
   - A counter `clickcount` tracks the number of moves.
   - If all nine boxes are filled without a winner, the game declares a draw.

5. **Reset and New Game:**
   - The reset and new game buttons call the `ResetGame` function, which clears the board and resets all variables for a new game.

## Learning Outcomes
As a beginner in JavaScript, this project helped understand:
- **DOM Manipulation:** Selecting and manipulating HTML elements using JavaScript.
- **Event Handling:** Adding and managing event listeners for user interactions.
- **Conditional Logic:** Using if-else statements to control game flow.
- **CSS Transitions:** Applying smooth transitions for visual effects.

This project is an excellent introduction to fundamental JavaScript concepts and provides hands-on experience in building interactive web applications.

## Usage
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>

---THANK YOU---                                  
