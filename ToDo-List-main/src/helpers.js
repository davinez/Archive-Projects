import { TodoProjects } from "./to-do-class";

//Removes names of object methods(functions) from the keys
function TodoProjectsNames() {
  const keys = Object.keys(TodoProjects).filter(
    (key) =>
      key !== "addProject" &&
      key !== "removeProject" &&
      key !== "addItem" &&
      key !== "removeItem"
  );
  return keys;
}

//Prevents empty inputs or repeated names in the sidebard section
function checkName(projectName) {
  const keys = TodoProjectsNames();
  if (projectName === "") {
    return true;
  }
  for (const key of keys) {
    if (key === projectName) {
      return true;
    }
  }
}

//Prevents empty inputs in the tasks section
function checkInputContent() {
  const todoContent = document.querySelectorAll(".content-form");

  for (const input of todoContent) {
    if (input.value === "") {
      alert("Empty Input");
      return true;
    }
  }
}

//Current "selected" project
function currentProject() {
  const projectsListItems = document.querySelectorAll(".projects-list>li");

  for (const li of projectsListItems) {
    let attribute = li.getAttribute("data-current");
    if (attribute === "current") {
      return li.textContent;
    }
  }
}

function changeStatusTodoItem(status, index) {
  TodoProjects[currentProject()][index].status = status;
}

//Removes task (object) from the current project Array
function deleteTaskTodoItem(index) {
  TodoProjects.removeItem(currentProject(), index);
}

function setAsCurrentProject(projectName) {
  const projectsListItems = document.querySelectorAll(".projects-list>li");
  for (const li of projectsListItems) {
    if (li.textContent === projectName) {
      li.setAttribute("data-current", "current");
    } else {
      li.setAttribute("data-current", "none");
    }
  }
}

//Returns number of tasks (objects) in the current project
function currentProjectSize() {
  return TodoProjects[currentProject()].length;
}

function checkProjectListSize() {
  const projectsListItems = document.querySelectorAll(".projects-list>li");
  if (projectsListItems.length === 0) {
    alert("Empty Projects List! Please create one");
    return true;
  }
}

//Updates all the data-* attributtes when a task (object) is removed
function updateDataTask(index) {
  const dataTask = document.querySelectorAll(`[data-task]`);
  dataTask.forEach((card) => {
    if (card.getAttribute("data-task") > index) {
      let newIndex = parseInt(card.getAttribute("data-task")) - 1;
      card.setAttribute("data-task", `${newIndex}`);
    }
  });

  const statusBtns = document.querySelectorAll(`[data-status-btn]`);
  statusBtns.forEach((statusBtn) => {
    if (statusBtn.getAttribute("data-status-btn") > index) {
      let newIndex = parseInt(statusBtn.getAttribute("data-status-btn")) - 1;
      statusBtn.setAttribute("data-status-btn", `${newIndex}`);
    }
  });

  const deleteBtns = document.querySelectorAll(`[data-delete-btn]`);
  deleteBtns.forEach((deleteBtn) => {
    if (deleteBtn.getAttribute("data-delete-btn") > index) {
      let newIndex = parseInt(deleteBtn.getAttribute("data-delete-btn")) - 1;
      deleteBtn.setAttribute("data-delete-btn", `${newIndex}`);
    }
  });
}

export {
  TodoProjectsNames,
  checkName,
  currentProject,
  setAsCurrentProject,
  currentProjectSize,
  checkProjectListSize,
  checkInputContent,
  changeStatusTodoItem,
  deleteTaskTodoItem,
  updateDataTask,
};
