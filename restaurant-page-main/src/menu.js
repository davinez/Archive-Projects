import Section from "./section-class";

function createMenuSection() {
  const pDish1 = [
    "Is a taco made with spit-grilled pork, Pork is marinated in \
  a combination of dried chilies, spices, pineapple, and typically achiote paste, \
  then slowly cooked with charcoal or gas flame on a vertical rotisserie called a trompo",
    "Price: 15 pesos",
  ];

  const sectionDish1 = new Section("dish1", "Tacos de Pastor", pDish1);
  sectionDish1.createSection();
  sectionDish1.createHeader(sectionDish1.sectionClass);
  sectionDish1.createContent(sectionDish1.sectionClass);

  const pDish2 = [
    "Is a taco originated in Baja California in Mexico. \
    Grilled or fried shrimp are used, with the same accompaniments \
    as fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce,\
    all placed on top of a corn or flour tortilla.",
    "Price: 25 pesos",
  ];

  const sectionDish2 = new Section("dish2", "Tacos de Camarones", pDish2);
  sectionDish2.createSection();
  sectionDish2.createHeader(sectionDish2.sectionClass);
  sectionDish2.createContent(sectionDish2.sectionClass);

  const pDish3 = [
    "You can choose from: carne asada tacos; tacos de tripita ('tripe tacos'), \
    grilled until crisp; and, chorizo asado (traditional Spanish-style sausage). \
    Each type is served on two overlapped small tortillas and sometimes garnished with guacamole, salsa, onions, \
    and cilantro (coriander leaf).",
    "Price: 15 pesos",
  ];

  const sectionDish3 = new Section("dish3", "Tacos de Carne Asada", pDish3);
  sectionDish3.createSection();
  sectionDish3.createHeader(sectionDish3.sectionClass);
  sectionDish3.createContent(sectionDish3.sectionClass);

  const pDish4 = [
    "Called flautas ('flute', because of the shape), or taquitos, for which the tortillas are \
    filled with pre-cooked shredded chicken, beef or barbacoa, rolled into an elongated cylinder \
    and deep-fried until crisp.",
    "Price: 14 pesos",
  ];

  const sectionDish4 = new Section("dish4", "Tacos Dorados", pDish4);
  sectionDish4.createSection();
  sectionDish4.createHeader(sectionDish4.sectionClass);
  sectionDish4.createContent(sectionDish4.sectionClass);
}

export { createMenuSection };
