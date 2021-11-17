/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoProjectsNames\": () => (/* binding */ TodoProjectsNames),\n/* harmony export */   \"checkName\": () => (/* binding */ checkName),\n/* harmony export */   \"currentProject\": () => (/* binding */ currentProject),\n/* harmony export */   \"setAsCurrentProject\": () => (/* binding */ setAsCurrentProject),\n/* harmony export */   \"currentProjectSize\": () => (/* binding */ currentProjectSize),\n/* harmony export */   \"checkProjectListSize\": () => (/* binding */ checkProjectListSize),\n/* harmony export */   \"checkInputContent\": () => (/* binding */ checkInputContent),\n/* harmony export */   \"changeStatusTodoItem\": () => (/* binding */ changeStatusTodoItem),\n/* harmony export */   \"deleteTaskTodoItem\": () => (/* binding */ deleteTaskTodoItem),\n/* harmony export */   \"updateDataTask\": () => (/* binding */ updateDataTask)\n/* harmony export */ });\n/* harmony import */ var _to_do_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-class */ \"./src/to-do-class.js\");\n\n\n//Removes names of object methods(functions) from the keys\nfunction TodoProjectsNames() {\n  const keys = Object.keys(_to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects).filter(\n    (key) =>\n      key !== \"addProject\" &&\n      key !== \"removeProject\" &&\n      key !== \"addItem\" &&\n      key !== \"removeItem\"\n  );\n  return keys;\n}\n\nfunction checkName(projectName) {\n  const keys = TodoProjectsNames();\n  if (projectName === \"\") {\n    return true;\n  }\n  for (const key of keys) {\n    if (key === projectName) {\n      return true;\n    }\n  }\n}\n\nfunction checkInputContent() {\n  const todoContent = document.querySelectorAll(\".content-form\");\n\n  for (const input of todoContent) {\n    if (input.value === \"\") {\n      alert(\"Empty Input\");\n      return true;\n    }\n  }\n}\n\nfunction currentProject() {\n  const projectsListItems = document.querySelectorAll(\".projects-list>li\");\n\n  for (const li of projectsListItems) {\n    let attribute = li.getAttribute(\"data-current\");\n    if (attribute === \"current\") {\n      return li.textContent;\n    }\n  }\n}\n\nfunction changeStatusTodoItem(status, index) {\n  _to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects[currentProject()][index].status = status;\n}\n\nfunction deleteTaskTodoItem(index) {\n  _to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects.removeItem(currentProject(), index);\n}\n\nfunction setAsCurrentProject(projectName) {\n  const projectsListItems = document.querySelectorAll(\".projects-list>li\");\n  for (const li of projectsListItems) {\n    if (li.textContent === projectName) {\n      li.setAttribute(\"data-current\", \"current\");\n    } else {\n      li.setAttribute(\"data-current\", \"none\");\n    }\n  }\n}\n\nfunction currentProjectSize() {\n  return _to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects[currentProject()].length;\n}\n\nfunction checkProjectListSize() {\n  const projectsListItems = document.querySelectorAll(\".projects-list>li\");\n  if (projectsListItems.length === 0) {\n    alert(\"Empty Projects List! Please create one\");\n    return true;\n  }\n}\n\nfunction updateDataTask(index) {\n  const dataTask = document.querySelectorAll(`[data-task]`);\n  dataTask.forEach((card) => {\n    if (card.getAttribute(\"data-task\") > index) {\n      let newIndex = parseInt(card.getAttribute(\"data-task\")) - 1;\n      card.setAttribute(\"data-task\", `${newIndex}`);\n    }\n  });\n\n  const statusBtns = document.querySelectorAll(`[data-status-btn]`);\n  statusBtns.forEach((statusBtn) => {\n    if (statusBtn.getAttribute(\"data-status-btn\") > index) {\n      let newIndex = parseInt(statusBtn.getAttribute(\"data-status-btn\")) - 1;\n      statusBtn.setAttribute(\"data-status-btn\", `${newIndex}`);\n    }\n  });\n\n  const deleteBtns = document.querySelectorAll(`[data-delete-btn]`);\n  deleteBtns.forEach((deleteBtn) => {\n    if (deleteBtn.getAttribute(\"data-delete-btn\") > index) {\n      let newIndex = parseInt(deleteBtn.getAttribute(\"data-delete-btn\")) - 1;\n      deleteBtn.setAttribute(\"data-delete-btn\", `${newIndex}`);\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-projects.js */ \"./src/todo-projects.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n//Initial load page configuration\n(0,_todo_projects_js__WEBPACK_IMPORTED_MODULE_0__.fillWithProjectsList)();\n(0,_helpers__WEBPACK_IMPORTED_MODULE_1__.setAsCurrentProject)(\"Default Project\");\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/to-do-class.js":
/*!****************************!*\
  !*** ./src/to-do-class.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo),\n/* harmony export */   \"TodoProjects\": () => (/* binding */ TodoProjects)\n/* harmony export */ });\nclass ToDo {\n  constructor(priority, title, dueDate) {\n    this.priority = priority;\n    this.title = title;\n    this.dueDate = dueDate;\n    this.status = \"Todo\";\n  }\n}\n\nconst TodoProjects = {\n  \"Default Project\": [],\n\n  addItem(currentProject, ToDoObject) {\n    this[currentProject].push(ToDoObject);\n  },\n\n  removeItem(currentProject, index) {\n    this[currentProject].splice(index, 1);\n  },\n\n  addProject(project) {\n    this[project] = new Array();\n  },\n  removeProject(project) {\n    delete this[project];\n  },\n};\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/to-do-class.js?");

