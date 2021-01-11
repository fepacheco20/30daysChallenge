const score1 = document.querySelector("#score1")
const score2 = document.querySelector("#score2")
const btn1 = document.querySelector("#player1");
const btn2 = document.querySelector("#player2");
const btnReset = document.querySelector("#reset");
const play = document.querySelector("#play");

let totalPlay = 3;
let scoreP1 = 0;
let scoreP2 = 0;

btn1.addEventListener("click", function (e) {
    scoreP1++;
    score1.innerText = scoreP1;
    play.disabled = true;
    if (score1.innerText == play.value) {
        score1.classList.add('winner');
        score2.classList.add('loser');
        btn1.disabled = true;
        btn2.disabled = true;
        result('1');
    }
})

btn2.addEventListener("click", function () {
    scoreP2++;
    score2.innerText = scoreP2;
    play.disabled = true;
    if (score2.innerText == play.value) {
        score2.classList.add('winner');
        score1.classList.add('loser');
        btn1.disabled = true;
        btn2.disabled = true;
        result('2');
    }
})

btnReset.addEventListener("click", function () {
    scoreP1 = 0;
    scoreP2 = 0;
    score2.innerText = scoreP2;
    score1.innerText = scoreP1;
    btn1.disabled = false;
    btn2.disabled = false;
    play.disabled = false;
    score2.classList.remove('winner', 'loser');
    score1.classList.remove('loser', 'winner');
    document.querySelector('p').remove();
})

function result(n) {
    const congrats = document.createElement('p');
    congrats.append(`The winner is player ${n}!`);
    console.log(congrats);
    btn1.insertAdjacentElement('beforebegin', congrats);
}