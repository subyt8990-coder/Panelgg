// Sample data
let players = [
  {name:"Alice", uid:"123456789", rank:"Gold IV", level:70, hs:42, totalKills:1248, matchesPlayed:30, avgKD:4.2, topHs:12, recentAvg:38, bestWeapon:"AWM"},
  {name:"Bob", uid:"987654321", rank:"Platinum I", level:80, hs:55, totalKills:2000, matchesPlayed:50, avgKD:5.1, topHs:20, recentAvg:50, bestWeapon:"M1887"}
];

// Populate dropdown
let select = document.getElementById("playerSelect");
players.forEach((p,i)=>{
  let opt = document.createElement("option");
  opt.value=i;
  opt.innerText=p.name;
  select.appendChild(opt);
});

select.addEventListener("change", ()=>{
  updatePlayer(players[select.value]);
});

function updatePlayer(p){
  document.getElementById("playerName").innerText = p.name;
  document.getElementById("playerUid").innerText = "UID: " + p.uid;
  document.getElementById("rankChip").innerText = p.rank;
  document.getElementById("levelChip").innerText = "Lv. " + p.level;
  document.getElementById("hsChip").innerText = "HS: " + p.hs + "%";
  document.getElementById("totalKills").innerText = p.totalKills;
  document.getElementById("matchesPlayed").innerText = p.matchesPlayed;
  document.getElementById("avgKD").innerText = p.avgKD;
  document.getElementById("topHs").innerText = p.topHs;
  document.getElementById("recentAvg").innerText = p.recentAvg + "%";
  document.getElementById("bestWeapon").innerText = p.bestWeapon;

  // Animate circle
  let circle = document.getElementById("progressCircle");
  let dash = 251.2 * (1 - p.hs/100);
  circle.setAttribute("stroke-dasharray", dash + " 251.2");

  document.getElementById("hsPercent").innerText = p.hs + "%";
}

// Initialize first player
updatePlayer(players[0]);

// Dummy functions
function downloadReport(){ alert("Report Exported!"); }
function simulateUpdate(){ alert("Data Refreshed!"); }
function toggleFollow(){ alert("Followed!"); }