import { ToDo, TodoProjects } from "./to-do-class";
import {
  checkProjectListSize,
  currentProject,
  currentProjectSize,
  checkInputContent,
  changeStatusTodoItem,
  deleteTaskTodoItem,
  updateDataTask,
} from "./helpers.js";

const todoContent = document.querySelectorAll(".content-form");
const priorityInput = document.querySelector("#priority-input");
const descriptionInput = document.querySelector("#description-input");
const dateInput = document.querySelector("#date-input");
const confirmTask = document.querySelector("#confirm-task-btn");
const cancelTask = document.querySelector("#cancel-task-btn");
const addTaskBtn = document.querySelector("#add-task");

confirmTask.addEventListener("click", addTask);
cancelTask.addEventListener("click", hideTodoContentForm);
addTaskBtn.addEventListener("click", showTodoContentForm);

function showTodoContentForm() {
  todoContent.forEach((input) => {
    input.style.display = "block";
  });
  confirmTask.style.display = "block";
  cancelTask.style.display = "block";
  addTaskBtn.style.display = "none";
}

function hideTodoContentForm() {
  todoContent.forEach((input) => {
    input.style.display = "none";
    input.value = "";
  });
  confirmTask.style.display = "none";
  cancelTask.style.display = "none";
  addTaskBtn.style.display = "block";
}

function addTask() {
  const ToDoItem = new ToDo(
    priorityInput.value,
    descriptionInput.value,
    dateInput.value
  );
  if (checkProjectListSize()) {
    return;
  }
  if (checkInputContent()) {
    return;
  }
  TodoProjects.addItem(currentProject(), ToDoItem);
  createTaskCard(ToDoItem, currentProjectSize() - 1);
  hideTodoContentForm();
}

function createTaskCard(Todo, initialIndex) {
  const cardsContainer = document.querySelector(".cards-container");

  const card = document.createElement("div");
  card.classList.add("task-card");
  card.setAttribute("data-task", `${initialIndex}`);

  const p1 = document.createElement("p");
  p1.classList.add("task-description");
  p1.textContent = Todo.title;

  const p2 = document.createElement("p");
  p2.classList.add("task-date");
  p2.textContent = Todo.dueDate;

  const p3 = document.createElement("p");
  p3.classList.add("task-priority");
  p3.textContent = Todo.priority;

  const p4 = document.createElement("p");
  p4.classList.add("task-status");
  const statusBtn = document.createElement("button");
  statusBtn.setAttribute("data-status-color", statusColor(Todo));
  statusBtn.setAttribute("data-status-btn", `${initialIndex}`);
  statusBtn.classList.add("status");
  statusBtn.textContent = Todo.status;
  statusBtn.addEventListener("click", (e) => {
    const actualIndex = e.target.getAttribute("data-status-btn");
    changeStatus(actualIndex);
  });
  p4.appendChild(statusBtn);

  const p5 = document.createElement("p");
  p5.classList.add("task-remove");
  const imageDelete = document.createElement("img"); //Delete icon
  imageDelete.setAttribute("src", "./assets/images/trash.svg");
  imageDelete.setAttribute("alt", "Delete Icon");
  imageDelete.setAttribute("data-delete-btn", `${initialIndex}`);
  imageDelete.addEventListener("click", (e) => {
    const actualIndex = e.target.getAttribute("data-delete-btn");
    deleteTaskTodoItem(actualIndex); //Delete from object
    deleteTask(actualIndex); //Delete from UI
    updateDataTask(actualIndex); //Update all data-* attributes
  });
  p5.appendChild(imageDelete);

  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);
  card.appendChild(p5);
  cardsContainer.appendChild(card);
}

function showCurrentProject() {
  const cardsContainer = document.querySelector(".cards-container");
  cardsContainer.replaceChildren();

  for (let i = 0; i < currentProjectSize(); i++) {
    createTaskCard(TodoProjects[currentProject()][i], i);
  }
}

function changeStatus(index) {
  const btn = document.querySelector(`[data-status-btn="${index}"]`);

  if (btn.textContent === "Todo") {
    changeStatusTodoItem("In Progress", index);
    btn.textContent = "In Progress";
    btn.setAttribute("data-status-color", "1");
  } else if (btn.textContent === "In Progress") {
    changeStatusTodoItem("Completed", index);
    btn.textContent = "Completed";
    btn.setAttribute("data-status-color", "2");
  } else if (btn.textContent === "Completed") {
    changeStatusTodoItem("Todo", index);
    btn.textContent = "Todo";
    btn.setAttribute("data-status-color", "0");
  }
}

function deleteTask(index) {
  const card = document.querySelector(`[data-task="${index}"]`);
  card.remove();
}

//Returns data-status-color depending on object status
function statusColor(Todo) {
  if (Todo.status === "Todo") {
    return 0;
  } else if (Todo.status === "In Progress") {
    return 1;
  } else {
    return 2;
  }
}

export { showCurrentProject };
