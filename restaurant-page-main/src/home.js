import Section from "./section-class";

function createHomeSection() {
  const pAbout = [
    "The taco predates the arrival of the Spanish in Mexico. There is anthropological evidence that the indigenous \
people living in the lake region of the Valley of Mexico traditionally ate tacos filled with small fish. Writing \
at the time of the Spanish conquistadors, Bernal Díaz del Castillo documented the first taco feast enjoyed by \
Europeans, a meal which Hernán Cortés arranged for his captains in Coyoacán",
  ];
  const sectionStory = new Section("story-tacos", "Story of the Tacos", pAbout);
  sectionStory.createSection();
  sectionStory.createHeader(sectionStory.sectionClass);
  sectionStory.createContent(sectionStory.sectionClass);

  const pDefinition = [
    "Is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.\
  The tortilla is then folded around the filling and eaten by hand. A taco can be made with a variety of fillings,\
  including beef, pork, chicken, seafood, beans, vegetables, and cheese, allowing for great versatility and\
  variety. They are often garnished with various condiments, such as salsa, guacamole, or sour cream, and\
  vegetables, such as lettuce, onion, tomatoes, and chiles. Tacos are a common form of antojitos, or Mexican\
  street food, which have spread around the world.",
  ];
  const sectionDefinition = new Section(
    "definition-tacos",
    "Tacos? Whats that?",
    pDefinition
  );

  sectionDefinition.createSection();
  sectionDefinition.createHeader(sectionDefinition.sectionClass);
  sectionDefinition.createContent(sectionDefinition.sectionClass);

  const pHours = [
    "Monday: 10am - 10pm",
    "Tuesday: 10am - 10pm",
    "Wednesday: 10am - 10pm",
    "Thursday: 10am - 10pm",
    "Friday: 9am - 11pm",
    "Saturday: 9am - 11pm",
    "Sunday: 9am - 11pm",
  ];
  const sectionHours = new Section(
    "about-hours",
    "The hours to taste happiness",
    pHours
  );
  sectionHours.createSection();
  sectionHours.createHeader(sectionHours.sectionClass);
  sectionHours.createContent(sectionHours.sectionClass);

  const pLocation = [
    "Ciudad de Mexico, Alcaldia Benito Juarez, Calle Obrero Mundial, No. 135",
  ];
  const sectionLocation = new Section("about-location", "Location", pLocation);
  sectionLocation.createSection();
  sectionLocation.createHeader(sectionLocation.sectionClass);
  sectionLocation.createContent(sectionLocation.sectionClass);
}

export { createHomeSection };
