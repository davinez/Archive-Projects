//Class for generate a html "Section" element
class Section {
  constructor(sectionClass, sectionHeader, sectionContent) {
    this.sectionClass = sectionClass;
    this.sectionHeader = sectionHeader;
    this.sectionContent = sectionContent;
  }

  createSection() {
    const section = document.createElement("section");
    section.classList.add(`${this.sectionClass}`);
    const container = document.querySelector("#content");
    container.appendChild(section);
  }

  createHeader(parentContainer) {
    const container = document.querySelector(`.${parentContainer}`);
    const header = document.createElement("h1");
    header.textContent = `${this.sectionHeader}`;
    container.appendChild(header);
  }

  createContent(parentContainer) {
    const container = document.querySelector(`.${parentContainer}`);
    for (let i = 0; i < this.sectionContent.length; i++) {
      let content = document.createElement("p");
      content.textContent = `${this.sectionContent[i]}`;
      container.appendChild(content);
    }
  }
}

export default Section;
