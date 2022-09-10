var start = document.getElementById("newGame");
var targets = document.getElementById("duckTargets");

var duckOne = document.getElementById("duckOne");
var duckTwo = document.getElementById("duckTwo");
var duckThree = document.getElementById("duckThree");

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
        duckThree.style.display = 'block';
        duckOne.style.top = (Math.random()*(53-10+1))+10+'%';
        duckOne.style.left = (Math.random()*(71-25+1))+25+'%';
        duckTwo.style.top = (Math.random()*(53-10+1))+10+'%';
        duckTwo.style.left = (Math.random()*(71-25+1))+25+'%';
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    }
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },2000)
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },4000)
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },6000)
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },8000)
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },10000)
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },12000)
    setTimeout(() => {
        duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
        duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
    },14000)
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

function hitTargetThree(){
    if(duckThree.style.display === 'block'){
        duckThree.style.display = "none";
        count -= 1;
        counter.innerText = "Total Ducks: " + count;
        setTimeout(() => {
            duckThree.style.top = (Math.random()*(53-10+1))+10+'%';
            duckThree.style.left = (Math.random()*(71-25+1))+25+'%';
            duckThree.style.display = 'block'
        }, 250);
    }
}



