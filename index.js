var scores, currentScore, activePlayer,isPlaying;

init();

document.querySelector('.roll-dice').addEventListener('click', function () {

    if(isPlaying)
    {
    var dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-'+dice+ '.png';
    document.querySelector('.dice').style.display = 'block';
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById('current' + activePlayer).textContent = currentScore;
    }
    else {
        nextPlayer();
    }
}
});

document.querySelector('.hold').addEventListener('click', function () {
    if(isPlaying)
    {
    scores[activePlayer] += currentScore;
    document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];
    var input=document.getElementById('final-score').value;
    var winningScore;
    if(input==='')
    {
        winningScore=100;
    }
    else
    {
        winningScore =input;
    }
    if(scores[activePlayer]>=winningScore)
    {
        document.getElementById('player'+activePlayer).textContent='Winner!';
        document.querySelector('#player'+activePlayer).classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-section').classList.remove('active-player');
        isPlaying=false;
    }
    nextPlayer();
}
})

function nextPlayer() {
    currentScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current0').textContent = '0';
    document.getElementById('current1').textContent = '0';
    document.querySelector('.player-0-section').classList.toggle('active-player');
    document.querySelector('.player-1-section').classList.toggle('active-player');
}

document.querySelector('.new-game').addEventListener('click',init)


function init()
{
scores = [0, 0],
currentScore = 0;
activePlayer = 0;
isPlaying=true;
document.querySelector('.dice').style.display = 'none';
document.getElementById('score0').textContent = '0';
document.getElementById('score1').textContent = '0';
document.getElementById('current0').textContent = '0';
document.getElementById('current1').textContent = '0';
document.querySelector('#player0').classList.remove('winner');
document.querySelector('#player1').classList.remove('winner');
document.getElementById('player0').textContent='Player 1'
document.getElementById('player1').textContent='Player 2'
document.querySelector('.player-0-section').classList.remove('active-player');
document.querySelector('.player-1-section').classList.remove('active-player');
document.querySelector('.player-0-section').classList.add('active-player');
}