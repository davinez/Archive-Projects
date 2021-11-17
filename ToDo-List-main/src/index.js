import { fillWithProjectsList } from "./todo-projects.js";
import { setAsCurrentProject } from "./helpers";

//Initial load page configuration
fillWithProjectsList();
setAsCurrentProject("Default Project");
