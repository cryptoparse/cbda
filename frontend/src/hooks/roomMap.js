export function roomMap(gno) {
  const room2 = ["Team 1", "Team 3", "Team 5", "Team 21"];
  const room3 = ["Team 2", "Team 4", "Team ", "Team 8", "Team 22"];
  const room4 = ["Team 7", "Team 9", "Team 11", "Team 23"];
  const room5 = ["Team 10", "Team 12", "Team 14", "Team 16", "Team 24"];
  const room6 = ["Team 13", "Team 15", "Team 17", "Team 25"];
  const room7 = ["Team 18", "Team 19", "Team 20", "Team 21"];
  if (room2.includes(gno)) {
    return gno.concat(" (Room 2)");
  } else if (room3.includes(gno)) {
    return gno.concat(" (Room 3)");
  } else if (room4.includes(gno)) {
    return gno.concat(" (Room 4)");
  } else if (room5.includes(gno)) {
    return gno.concat(" (Room 5)");
  } else if (room6.includes(gno)) {
    return gno.concat(" (Room 6)");
  } else if (room7.includes(gno)) {
    return gno.concat(" (Room 7)");
  }
}
