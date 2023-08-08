$(function() {
  $("#datepicker").datepicker();
});

document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-button");
  const fromStationInput = document.querySelector(".from-station");
  const toStationInput = document.querySelector(".to-station");
  const resultContainer = document.querySelector(".result-container");

  searchButton.addEventListener("click", async function () {
    // Fetch data from data.json
    const response = await fetch("data.json");
    const data = await response.json();

    const fromStation = fromStationInput.value;
    const toStation = toStationInput.value;

    // Find matching stations and display information
    const fromStationData = data.find(item => item.station === fromStation);
    const toStationData = data.find(item => item.station === toStation);

    if (fromStationData && toStationData) {
      resultContainer.innerHTML = `
        <p>From Station: ${fromStationData.station}</p>
        <p>Info: ${fromStationData.info}</p>
        <p>To Station: ${toStationData.station}</p>
        <p>Info: ${toStationData.info}</p>
      `;
    } else {
      resultContainer.innerHTML = "<p>No matching stations found.</p>";
    }
  });
});

