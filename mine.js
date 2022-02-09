/* 

2 player shooting each other
each palyer has max health 100
they can shoot each other with a random power of 0-5
it will reduce enemy health
the first player to reach 0 will loose.
max 5 rounds.
the player with max winning round will win the game.
On the screen, there should be a button to start the game.
Once the game finishes, it should update the current score.
When a player wins 3 games, show the winner of the match.

*/




// inital rounds that we'll increase when fire button will be pressed
let totalRoundsPlayed = 0;

// initial health and initial score 
let player1_health = 100;
let player1_score = 0;

let player2_health = 100;
let player2_score = 0;

// shooting buttons for players
const shootingButton = document.querySelector('.shootingBtn');

shootingButton.addEventListener('click', (event) => {
    shootingFunc();
})


// shooting functions for both players
const shootingFunc = () => {

    let player1_fires = Math.floor(Math.random() * 5);

    let player2_fires = Math.floor(Math.random() * 5);

    console.log(`Player 1 Fires with Power of ${player1_fires}`);

    console.log(`Player 2 Fires with Power of ${player2_fires}`);

    // health capturing
    player1_health -= player2_fires;
    player2_health -= player1_fires;


    // here we're incrementing the rounds as pers the fire button gets hitted
    totalRoundsPlayed++;
    console.log(totalRoundsPlayed);

    // for frontend incrementing the no. of rounds played
    document.querySelector('.noOfRounds').innerHTML = totalRoundsPlayed;
    document.querySelector('.getFiringValuesForPlayer1').innerHTML = player1_fires;
    document.querySelector('.getFiringValuesForPlayer2').innerHTML = player2_fires;


    // decision making who will win
    if (player1_health == 0) {
        console.log('Player 2 Wins');
    } else if (player2_health == 0) {
        console.log('Player 1 Wins');
    }

    if (player1_fires > player2_fires) {
        player1_fires += 1;
        player1_score += 1;
    } else if (player2_fires > player1_fires) {
        player2_fires += 1;
        player2_score += 1;
    }

    console.log(`Player 1 score is : ${player1_score}`);
    console.log(`Player 2 score is : ${player2_score}`);


    if (totalRoundsPlayed == 5) {
        if (player1_score > player2_score) {
            console.log('Player 1 Wins the Tournament');
            alert('Player 1 Wins the Tournament!')
            location.reload();
        } else if (player2_score > player1_score) {
            console.log('Player 2 Wins the Tournament');
            alert('Player 2 Wins the Tournament!')
            location.reload();
        } else if (player1_score == player2_score) {
            console.log('Math Draw');
            alert('Match Draw');
            location.reload();
        }
    }
}
