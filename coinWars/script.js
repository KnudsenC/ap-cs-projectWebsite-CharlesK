letCount = 0;
idCount = 0;

redTiles = 0;
blueTiles = 0;

redCoinTiles = 0;
blueCoinTiles = 0;

map = document.querySelector('#map')
coinBar = document.querySelector('#coinBar')

rowDiv = document.createElement("div");
rowDiv.className = "tileRow";

colDiv = document.createElement("div");
colDiv.className = "tileCol";

colDiv.ondrop = "dropNorm(event)";
colDiv.ondragover = "allowDrop(event)";

coinElement = document.createElement("img");
coinElement.id = "coin0";
coinElement.className = "coin";
coinElement.src = "img/coin.png";
coinElement.draggable = "true";
coinElement.ondragstart = "drag(event)";

function start() {
  document.getElementById("map").innerHTML = "";
  rows = prompt("How many rows do you want?");
  cols = prompt("How many columns do you want?"); 
  makeGrid(rows, cols);
  if (rows >= cols) {
    squareToCoin = Math.round(Math.sqrt(rows));
  } else if(cols > rows) {
    squareToCoin = Math.round(Math.sqrt(cols));
  };
}

function mapSelect() {
  document.getElementById("map").innerHTML = "";

  question = prompt("Which Map? \r\n 1 = U.S.A")

  if(question == "1") {
    makeGrid(25, 15);
    rows = 25;
    cols = 15;

    // For this map, 4 is a good ratio.
    squareToCoin = 4;
    
    colorSquares(15, 0, 0, 2);
    colorSquares(15, 0, 8, 23);
  
    colorSquares(15, 1, 0, 1);
    colorSquares(15, 1, 15, 22);
  
    colorSquares(15, 2, 0, 1);
    colorSquares(15, 2, 16, 20);
  
    colorSquares(15, 3, 0, 1);
  
    colorSquares(15, 4, 24, 25);
  
    colorSquares(15, 5, 24, 25);
  
    colorSquares(15, 6, 23, 25);
    
    colorSquares(15, 7, 23, 25);
  
    colorSquares(15, 8, 23, 25);
  
    colorSquares(15, 9, 0, 1);
    colorSquares(15, 9, 24, 25);
  
    colorSquares(15, 10, 0, 2);
    colorSquares(15, 10, 24, 25);
  
    colorSquares(15, 11, 0, 3);
    colorSquares(15, 11, 14, 15);
    colorSquares(15, 11, 23, 25);
  
    colorSquares(15, 12, 0, 9);
    colorSquares(15, 12, 12, 21);
    colorSquares(15, 12, 24, 25);
  
    colorSquares(15, 13, 0, 9);
    colorSquares(15, 13, 12, 22);
  
    colorSquares(15, 14, 0, 10);
    colorSquares(15, 14, 12, 23);
  }
}

//To get the a square's index for coloring it green
//distance and col star from 0;
function colorSquares(totalCol, col, start, end) {
  for (i = (start * totalCol); i < (end * totalCol); i+=totalCol) {
    document.getElementsByClassName("tileCol")[col + i].style.background = "#000";
    document.getElementsByClassName("tileCol")[col + i].name = "border";
  }
}


function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  idCount += 1;
  ev.preventDefault();

  if(grabId == "coin") {
    var coinCopy = document.getElementById(grabId).cloneNode(true);

    // To prevent overlap, each clone needs a different ID.
    coinCopy.id = "coin" + idCount;
    ev.target.appendChild(coinCopy);
    countCoins();
    return 0;
  }

  // Here, the clone MUST have the same id to keep track of its movement.
  var coinNode = document.getElementById(grabId).cloneNode(true);
  document.getElementById(grabId).remove();
  ev.target.appendChild(coinNode);
  countCoins();
}