/***/ }),

/***/ "./src/todo-content.js":
/*!*****************************!*\
  !*** ./src/todo-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCurrentProject\": () => (/* binding */ showCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _to_do_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-class */ \"./src/to-do-class.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n\n\n\nconst todoContent = document.querySelectorAll(\".content-form\");\nconst priorityInput = document.querySelector(\"#priority-input\");\nconst descriptionInput = document.querySelector(\"#description-input\");\nconst dateInput = document.querySelector(\"#date-input\");\nconst confirmTask = document.querySelector(\"#confirm-task-btn\");\nconst cancelTask = document.querySelector(\"#cancel-task-btn\");\nconst addTaskBtn = document.querySelector(\"#add-task\");\n\nconfirmTask.addEventListener(\"click\", addTask);\ncancelTask.addEventListener(\"click\", hideTodoContentForm);\naddTaskBtn.addEventListener(\"click\", showTodoContentForm);\n\nfunction showTodoContentForm() {\n  todoContent.forEach((input) => {\n    input.style.display = \"block\";\n  });\n  confirmTask.style.display = \"block\";\n  cancelTask.style.display = \"block\";\n  addTaskBtn.style.display = \"none\";\n}\n\nfunction hideTodoContentForm() {\n  todoContent.forEach((input) => {\n    input.style.display = \"none\";\n    input.value = \"\";\n  });\n  confirmTask.style.display = \"none\";\n  cancelTask.style.display = \"none\";\n  addTaskBtn.style.display = \"block\";\n}\n\nfunction addTask() {\n  const ToDoItem = new _to_do_class__WEBPACK_IMPORTED_MODULE_0__.ToDo(\n    priorityInput.value,\n    descriptionInput.value,\n    dateInput.value\n  );\n  if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.checkProjectListSize)()) {\n    return;\n  }\n  if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.checkInputContent)()) {\n    return;\n  }\n  _to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects.addItem((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.currentProject)(), ToDoItem);\n  createTaskCard(ToDoItem, (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.currentProjectSize)() - 1);\n  hideTodoContentForm();\n}\n\nfunction createTaskCard(Todo, initialIndex) {\n  const cardsContainer = document.querySelector(\".cards-container\");\n\n  const card = document.createElement(\"div\");\n  card.classList.add(\"task-card\");\n  card.setAttribute(\"data-task\", `${initialIndex}`);\n\n  const p1 = document.createElement(\"p\");\n  p1.classList.add(\"task-description\");\n  p1.textContent = Todo.title;\n\n  const p2 = document.createElement(\"p\");\n  p2.classList.add(\"task-date\");\n  p2.textContent = Todo.dueDate;\n\n  const p3 = document.createElement(\"p\");\n  p3.classList.add(\"task-priority\");\n  p3.textContent = Todo.priority;\n\n  const p4 = document.createElement(\"p\");\n  p4.classList.add(\"task-status\");\n  const statusBtn = document.createElement(\"button\");\n  statusBtn.setAttribute(\"data-status-color\", statusColor(Todo));\n  statusBtn.setAttribute(\"data-status-btn\", `${initialIndex}`);\n  statusBtn.classList.add(\"status\");\n  statusBtn.textContent = Todo.status;\n  statusBtn.addEventListener(\"click\", (e) => {\n    const actualIndex = e.target.getAttribute(\"data-status-btn\");\n    changeStatus(actualIndex);\n  });\n  p4.appendChild(statusBtn);\n\n  const p5 = document.createElement(\"p\");\n  p5.classList.add(\"task-remove\");\n  const imageDelete = document.createElement(\"img\"); //Delete icon\n  imageDelete.setAttribute(\"src\", \"./assets/images/trash.svg\");\n  imageDelete.setAttribute(\"alt\", \"Delete Icon\");\n  imageDelete.setAttribute(\"data-delete-btn\", `${initialIndex}`);\n  imageDelete.addEventListener(\"click\", (e) => {\n    const actualIndex = e.target.getAttribute(\"data-delete-btn\");\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.deleteTaskTodoItem)(actualIndex); //Delete from object\n    deleteTask(actualIndex); //Delete from UI\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.updateDataTask)(actualIndex); //Update all data-* attributes\n  });\n  p5.appendChild(imageDelete);\n\n  card.appendChild(p1);\n  card.appendChild(p2);\n  card.appendChild(p3);\n  card.appendChild(p4);\n  card.appendChild(p5);\n  cardsContainer.appendChild(card);\n}\n\nfunction showCurrentProject() {\n  const cardsContainer = document.querySelector(\".cards-container\");\n  cardsContainer.replaceChildren();\n\n  for (let i = 0; i < (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.currentProjectSize)(); i++) {\n    createTaskCard(_to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects[(0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.currentProject)()][i], i);\n  }\n}\n\nfunction changeStatus(index) {\n  const btn = document.querySelector(`[data-status-btn=\"${index}\"]`);\n\n  if (btn.textContent === \"Todo\") {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.changeStatusTodoItem)(\"In Progress\", index);\n    btn.textContent = \"In Progress\";\n    btn.setAttribute(\"data-status-color\", \"1\");\n  } else if (btn.textContent === \"In Progress\") {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.changeStatusTodoItem)(\"Completed\", index);\n    btn.textContent = \"Completed\";\n    btn.setAttribute(\"data-status-color\", \"2\");\n  } else if (btn.textContent === \"Completed\") {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.changeStatusTodoItem)(\"Todo\", index);\n    btn.textContent = \"Todo\";\n    btn.setAttribute(\"data-status-color\", \"0\");\n  }\n}\n\nfunction deleteTask(index) {\n  const card = document.querySelector(`[data-task=\"${index}\"]`);\n  card.remove();\n}\n\n//Returns data-status-color depending on object status\nfunction statusColor(Todo) {\n  if (Todo.status === \"Todo\") {\n    return 0;\n  } else if (Todo.status === \"In Progress\") {\n    return 1;\n  } else {\n    return 2;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-content.js?");

