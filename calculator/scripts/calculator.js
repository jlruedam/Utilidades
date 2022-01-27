var keyboard=document.getElementById("keyboard");
var screenCalculator=document.getElementById("screen");
keyboard.addEventListener("click", calculate, false);
screenCalculator.addEventListener("keydown", calculateScreen,false);

var showScreen="";


function calculateScreen(e){
    console.log(e.type);
    
}

function calculate(e){

    var key=e.path[0].value;
    const operators="+-/*.";
    const digits="0123456789";
    const actions=["CE", "C","root"]

    if(actions.includes(key)){

        if(key=="CE"){

            showScreen=screenCalculator.value.slice(0,-1);
            screenCalculator.value=showScreen;
        }

        if(key=="C"){

            showScreen="";
            screenCalculator.value=showScreen;
        }
    }

    if (digits.includes(key)){

        showScreen+=key;
        screenCalculator.value=showScreen;
    }
    
    if(operators.includes(key)){

        if(  !operators.includes(screenCalculator.value[screenCalculator.value.length-1]) 
            && !screenCalculator.value=="") {

                showScreen+=key;
                screenCalculator.value=showScreen;
       }
    }

    if(key=="="){

        screenCalculator.value=eval(screenCalculator.value);
        showScreen="";
    }
        
    console.log(e.path[0].value);
}




