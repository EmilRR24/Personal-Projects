var start = document.getElementById("newGame");
var targets = document.getElementById("duckTargets");
var duckOne = document.getElementById("duckOne");
var duckTwo = document.getElementById("duckTwo");
var counter = document.getElementById('counter'),
    count = 0;

function startGame() {
    if (start.style.display === 'block'){
        start.style.display = 'none';
        count = 0;
        counter.innerText = "Total Ducks: " + count;
        targets.style.display = 'block';
        duckOne.style.display = 'block';
        duckTwo.style.display = 'block';
        duckOne.style.top = (Math.random()*(53-10+1))+10+'%';
        duckOne.style.left = (Math.random()*(71-25+1))+25+'%';
        duckTwo.style.top = (Math.random()*(53-10+1))+10+'%';
        duckTwo.style.left = (Math.random()*(71-25+1))+25+'%';
    }
    setTimeout(function newGame() {
        if (start.style.display === 'none'){
            start.style.display = 'block';
            targets.style.display = 'none';
        }
    }, 15000); // in milliseconds
};


function hitTargetOne(){
    if(duckOne.style.display === 'block'){
        duckOne.style.display = "none";
        count += 1;
        counter.innerText = "Total Ducks: " + count;
        setTimeout(() => {
            duckOne.style.top = (Math.random()*(53-10+1))+10+'%';
            duckOne.style.left = (Math.random()*(71-25+1))+25+'%';
            duckOne.style.display = 'block'
        }, 250);
    }
}

function hitTargetTwo(){
    if(duckTwo.style.display === 'block'){
        duckTwo.style.display = "none";
        count += 1;
        counter.innerText = "Total Ducks: " + count;
        setTimeout(() => {
            duckTwo.style.top = (Math.random()*(53-10+1))+10+'%';
            duckTwo.style.left = (Math.random()*(71-25+1))+25+'%';
            duckTwo.style.display = 'block'
        }, 250);
    }
}



