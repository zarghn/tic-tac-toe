# ⭕ Tic Tac Toe

A two-player Tic Tac Toe game built with **React**, featuring a fully custom UI, based on the classic **Tic-Tac-Toe project from [React - The Complete Guide (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOoqb8f9jiPCYDwj3ySqulX0aC1mDrTVyyXXWq9fH-z1GwvgJ5gxW) by Maximilian Schwarzmüller**.

> 🎨 The entire design and styling are 100% custom-built by me — only the core game logic follows the concepts taught in the course.

<p align="center">
<img width="70%" alt="tic-tac-toe-preview" src="https://github.com/user-attachments/assets/8b15bb05-e569-4b68-800d-0ab1dc5ab470" />

## ✨ Features

### 🎮 Gameplay

* Two-player turn-based gameplay (Player 1 = circle, Player 2 = triangle)
* Click any empty cell to place your mark
* Automatic turn switching after every move
* Win detection across all 8 winning lines (rows, columns, diagonals)
* Draw detection when the board fills up with no winner
* Game automatically locks once there's a winner or a draw — no more clicks accepted

### 🎨 Design

* Fully custom UI recreated from an original Figma-style design
* Custom circle & triangle markers instead of the classic X/O
* Bold, playful typography with a warm color palette (cream, pink, teal, black)
* Grid overlays, player tags, and a cartoon character illustration
* Distinct top bar showing whose turn it is / who won / draw status

---

## 🛠️ Tech Stack

* **React** (Vite)
* **CSS3** — hand-crafted, no frameworks
* **JavaScript (ES6+)**

---

## 📁 Project Structure

```text
tic-tac-toe/
│
├── public/
│   └── img/              # Game illustrations & assets
│
├── src/
│   ├── components/
│   │   ├── Board.jsx      # Renders the 3x3 grid of cells
│   │   ├── Cell.jsx       # A single cell — shows circle, triangle, or empty
│   │   └── GameStatus.jsx # Shows current turn / winner / draw message
│   │
│   ├── App.jsx             # Game state, win/draw logic, layout
│   ├── App.css             # All styling
│   └── main.jsx             # React entry point
│
└── index.html
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/tic-tac-toe
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the dev server

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

---

## 🎯 How to Play

1. Player 1 (circle) always goes first
2. Click any empty cell to place your mark
3. Turns automatically alternate between Player 1 and Player 2
4. The first player to complete a row, column, or diagonal wins
5. If all 9 cells fill up with no winner, the game ends in a draw
6. Once the game is over, clicking cells no longer does anything

---

## 🙏 Inspired By

The core game logic follows the **Tic-Tac-Toe project from [React - The Complete Guide (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/?srsltid=AfmBOoqb8f9jiPCYDwj3ySqulX0aC1mDrTVyyXXWq9fH-z1GwvgJ5gxW)**.

However, this project was rebuilt with:

* A completely custom UI and visual identity, matching an original design
* My own component structure and file organization
* Custom-designed markers (circle & triangle) instead of plain X/O
* My own take on the overall look and feel

This project is primarily an exercise in taking a course concept and rebuilding both its logic (from scratch, step by step) and its presentation into something fully my own.

---

## 📚 What I Learned

This project helped me practice core React concepts:

* Components and proper separation of responsibilities
* Props and one-way data flow
* State management with `useState`
* Event handling
* Rendering lists with `.map()`
* Immutability (never mutating state directly)
* Lifting state up to a common parent
* Sharing state between sibling components
* Computed / derived values (`winner`, `isDraw`) instead of redundant state
* Conditional rendering
* Managing game-over and draw states

---

## 📄 License

This project was built for learning purposes. Feel free to use it as inspiration for your own learning projects.
