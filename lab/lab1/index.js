let game = {
  team1: {
    name: "Manunited",
    player1: [
      "David de Gea",
      "Lissandro",
      "Teden mengi",
      "Diogo Dalot",
      "Lukaku",
      "Luke Shaw",
      "Axel Tuanzebe",
      "Harry Maguie",
      "Scott Mctony",
      "Antho Ny",
      "Casemiro",
    ],
  },
  team2: {
    name: "ManCity",
    player2: [
      "David de Gea_2",
      "Lissandro_2",
      "Teden mengi_2",
      "Diogo Dalot_2",
      "Lukaku_2",
      "Luke Shaw_2",
      "Axel Tuanzebe_2",
      "Harry Maguie_2",
      "Scott Mctony_2",
      "Antho Ny_2",
      "Casemiro_2",
    ],
  },
  odds: {
    team1: 4,
    x: 0.5,
    team2: 2.5,
  },
  scored: ["Teden mengi", "Diogo Dalot", "Lukaku_2", "Luke Shaw"],
};
//! 1.
let { ...team1 } = game.team1;
let { ...team2 } = game.team2;
console.log(team1);

// //! 2.
let [gk, ...fieldPlayers] = team1.player1;

// //! 3. allPlayers
let allPlayers = [...team1.player1, ...team2.player2];

//! 4. thay player
let players1Final = [...team1.player1, "thiago", "Bruno", "Perisic"];

//! 5. tỉ lệ kết quả trận đấu

for (const [key, value] of Object.entries(game.odds)) {
  const oddsGame = key == "x" ? "Hòa" : `Tỷ lệ chiến thắng của ${game.key}`;
  console.log(`${oddsGame} là : ${value} `);
}

//! 6. cầu thủ đã khi bàn

for (const [key, values] of Object.entries(game.scored)) {
  if (key == 0) {
    console.log(`Goal : không được tính And scorer : ${values}`);
  } else {
    console.log(`Goal : ${key} And scorer : ${values}`);
  }
}

//! 7.Đội có tỷ lệ chấp thấp hơn sẽ dành chiến thắng
let [chap1, ...chap2] = Object.entries(game.odds);
let showWinner =
  chap1[1] > chap2[0][1] + chap2[1][1]
    ? "Đội thắng là team1"
    : "Đội thắng là team2";
console.log(showWinner);

//?  Bài 2

//! 1. Lặp mảng game.scored array và in ra cầu thủ cùng với số bàn thắng đã ghi
console.log("/////////////////////////////////////");
console.log("/////////////////////////////////////");

// let [playerscored, playerName] = Object.entries(game.scored);

for (const [playerscored, playerName] of Object.entries(game.scored)) {
  playerName == "Luke Shaw" &&
    console.log(`Scored : ${playerscored} name : ${playerName}`);
}

//! 2. Sử dụng vòng lặp để tính tỉ lệ kết quả trận đấu và in ra console
let goalTeam1 = 0;
let goalTeam2 = 0;
for (const [key0, value0] of Object.entries(game.scored)) {
  for (const [key, value] of Object.entries(game.team1.player1)) {
    if (value0 == value) {
      goalTeam1 += Number(key0);
      console.log(`Goal : ${key0} scorer : ${value0} `);
    }
  }
}
for (const [key2, value2] of Object.entries(game.scored)) {
  for (const [key, value] of Object.entries(game.team2.player2)) {
    if (value2 == value) {
      goalTeam2 += Number(key2);
      console.log(`Goal : ${key2} scorer : ${value2} `);
    }
  }
}
let result =
  goalTeam1 > goalTeam2
    ? `Chiến thắng thuộc về ${game.team1.name}`
    : `Chiến thắng thuộc về ${game.team2.name}`;
console.log(result);

//! 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this

for (const [key, value] of Object.entries(game.odds)) {
  if (key === "team1") {
    console.log(
      `
      Tỉ lệ thắng của ${key.replace("team1", "Manunited")} : ${value} 
      `
    );
  } else if (key === "team2") {
    console.log(
      `
      Tỉ lệ thắng của ${key.replace("team2", "ManCity")} : ${value} 
      `
    );
  } else {
    console.log(
      `
      Tỉ lệ hòa of ${key} : ${value} 
      `
    );
  }
}
let { name2 } = { ...game.team2 };

game.scorers = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
