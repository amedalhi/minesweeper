document.addEventListener("DOMContentLoaded", function () {
  const grid = document.querySelector(".grid");
  const width = 10;
  const bombs = 10;
  let squares = [];

  //create board
  const createBoard = function () {
    //bomb arrays
    const bombArr = new Array(bombs).fill("bomb");
    const emptyArr = new Array(width * width - bombs).fill("valid");
    const combinedArr = bombArr.concat(emptyArr);
    const shuffledArr = combinedArr.sort(() => Math.random() - 0.5);
    console.log(shuffledArr);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.id = i;
      square.classList.add(shuffledArr[i]);
      grid.appendChild(square);
      squares.push(square);

      //add normal click
      square.addEventListener("click", function () {
        console.log(square);
        //click(square)
      });

      //adding left click
      square.addEventListener("auxclick", function () {
        console.log(`Left Clicked: ${square}`);
        //addFlag(square)
      });
    }

    //add numbers to grid
    for (let i = 0; squares.length; i++) {
      let totalBombsAround = 0;
      const isLeftEdge = i % width === 0;
      const isRightEdge = i % width === 0 - 1;

      if (squares[i].classList.contains("valid")) {
        if (i > 0 && !isLeftEdge )
      }
    }
  };
  createBoard();
});
