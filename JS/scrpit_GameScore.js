const { response } = require("express");

document.addEventListener("DOMContentLoaded", () => {
  const scoresList = document.getElementById("scores-list");

  //fetch scores from back
  fetch("../index.js")
    .then((response) => response.json())
    .then((data) => {
      //CLear existing scores
      scoresList.innerHTML = "";
      //Update HTML content with new scores
      data.scores.forEach((score) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${score.player}: ${score.score}`;
        scoresList.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching scores:", error);
    });
});
