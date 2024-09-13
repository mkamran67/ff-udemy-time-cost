console.log(`Content Script Loaded`);

setTimeout(() => {
  console.log(`Content Script Initiating after 3 seconds`);
  console.clear();


  // Get content from sidebar (IF) it exists
  const sidebarEl = document.getElementById('ct-sidebar-scroll-container');
  const sectionElements = sidebarEl.children[0].children[0].children; // HTMLCollection
  const sectionCount = sectionElements.length;


  console.log(`Found ${sectionCount} sections in the sidebar`);

  // Get all the minutes from each section
  const totalMinutes = 0;
  const minutesStudied = 0;


  try {
    for (let index = 0; index < sectionElements.length; index++) {
      const section = sectionElements[index];
      // Check if section is open
      const sectionIsOpen = section.children[2].children[0].children[0] ? true : false;

      if (!sectionIsOpen) {

      }

    }
  } catch (error) {
    console.error(error);

  }

}, 3000);