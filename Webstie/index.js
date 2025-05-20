let randomNum;

function notBadRandom(toNum){
    randomNum = Math.floor(Math.random() * toNum)
    return randomNum
}

document.getElementById("RandomButton").onclick = function(){
    randomNum = Math.floor(Math.random() * 100)
    document.getElementById("randomNum").innerText = randomNum;
}
