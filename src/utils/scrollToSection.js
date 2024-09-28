export const scrollToSection = (sectionId) => {
  console.log(`Scrolling to section: ${sectionId}`);
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`No section found with id: ${sectionId}`);
  }
};
