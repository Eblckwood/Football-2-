function showStats() {
    var playerDropdown = document.getElementById("player");
    var statsPlaceholder = document.getElementById("player-stats-placeholder");
    var selectedPlayer = playerDropdown.value;
    var stats = "";

    switch (selectedPlayer) {
        case "patty":
            stats = "Patrick Mahomes: Passing Yards 4183 - Passing Touchdown's 27 - Super Bowl Winner";
            break;
        case "Joyy":
            stats = "Joe Burrow: Passing Yards 2309 - Passing Touchdown's 15";
            break;
        case "CJ":
            stats = "C.J Stroud: Passing Yards 4108 - Passing Touchdown's 23 - Rookie of the Year";
            break;
        case "Christen":
            stats = "Christen McCaffrey: Rushing Yards 1459 - Total Touchdown's 21 - Offensive Player of the Year";
            break;
        case "Travis Kelce":
            stats = "Travis Kelce: Receiving Yards 984 - Total Touchdown's 5";
            break;
        case "KING":
            stats = "Derick Henry: Rushing Yards 1167 - Rushing Touchdown's 12";
            break;
        default:
            stats = "";
            break;
    }

    statsPlaceholder.innerHTML = stats;
}