class ToDo {
  constructor(priority, title, dueDate) {
    this.priority = priority;
    this.title = title;
    this.dueDate = dueDate;
    this.status = "Todo";
  }
}

//From the UI, the "Projects" are added as object properties
const TodoProjects = {
  "Default Project": [],

  addItem(currentProject, ToDoObject) {
    this[currentProject].push(ToDoObject);
  },

  removeItem(currentProject, index) {
    this[currentProject].splice(index, 1);
  },

  addProject(project) {
    this[project] = new Array();
  },
  removeProject(project) {
    delete this[project];
  },
};

export { ToDo, TodoProjects };