/***/ }),

/***/ "./src/todo-projects.js":
/*!******************************!*\
  !*** ./src/todo-projects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillWithProjectsList\": () => (/* binding */ fillWithProjectsList)\n/* harmony export */ });\n/* harmony import */ var _to_do_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-do-class */ \"./src/to-do-class.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _todo_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-content.js */ \"./src/todo-content.js\");\n\n\n\n\nconst projectInput = document.querySelector(\"#project-input\");\nconst addProjectBtn = document.querySelector(\"#add-project\");\nconst confirmProject = document.querySelector(\"#confirm-project-btn\");\nconst cancelProject = document.querySelector(\"#cancel-project-btn\");\nconst projectsList = document.querySelector(\".projects-list\");\n\nconfirmProject.addEventListener(\"click\", addProject);\ncancelProject.addEventListener(\"click\", hideProjectForm);\naddProjectBtn.addEventListener(\"click\", showAddProjectForm);\n\nfunction showAddProjectForm() {\n  projectInput.style.display = \"block\";\n  confirmProject.style.display = \"block\";\n  cancelProject.style.display = \"block\";\n  addProjectBtn.style.display = \"none\";\n}\n\nfunction hideProjectForm() {\n  projectInput.style.display = \"none\";\n  projectInput.value = \"\";\n  confirmProject.style.display = \"none\";\n  cancelProject.style.display = \"none\";\n  addProjectBtn.style.display = \"block\";\n}\n\nfunction createProjectElement(projectName) {\n  const imageDelete = document.createElement(\"img\"); //Delete icon\n  imageDelete.setAttribute(\"src\", \"./assets/images/trash.svg\");\n  imageDelete.setAttribute(\"alt\", \"Delete Icon\");\n  imageDelete.addEventListener(\"click\", () => {\n    deleteProject(imageDelete);\n  });\n\n  const p = document.createElement(\"p\");\n  p.textContent = projectName;\n  p.addEventListener(\"click\", () => {\n    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.setAsCurrentProject)(p.textContent);\n    (0,_todo_content_js__WEBPACK_IMPORTED_MODULE_2__.showCurrentProject)();\n  });\n\n  const element = document.createElement(\"li\");\n  element.setAttribute(\"data-current\", \"none\");\n  projectsList.appendChild(element);\n  element.appendChild(imageDelete);\n  element.appendChild(p);\n}\n\nfunction fillWithProjectsList() {\n  const projectsListItems = Array.from(\n    document.querySelectorAll(\".projects-list>li\")\n  ).map((element) => element.textContent); //Use Array instead of Nodelist for use of \"map\"\n\n  const keys = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.TodoProjectsNames)();\n  for (const key of keys) {\n    if (projectsListItems.includes(key) === false) {\n      createProjectElement(key);\n    }\n  }\n}\n\nfunction removeProjectUI() {\n  const projectsListItems = document.querySelectorAll(\".projects-list>li\");\n\n  const keys = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.TodoProjectsNames)();\n  for (const li of projectsListItems) {\n    if (keys.includes(li.textContent) === false) {\n      li.remove();\n    }\n  }\n}\n\nfunction addProject() {\n  if ((0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.checkName)(projectInput.value)) {\n    return alert(\"Invalid Name\");\n  }\n  _to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects.addProject(projectInput.value);\n  fillWithProjectsList();\n  hideProjectForm();\n}\n\nfunction deleteProject(img) {\n  const projectName = img.closest(\"li\").textContent;\n  _to_do_class__WEBPACK_IMPORTED_MODULE_0__.TodoProjects.removeProject(projectName);\n  removeProjectUI();\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-projects.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;