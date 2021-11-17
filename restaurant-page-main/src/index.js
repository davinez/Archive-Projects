import { createHomeSection } from "./home.js";
import { createMenuSection } from "./menu.js";
import { createContactSection } from "./contact.js";

createHomeSection(); //Initial page-load function

function removeAllChildNodes() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const navbarOptions = document.querySelectorAll(".navbar-item");

//navbar-switching logic
for (let i = 0; i < navbarOptions.length; i++) {
  navbarOptions[i].addEventListener("click", () => {
    removeAllChildNodes();

    if (navbarOptions[i].textContent === "Home") {
      createHomeSection();
    } else if (navbarOptions[i].textContent === "Menu") {
      createMenuSection();
    } else if (navbarOptions[i].textContent === "Contact") {
      createContactSection();
    }
  });
}
