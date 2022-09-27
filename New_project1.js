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

let food = ["Eggs","Beans" ,"soya"]
document.getElementById("FavFood").innerHTML ="proteins" + "<br>" + food ;
console.log(Array.isArray(food));

console.log("___________________________________________");
 
let birds = ["Eagle" , "Parrot" , "pigeon" , "Ostrich"];
let fishes = ["Tilapia" , "Shark" , "mackerel" , "Salmon"];
let animals = birds.concat(fishes);
document.getElementById("Text1").innerHTML = "Different creatures in the animal kingdom are" + "<br>" + animals;
let seaCreatures = animals.splice(4 ,4 , "Crab","Turtle","Lion","Snake","Shrimps");
document.getElementById("Text2").innerHTML = "some of these animals live in the water,they include:" + "<br>" + seaCreatures;
document.getElementById("Text3").innerHTML = "So " + animals + " consist of creatures that live both on land and in water";
let MyBirds = birds.slice(1,3);
document.getElementById("Text4").innerHTML = MyBirds + " and fowls are domestic birds";
console.log(animals.sort());


let Numbers = [13,4,56,3,120];
text = ""
Numbers.forEach(MyNumbers);
document.getElementById("number1").innerHTML = text
console.log(Numbers.sort(function(a , b){return a-b}));
function MyNumbers(value , index , Array)
 {
   text += value + "<br>" 
}
 
let ourNumber = [1 , 2 , 9 , 7 , 89 , 8 , 100]
let MyNum = ourNumber.map(theNumber)
document.getElementById("number2").innerHTML = MyNum 
let mynums = ourNumber.filter(Thenumber)
document.getElementById("number3").innerHTML = mynums
let sum = ourNumber.reduce(NumberSum ,100)
document.getElementById("number4").innerHTML = "The sum of the numbers and 100 is " + sum
let AllNumbers = ourNumber.every(everyNumber)
document.getElementById("number5").innerHTML = "The numbers are less than 200 : " + AllNumbers
let someNumbers = ourNumber.some(evenNumbers)
document.getElementById("number6").innerHTML = "Some numbers are divisible by 2 :" + someNumbers
let squarenumber = ourNumber.find(squareNumber)
document.getElementById("number7").innerHTML = squarenumber + " is a PerfectSquare"

function NumberSum(total , value ,index ,array) {
   return total + value
}

function Thenumber(value) {
    return value > 7
}

function theNumber(value) {
   return value * 2 
}

function everyNumber(value) {
    return value < 200
    
}

function evenNumbers(value) {
    return value / 2
    
}

function squareNumber(value) {
    return  value > 8
    
}


let alphabet = Array.from("AEIOU")
document.getElementById("vowels").innerHTML = alphabet