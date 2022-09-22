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
