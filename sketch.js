var currentNumber,numberToAdd,inp,button,directions,reminder,compPick;
var gameover = false;
var total = 2;
var playerTurn = true;

function setup() {
  createCanvas(325, 80);
  directions = createDiv('Choose a number to add:');
  directions.position(0,0);
  directions.size(180,20);
  inp = createInput();
  inp.position(directions.width,0);
  inp.size(60);
  button = createButton('Enter');
  button.mousePressed(raceto1000);
  button.position(directions.width+inp.width,0);
  currentNumber = createDiv("The current total is: "+total);
  currentNumber.position(0,directions.height);
  currentNumber.size(250,20);
  compPick = createDiv("The Computer chose: "+ compPick);
  compPick.position(0,directions.height+currentNumber.height)
  compPick.size(325,20);
  compPick.hide();
  reminder = createDiv("You must choose a number less than the total!");
  reminder.size(325,20);
  reminder.position(0,directions.height+currentNumber.height+compPick.height);
  reminder.hide();
}

function draw() {
  background(255);
}

function raceto1000() {
  if(gameover == false) {
  playerTurn = true;
  if((int(inp.value()) < total)&&(int(inp.value()>0))) {
    reminder.hide();
    total = total + int(inp.value());
    if(total >= 1000) total = 1000;
    inp.value('');
    currentNumber.html("The current total is: "+total);
    checkWin();
    if(gameover == false) {
      computerTurn();
    }
  } else {
    reminder.show();
  }
  }
}

function checkWin() {
  if(total == 1000) {
    switch(playerTurn) {
      case true:
        reminder.html("You win!");
        reminder.show();
        gameover = true;
        break;
      case false:
        reminder.html("The computer wins!");
        reminder.show();
        gameover = true;
        break;
    }
  }
}

function computerTurn() {
  var compAdd = 1;
  var target = 1000;
  //key numbers are 1000,500,250,125,67,33,16,8,4,2
  playerTurn = false;
  switch(true) {
    case total <= 3:
      target = 3;
      break;
    case total <= 7:
      target = 7;
      break;
    case total <=15:
      target = 15;
      break;
    case total <= 31:
      target = 31;
      break;
    case total <= 62:
      target = 62;
      break;
    case total <= 125:
      target = 125;
      break;
    case total <= 250:
      target = 250;
      break;
    case total <= 500:
      target = 500;
      break;
  }
   if (((target-total) > 0)&&(target-total < total)) {
        compAdd = target-total;
      } else {
        compAdd = round(random(total-2)+1);
      }
  total = total + compAdd;
  currentNumber.html("The current total is: "+total);
  compPick.html("The Computer chose: " + compAdd);
  compPick.show();
  checkWin();
}