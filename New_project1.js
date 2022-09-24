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

console.log("______________________________________________________________")

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    let mySentence = `${element} is the number ${index + 1} fruit in the array`
    console.log(mySentence)
    
}

console.log("______________________________________________________________")
//for of

for (const fruit of fruits) {

    if(fruit.includes("o") > 0){
        console.log(fruit.toUpperCase());
    }
}

let people = ["Mother", "Sister", "father","Uncle", "Brother", "Aunt"]
for (let i = 0; i < 6; i++) 
{
    const element = people[i];
    let Thetext = "My " + element + " has a car" + "<br>"
    console.log(Thetext);
}

let students =["Billy" , "Thomas" , "Yemi" , "Mary"]
let ourText =""
for (let i = 0; i < students.length; i++) {
    const element = students[i];
    document.getElementById("demo").innerHTML = ourText;
}

let food = ["Eba" , "Beans"]
document.getElementById("favfood").innerHTML = food;

food.push("Garri")
document.getElementById("FavFood").innerHTML ="Is it for " + food
console.log(food);
console.log(Array.isArray(food));

console.log("___________________________________________");

food.pop()
console.log(food);