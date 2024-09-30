console.log(`Content Script Initiating after 3 seconds`);

function stringToMinsNumber(hours) {
  const toNumber = hours.split('m');

  return parseInt(toNumber[0]);
}

function minutesToTime(mins) {

  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;

  return `${hours} hrs : ${minutes} mins`;
}


function minutesToPercentage(mins, total) {
  return Math.fround(mins / total * 100).toFixed(2) + '%';
}

setTimeout(() => {
  console.clear();
  console.log(`Content Script Starting...`);

  try {
    // Get content from sidebar (IF) it exists
    const curriculumSection = document.querySelector('[data-purpose="curriculum-section-container"]');

    if (!curriculumSection) return;

    const sectionsList = curriculumSection.children;

    let totalMinutes = 0;
    let totalWatchedMinutes = 0;

    for (const currentSection of sectionsList) {

      // 1. Check if section is open -> if NOT open, open by clicking
      const isSectionClosed = typeof currentSection.children[2].children[0].children[0] === 'undefined';

      if (isSectionClosed) {
        // Click if it's NOT open
        currentSection.children[1].click();
      }

      // 2. Count current sections watched and total minutes
      // a. current section's list of videos
      const listOfLessons = currentSection.children[2].children[0].children[0].children;

      for (const lesson of listOfLessons) {
        // b. check if it's a video
        const isVideo = lesson.children[0].children[1].innerHTML === 'Play' ? true : false;

        if (!isVideo) continue;

        // b. check if checked aka watched
        const isChecked = lesson.children[0].children[0].children[0].children[0].checked;

        // c. add minutes to total and if watched to totalWatched
        const minutesString = lesson.children[0].children[2].children[1].children[0].children[1].innerHTML;

        const minsToNumber = stringToMinsNumber(minutesString);

        if (isChecked) {
          totalWatchedMinutes += minsToNumber;
        }

        totalMinutes += minsToNumber;
      }
    }

    const courseStats = document.querySelector('[data-purpose="course-stats"]');
    // 1. Create the elements
    const courseStatsDiv = document.createElement('div');
    courseStatsDiv.className = 'course-stats--video-length--mzPnS';

    const headingDiv = document.createElement('div');
    headingDiv.className = 'ud-heading-md';
    // Replace ${totalWatchedMinutes} and ${totalMinutes} with actual values
    headingDiv.textContent = `${minutesToTime(totalWatchedMinutes)} | ${minutesToPercentage(totalWatchedMinutes, totalMinutes)}`;

    const textDiv = document.createElement('div');
    textDiv.className = 'ud-text-xs course-stats--subdued-text--vj5gh';
    textDiv.textContent = 'Total Watched | Percentage Completed';

    // 2. Append child elements
    courseStatsDiv.appendChild(headingDiv);
    courseStatsDiv.appendChild(textDiv);

    // 3. Append the main div to the desired parent element
    courseStats.appendChild(courseStatsDiv);

  } catch (error) {
    console.error(error);
  }

}, 3000);
