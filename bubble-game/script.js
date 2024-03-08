let Timer = 60;
let count = 0;
let score = 0;

function createBubble()
{
    var bubble = "";
    for(let i=1;i<91;i++)
    {
        let x = Math.floor(Math.random()*10);
        bubble += `<div id="bub">${x}</div>`;
    }

    document.querySelector('#niche').innerHTML = bubble;
}
createBubble();

function setTimer()
{
    var str = setInterval(function()
    { 
        if(Timer > 0){ Timer--; document.querySelector(".Time").innerHTML = Timer; }
        else{ clearInterval(str); document.querySelector("#niche").innerHTML = "<h2>Game Over</h2>" } 
    }, 1000);
}
setTimer();

function setScore()
{ 
    score += 10; 
    document.querySelector(".Score").innerHTML = score;
}

function getNewHit()
{
    count = Math.floor(Math.random()*10);
    document.querySelector(".Hit").innerHTML = count;
}

const nicheSe = document.getElementById('niche');
nicheSe.addEventListener("click" , 
    function(event)
    {
        let s = Number(event.target.textContent);
        if(s === count)
        {
            createBubble();
            setScore();
            getNewHit();
        }
    }
)


