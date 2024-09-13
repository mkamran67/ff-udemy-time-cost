// popup.js
console.log("Popup script loaded");


const button = document.getElementById("calculateCourse");


button.addEventListener("click", async () => {
  const resultsEl = document.getElementById("results");

  resultsEl.innerHTML = `
  <p class='text-center'>Calculating...</p>
  <p class='text-center text-xs'>Keep Popup Open!</p>
  `;

});
