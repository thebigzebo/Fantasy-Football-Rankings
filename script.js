const players = [
  { rank: 1, name: "Christian McCaffrey", team: "49ers", position: "RB", bye: 9 },
  { rank: 2, name: "Justin Jefferson", team: "Vikings", position: "WR", bye: 13 },
  { rank: 3, name: "Patrick Mahomes", team: "Chiefs", position: "QB", bye: 10 },
  { rank: 4, name: "Travis Kelce", team: "Chiefs", position: "TE", bye: 10 },
  { rank: 5, name: "Ja'Marr Chase", team: "Bengals", position: "WR", bye: 7 },
];

function loadRankings(position = "ALL") {
  const tableBody = document.querySelector("#rankingsTable tbody");
  tableBody.innerHTML = "";

  const filteredPlayers = position === "ALL"
    ? players
    : players.filter(player => player.position === position);

  filteredPlayers.forEach(player => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${player.rank}</td>
      <td>${player.name}</td>
      <td>${player.team}</td>
      <td>${player.position}</td>
      <td>${player.bye}</td>
    `;
    tableBody.appendChild(row);
  });
}

function filterRankings() {
  const selectedPosition = document.getElementById("position").value;
  loadRankings(selectedPosition);
}

// Load initial rankings on page load
window.onload = () => loadRankings();
