# Task Manager

A clean and minimal task manager built with HTML, CSS, and JavaScript. It allows users to create, edit, and delete tasks with a responsive and user-friendly interface.

## Features

- Add tasks with title and description
- Edit existing tasks
- Delete tasks
- Responsive layout with smooth styles
- Real-time UI updates without page reloads

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## How to Run

### Option 1: Using Live Server (recommended)

1. Open the project in Visual Studio Code.
2. Install the Live Server extension (if not already installed).
3. Right-click on `index.html` and choose "Open with Live Server".
4. The app will open in your browser with all styles and scripts loaded correctly.

> This works well because Live Server serves from the project root, so `/src/...` paths resolve properly.

### Option 2: Open with double-click (manual)

1. Locate the `index.html` file in your file explorer.
2. Open it in a browser.
3. In this case, the absolute paths (e.g., `/src/...`) won’t work.
4. To fix it, change the paths in `index.html` to be relative:

```html
<!-- Original -->
<link rel="stylesheet" href="/src/css/styles.css">
<script src="/src/js/scripts.js"></script>

<!-- Updated -->
<link rel="stylesheet" href="src/css/styles.css">
<script src="src/js/scripts.js"></script>
```
## Project Status
Functional and complete — currently being improved and refined.
