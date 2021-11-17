import Section from "./section-class";

function createContactSection() {
  const pContact1 = [
    "Email: davinez.tacos@gmail.com",
    "Telephone 1: 55 8747 8752",
    "Telephone 2: 55 4785 2514",
  ];

  const sectionContact1 = new Section(
    "contact1",
    "Restaurant Contact",
    pContact1
  );
  sectionContact1.createSection();
  sectionContact1.createHeader(sectionContact1.sectionClass);
  sectionContact1.createContent(sectionContact1.sectionClass);

  const pContact2 = [
    "Facebook: Davinez Tacos",
    "Twitter: @Davotacos",
    "Instagram: @Davotacos",
    "Youtube: Best Tacos Davinez",
  ];

  const sectionContact2 = new Section("contact2", "Social Media", pContact2);
  sectionContact2.createSection();
  sectionContact2.createHeader(sectionContact2.sectionClass);
  sectionContact2.createContent(sectionContact2.sectionClass);
}

export { createContactSection };
