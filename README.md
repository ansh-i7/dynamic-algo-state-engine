# DASE: Dynamic Algo State Engine

DASE is an interactive, event-driven sorting algorithm visualizer built to demonstrate the manipulation of the JavaScript Event Loop, asynchronous execution, and dynamic DOM rendering.

---

## 🚀 Live Demo
 
> (Not yet deployed)

---

## 🧠 Core Engineering Concepts Demonstrated

### Asynchronous Execution
Implemented custom Promise-based `sleep()` utilities to force JavaScript to yield the main thread, preventing UI freezing during heavy `for` loops.

### State Management (Vanilla JS)
Built mutex-style safety locks (`isSorting` flags) to prevent race conditions and concurrent algorithm executions.

### Dynamic DOM Manipulation
Calculated responsive, percentage-based UI rendering dynamically in JavaScript instead of relying on hardcoded CSS pixels.

### Event Loop Handling
Bridged synchronous algorithmic logic (Bubble Sort) with asynchronous browser repaints for smooth animations.

---

## ⚙️ Features

- 📊 **Real-Time Visualization**
  - Watch arrays sort themselves frame-by-frame.

- 🎨 **Color-Coded States**
  - 🟦 **Blue** — Default unsorted state
  - 🟥 **Red** — Active comparison state
  - 🟩 **Green** — Sorted state

- 🎛️ **Dynamic Controls**
  - Adjust array size from **10–100 elements**
  - Control visualization speed with delays from **1ms–100ms**

---

## 🛠️ Tech Stack

### Phase 1

- HTML5 (Semantic Structure)
- CSS3 (Flexbox, Dynamic Scaling, State-Based Styling)
- Vanilla JavaScript (ES6+, Async/Await, DOM APIs)

---

## 💻 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/dynamic-algo-state-engine.git
```

### 2. Navigate into the Project

```bash
cd dynamic-algo-state-engine
```

### 3. Open in VS Code

```bash
code .
```

### 4. Run the Project

Open `index.html` using the **Live Server** extension.

---

## 📌 Project Vision

The long-term goal is to evolve DASE into a complete algorithm visualization platform supporting multiple sorting algorithms, graph algorithms, pathfinding visualizations, and advanced data structure animations.

---
