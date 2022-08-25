const player1 = [30, 20, 10];
const player2 = [30, 20, 10];

const sum = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i ++) {
    sum += array[i]
  }
  return sum
}

const winner = (scorePlayer1, scorePlayer2) => {
  let resultPlayer1 = [];
  let resultPlayer2 = [];

  if (scorePlayer1.length != scorePlayer2.length) {
    return false;
  } else {
    for (let i = 0; i < scorePlayer1.length; i++)
      if (scorePlayer1[i] > scorePlayer2[i]) {
        resultPlayer1.push(1)
      } else if (scorePlayer1[i] < scorePlayer2[i]) {
        resultPlayer2.push(1)
      }
  }

  const sum1 = sum(resultPlayer1)

  const sum2 = sum(resultPlayer2)

  if (sum1 > sum2) {
    console.log("Player 1 ganhou")
  } else if (sum1 < sum2) {
    console.log("Player 2 ganhou")
  } else {
    console.log("Empatou")
  }
}

winner(player1, player2)
