export function getBoardAtTurn(history, turn, width, height) {
  // Create an array of size width * height
  let board = Array(height).fill(0).map(_ => Array(width).fill("-"));

  // Add every element of history to board one by one
  for (let i = 0; i < turn; i++) {
    const historyElement = history[i]
    const ypos = historyElement[0]
    const xpos = historyElement[1]
    const player = historyElement[2]
    board[ypos][xpos] = player
  }
  return board;
}
