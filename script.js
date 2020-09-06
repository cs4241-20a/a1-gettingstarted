var runningAnimations = [];

//Function to produce a "bounce" animation when a content div is moused over.
function animateContent(id)
{
    var contentDiv = document.getElementById(id);
    //console.log("contentDiv: "+contentDiv+"\n");
    //console.log("id: "+id+"\n");
    //console.log("mouse over function called! \n");
    var pos = 0;
    var state = 0; //which bounce we are on.
    var coeff = 3;
    if(!runningAnimations.includes(id))
    {
        runningAnimations.push(id);
        var intervalId = setInterval(function() {

            contentDiv.style.left = pos + 'px';
            pos+=coeff;
            if(state == 0 && pos >= 100)
            {
                state++;
                coeff = -2;
            }else if(state == 1 && pos <= 0)
            {
                state++;
                coeff = 1;
            }else if(state == 2 && pos >= 30)
            {
                state++;
                coeff = -1;
            }else if(state == 3 && pos <= 0)
            {
                clearInterval(intervalId);
                for(var i = 0; i < runningAnimations.length; i++)
                {
                    if(runningAnimations[i] === id)
                    {
                        runningAnimations.splice(i, 1);
                        break;
                    }
                }
            }
    
        }, 1);
    }
}
