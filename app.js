var gameForm = document.getElementById('gameForm');
var gameBoard = document.getElementById('gameBoard');
var firstUser = document.getElementById('firstUser');
var secondUser = document.getElementById('secondUser');
var user1 = document.getElementById('user1');
var user2 = document.getElementById('user2');

function PlayGame() {
    if (firstUser.value.length < 3 && secondUser.value.length < 3) {
        alert('Invalid Name')
    } else {
        gameBoard.classList.remove('hide');
        gameForm.classList.add('hide');
        user1.innerHTML = "Player 1 : " + firstUser.value;
        user2.innerHTML = "Player 2 : " + secondUser.value;
       }

}
var box = document.getElementsByClassName('box');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');
var result = document.getElementById('result');
var turn = 0;
var timer = 0;
for (var i = 0; i < box.length; i++) {
    box[i].setAttribute('onclick', 'setValue(this)');
}
function setValue(val) {
    for (var a = 0; a < box.length; a++) {
        if (turn % 2 == 0) {
            val.innerText = 'O';
            val.style.color = "#D55236";
            val.removeAttribute('onclick');
        } else {
            val.innerText = 'X';
            val.style.color = "#42A6C1"
            val.removeAttribute('onclick');
        }
    }
    turn++;
    timer++;
    getWinner();
}
function reGame() {
    for (var b = 0; b < box.length; b++) {
        box[b].innerHTML = "";
    }
    for (var i = 0; i < box.length; i++) {
        box[i].setAttribute('onclick', 'setValue(this)');
    }
    result.innerHTML = "";
    turn = 0;
    timer = 0;
}
var winingBoard = document.getElementById("winningBoard")
var cn = document.getElementById("cn")
function getWinner() {
    if (box1.innerText == 'O' && box2.innerText == 'O' && box3.innerText == 'O'
        || box4.innerText == 'O' && box5.innerText == 'O' && box6.innerText == 'O'
        || box7.innerText == 'O' && box8.innerText == 'O' && box9.innerText == 'O'
        || box1.innerText == 'O' && box4.innerText == 'O' && box7.innerText == 'O'
        || box2.innerText == 'O' && box5.innerText == 'O' && box8.innerText == 'O'
        || box3.innerText == 'O' && box6.innerText == 'O' && box9.innerText == 'O'
        || box1.innerText == 'O' && box5.innerText == 'O' && box9.innerText == 'O'
        || box3.innerText == 'O' && box5.innerText == 'O' && box7.innerText == 'O') {
           var interval = setInterval(getCongrates,1000);
            function getCongrates() {
                gameBoard.setAttribute("class","hide");
                winingBoard.removeAttribute("class","hide");
                clearInterval(interval)
            }
         cn.innerHTML = "Congratulations";
            result.innerHTML = firstUser.value + " won the game";
        result.style.color = "white";
        for (var i = 0; i < box.length; i++) {
            box[i].removeAttribute('onclick');
        }
        timer = 0;
    }
    if (box1.innerText == 'X' && box2.innerText == 'X' && box3.innerText == 'X'
        || box4.innerText == 'X' && box5.innerText == 'X' && box6.innerText == 'X'
        || box7.innerText == 'X' && box8.innerText == 'X' && box9.innerText == 'X'
        || box1.innerText == 'X' && box4.innerText == 'X' && box7.innerText == 'X'
        || box2.innerText == 'X' && box5.innerText == 'X' && box8.innerText == 'X'
        || box3.innerText == 'X' && box6.innerText == 'X' && box9.innerText == 'X'
        || box1.innerText == 'X' && box5.innerText == 'X' && box9.innerText == 'X'
        || box3.innerText == 'X' && box5.innerText == 'X' && box7.innerText == 'X') {
           
            var interval = setInterval(getCongrates,1000);
            function getCongrates() {
                gameBoard.setAttribute("class","hide");
                winingBoard.removeAttribute("class","hide");
                clearInterval(interval)
            }
            cn.innerHTML = "Congratulations";
         result.innerHTML = secondUser.value + " won the game";
         result.style.color = "white";
        for (var i = 0; i < box.length; i++) {
            box[i].removeAttribute('onclick');
        }
        timer = 0;
    }
    if (timer == 9) {
       
        var interval = setInterval(getCongrates,1000);
        function getCongrates() {
            gameBoard.setAttribute("class","hide");
            winingBoard.removeAttribute("class","hide");
            clearInterval(interval)
        }
         result.innerHTML = "It's a Tie";
        for (var i = 0; i < box.length; i++) {
            box[i].removeAttribute('onclick');
        }
        timer = 0;
    }
}
function playAgain() {
    winingBoard.setAttribute("class","hide");
    reGame();
    gameForm.classList.remove('hide');
    firstUser.value = " ";
    secondUser.value = " ";
}