// Select elements
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDesc = document.getElementById("task-desc");
const taskList = document.getElementById("task-list");

// Task array to store tasks
let tasks = [];

// Render all tasks
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    const taskInfo = document.createElement("div");
    taskInfo.className = "task-info";

    const title = document.createElement("h3");
    title.textContent = task.title;

    const desc = document.createElement("p");
    desc.textContent = task.description;

    taskInfo.appendChild(title);
    taskInfo.appendChild(desc);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.onclick = () => editTask(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    taskCard.appendChild(taskInfo);
    taskCard.appendChild(actions);

    taskList.appendChild(taskCard);
  });
}

// Add task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = taskTitle.value.trim();
  const description = taskDesc.value.trim();

  if (title === "") return;

  tasks.push({ title, description });
  taskForm.reset();
  renderTasks();
});

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Edit task
function editTask(index) {
  const task = tasks[index];

  // Pre-fill form with task data
  taskTitle.value = task.title;
  taskDesc.value = task.description;

  // Remove task from list (we'll re-add on submit)
  tasks.splice(index, 1);
  renderTasks();
}
