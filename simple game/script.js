var a = Math.floor(Math.random()*100);
let attempt = 10
document.getElementById("attemptCount").innerHTML= attempt;
attempt = 9
function game(){ 
    console.log(a);
    document.getElementById("attemptCount").innerHTML= attempt;
    let b = document.getElementById("textBox").value
    document.getElementById("textBox").innerHTML = b ;
    console.log(b);
    if(a==b){
        document.getElementById("textba").innerHTML= "U have guessed the right number"
    }
    else if(a>b){
        document.getElementById("textba").innerHTML= "The guessed number is smaller"
    }
    else {
        document.getElementById("textba").innerHTML= "The guessed number is bigger"
    }
    attempt = attempt-1;
    if(attempt===-1){
        alert("GAME OVER !!! click check to Refresh and try again")
    }
    if(attempt===-2){
        window.location.reload();
    }
}
