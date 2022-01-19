var keyboard=document.getElementById("keyboard");
var screenCalculator=document.getElementById("screen");
keyboard.addEventListener("click", calculate, false);

var showScreen="";

function calculate(e){
    var key=e.path[0].value;
    const operators="+-/*.=";
    const digits="0123456789";
    const actions=["CE", "C","root"]

    if(actions.includes(key)){

        if(key=="CE"){

            showScreen=showScreen.slice(0,-1);
            screenCalculator.value=showScreen;

        }

        if(key=="C"){

            screenCalculator.value="";

        }
    }

    if (digits.includes(key)){

        showScreen+=key;
        screenCalculator.value=showScreen;

    }
    
    if(operators.includes(key)){

       if(!operators.includes(showScreen[showScreen.length-1])){

           showScreen+=key;
           screenCalculator.value=showScreen;

       }
    }
        
    console.log(e.path[0].value);
}




