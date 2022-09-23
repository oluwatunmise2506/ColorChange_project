function changecolor()
 {
    document.getElementById("myText").style.color = "red"
    
}

function showText()
{
    document.getElementById("text").innerHTML = "learn something today"
    
}

let WildAnimals = ["Lions" , "Elephants" , "Leopards ", "Tigers"] ;
document.getElementById("thisText").innerHTML = WildAnimals;
WildAnimals[0] = "Buffalos";
console.log(WildAnimals);
console.log(WildAnimals.indexOf("Tigers", 1));
document.getElementById("Mytext").innerHTML = "I love " +  WildAnimals[3] + " and " + WildAnimals[0];


//loops

//common loops

//for
//forof

//while - while something is still happening, do this
//dowhile

let fruits = ["mango", "pineapple", "apple", "orange", "cashew", "pawpaw"]

//for loop

for (let index = 4; index > -1; index--) {
    let arrayIndex = index;
    let element = fruits[index];
    console.log(element);
    
}


