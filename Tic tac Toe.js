var board = Array(9).fill(null);
var currentPlayer = '❌';
var clickSound = document.getElementById('click-sound');
var winSound = document.getElementById('win-sound');

document.querySelectorAll('.cell').forEach((cell, i) => {
  cell.addEventListener('click', () => {
    if (!cell.textContent && !checkWin(board)) {
      clickSound.play();
      cell.textContent = currentPlayer;
      board[i] = currentPlayer;
      currentPlayer = currentPlayer === '❌' ? '⭕️' : '❌';
      if (checkWin(board)) {
        winSound.play();
        setTimeout(() => {
          alert('Game over');
          location.reload();
        }, 100);
      }
    }
  });
});

function checkWin(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines) {
    if (board[line[0]] && board[line[0]] === board[line[1]] && board[line[0]] === board[line[2]]) {
      return true;
    }
  }
  return false;
} 