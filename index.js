let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");
let score_home = 0
let score_guest = 0

function addOneToHome(){
    score_home+=1;
    homeScore.textContent =score_home

}
function addTwoToHome(){
    score_home+=2;
    homeScore.textContent =score_home

}
function addThreeToHome(){
    score_home+=3;
    homeScore.textContent =score_home

}

function addOneToGuest(){
    score_guest+=1;
    guestScore.textContent =score_guest

}
function addTwoToGuest(){
    score_guest+=2;
    guestScore.textContent =score_guest

}
function addThreeToGuest(){
    score_guest+=3;
    guestScore.textContent =score_guest

}