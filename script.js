function showStats() {
    var playerDropdown = document.getElementById("player");
    var statsPlaceholder = document.getElementById("player-stats-placeholder");
    var selectedPlayer = playerDropdown.value;
    var stats = "";

    switch (selectedPlayer) {
        case "patty":
            stats = "Patrick M: Passing Yards 4183 - Passing Td's 27 - Super Bowl Winner";
            break;
        case "Joyy":
            stats = "Joe Burrow: Passing Yards 2309 - Passing Td's 15";
            break;
        case "CJ":
            stats = "CJ: Passing Yards 4108 - Passing Td's 23 - Rookie of the Year";
            break;
        case "Christen":
            stats = "CMC: Rushing Yards 1459 - Total Td's 21 - Offensive Player of the Year";
            break;
        case "Travis":
            stats = "Travis Kelce: Receiving Yards 984 - Total Td's 5";
            break;
        case "KING":
            stats = "Derick Henry: Rushing Yards 1167 - Rushing Td's 12";
            break;
        default:
            stats = "";
            break;
    }

    statsPlaceholder.innerHTML = stats;
}