//To count the number of coins of each color.
function countCoins() {
  redCoinTiles = 0;
  blueCoinTiles = 0;
  for (i = 0; i < rows * cols; i++){
    if(document.getElementsByClassName("tileCol")[i].name == "red") {
      if(document.getElementsByClassName("tileCol")[i].hasChildNodes()) {
        redCoinTiles += 1;
      }
    }
    else if(document.getElementsByClassName("tileCol")[i].name == "blue") {
      if(document.getElementsByClassName("tileCol")[i].hasChildNodes()) {
        blueCoinTiles += 1;
      }
    }
  }

  document.getElementById("redCoinCounter").innerHTML=redCoinTiles;
  document.getElementById("blueCoinCounter").innerHTML=blueCoinTiles;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  grabId = ev.target.id;
}

function makeGrid(row, col) {
  // Make Grid
  for (i = 0; i < row; i++){
    appendRow = rowDiv.cloneNode(true);
    map.appendChild(appendRow);
  }
  
  // Cols attach to rows to make complete grid
  for (i = 0; i < row; i++){
    for (j = 0; j < col; j++){
      appendCol = colDiv.cloneNode(true);
      document.getElementsByClassName("tileRow")[i].appendChild(appendCol);
    }
  }
}

function redPopup() {
  var popup = document.getElementById("redPopup");
  popup.classList.toggle("show");
}

function bluePopup() {
  var popup = document.getElementById("bluePopup");
  popup.classList.toggle("show");
}

function redCoinPopup() {
  var popup = document.getElementById("redCoinPopup");
  popup.classList.toggle("show");
}

function blueCoinPopup() {
  var popup = document.getElementById("blueCoinPopup");
  popup.classList.toggle("show");
}

// To keep track of coins 

// Only works in full tab mode
function conflict(ev) {
  srcId = ev.target.id;
  if(ev.target.src == "https://coinwarsmap.charlesknudsen.repl.co/img/coin.png") {
    document.getElementById(srcId).src = "img/coin_conflict.png";
  }
  else if(ev.target.src == "https://coinwarsmap.charlesknudsen.repl.co/img/coin_conflict.png") {
    document.getElementById(srcId).src = "img/coin.png";
  }
}

document.body.appendChild(map);

const tiles = document.getElementById("map");

key = "null"

//white
function w(){
  key = 'white';
}

//red
function r(){
  key = "red";
}

//blue
function b(){
  key = 'blue';
}

//coin
function coin(){
  key = 'coin'
}

// Key can toggle colors with prompt
//document.addEventListener("keydown", function(event) {
  //key = prompt("Color?");
//}, true);

// For the colors white, red, or blue.
tiles.addEventListener('click', function onClick(event) {

  // A player can't interact with the preset map's border.
  if(event.target.name != "border") {
    if(key == 'white' && event.target.className == "tileCol") {
      event.target.style.backgroundColor = "#FFF";
      event.target.name = ""; // White is equal to no name
    }
    else if(key == 'red' && event.target.className == "tileCol") {
      event.target.style.backgroundColor = "#F00";
      event.target.name = "red";
    }
    else if(key == 'blue' && event.target.className == "tileCol") {
      event.target.style.backgroundColor = "#00F";
      event.target.name = "blue";
    }
  }

  // Reset counts before.
  redTiles = 0;
  blueTiles = 0;
  redCoinTiles = 0;
  blueCoinTiles = 0;
  for (i = 0; i < rows * cols; i++){
    if(document.getElementsByClassName("tileCol")[i].name == "red") {
      redTiles += 1;
      //For each colored square, find out which one's have a coin and count them.
      if(document.getElementsByClassName("tileCol")[i].hasChildNodes()) {
        redCoinTiles += 1;
      }
    }
    else if(document.getElementsByClassName("tileCol")[i].name == "blue") {
      blueTiles +=1;
      if(document.getElementsByClassName("tileCol")[i].hasChildNodes()) {
        blueCoinTiles += 1;
      }
    } 
  }

    //Each coin requires 2 squares, so divide by 2.

    document.getElementById("redCounter").innerHTML = Math.floor(redTiles/squareToCoin); //squareToCoin is the conversion ratio for colored tiles to allowed number of coins.
    document.getElementById("blueCounter").innerHTML= Math.floor(blueTiles/squareToCoin);

    document.getElementById("redCoinCounter").innerHTML=redCoinTiles;
    document.getElementById("blueCoinCounter").innerHTML=blueCoinTiles;
}); 

