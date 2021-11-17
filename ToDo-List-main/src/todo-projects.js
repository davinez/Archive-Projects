import { TodoProjects } from "./to-do-class";
import {
  TodoProjectsNames,
  setAsCurrentProject,
  checkName,
} from "./helpers.js";
import { showCurrentProject } from "./todo-content.js";

const projectInput = document.querySelector("#project-input");
const addProjectBtn = document.querySelector("#add-project");
const confirmProject = document.querySelector("#confirm-project-btn");
const cancelProject = document.querySelector("#cancel-project-btn");
const projectsList = document.querySelector(".projects-list");

confirmProject.addEventListener("click", addProject);
cancelProject.addEventListener("click", hideProjectForm);
addProjectBtn.addEventListener("click", showAddProjectForm);

function showAddProjectForm() {
  projectInput.style.display = "block";
  confirmProject.style.display = "block";
  cancelProject.style.display = "block";
  addProjectBtn.style.display = "none";
}

function hideProjectForm() {
  projectInput.style.display = "none";
  projectInput.value = "";
  confirmProject.style.display = "none";
  cancelProject.style.display = "none";
  addProjectBtn.style.display = "block";
}

function createProjectElement(projectName) {
  const imageDelete = document.createElement("img"); //Delete icon
  imageDelete.setAttribute("src", "./assets/images/trash.svg");
  imageDelete.setAttribute("alt", "Delete Icon");
  imageDelete.addEventListener("click", () => {
    deleteProject(imageDelete);
  });

  const p = document.createElement("p");
  p.textContent = projectName;
  p.addEventListener("click", () => {
    setAsCurrentProject(p.textContent);
    showCurrentProject();
  });

  const element = document.createElement("li");
  element.setAttribute("data-current", "none");
  projectsList.appendChild(element);
  element.appendChild(imageDelete);
  element.appendChild(p);
}

function fillWithProjectsList() {
  const projectsListItems = Array.from(
    document.querySelectorAll(".projects-list>li")
  ).map((element) => element.textContent); //Use Array instead of Nodelist for use of "map"

  const keys = TodoProjectsNames();
  for (const key of keys) {
    if (projectsListItems.includes(key) === false) {
      createProjectElement(key);
    }
  }
}

function removeProjectUI() {
  const projectsListItems = document.querySelectorAll(".projects-list>li");

  const keys = TodoProjectsNames();
  for (const li of projectsListItems) {
    if (keys.includes(li.textContent) === false) {
      li.remove();
    }
  }
}

function addProject() {
  if (checkName(projectInput.value)) {
    return alert("Invalid Name");
  }
  TodoProjects.addProject(projectInput.value);
  fillWithProjectsList();
  hideProjectForm();
}

function deleteProject(img) {
  const projectName = img.closest("li").textContent;
  TodoProjects.removeProject(projectName);
  removeProjectUI();
}

export { fillWithProjectsList };
