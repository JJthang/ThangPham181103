const game = {
  team1: "Phạm thắng",
  team2: "Phạm tài",
  players: [
    [
      "player1",
      "player2",
      "player3",
      "player4",
      "player5",
      "player6",
      "player7",
      "player8",
      "player9",
      "player10",
      "player11",
    ],
    [
      "player1_1",
      "player1_2",
      "player1_3",
      "player1_4",
      "player1_5",
      "player1_6",
      "player1_7",
      "player1_8",
      "player1_9",
      "player1_10",
      "player1_11",
    ],
  ],
  score: "4:0",
  scored: ["pham thang", "laydy Gaga", "Gna", "CR7"],
  date: "Nov 1th 2023",
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

for (const [keys, player] of Object.entries(game.scored)) {
  console.log(`Goal : ${keys} And scorer : ${player}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
average /= odds.length;
console.log(Math.ceil(average));

console.log("//");
for (const [team, odd] of Object.entries(game.odds)) {
  let TeamStr = team === "x" ? "Bow" : `Victory ${game[team]}`;
  console.log(`Odd of ${TeamStr} : ${odd}`);
}

console.log("//");
const [player1, player2] = game.players;

const [gk, ...fieldPlayer] = player1;

const allPlayer = [...player1, ...player2];

const players1Final = [...player1, "ThiaGo", "Ronadinho", "Ibra"];

const {
  odds: { team1, x: draw, team2 },
} = game;

let printGold = (...rest) => {
  console.log(rest);
  console.log(`${rest.length} goals were scored`);
};

// printGold && printGold("leoneLoseKey", "david", "Muller", "margai");
// printGold && printGold("leoneLoseKey", "david");
team1 > team2 && console.log("team 1 is more likely to win");
team1 < team2 && console.log("team 1 has less to win");
