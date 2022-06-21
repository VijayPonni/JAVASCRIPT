/*
let a=5;
console.log(a);
let A="hi";
console.log(A);



//Global scope

var apple=5;    

console.log(apple);           //Using in global

function add(){

    apple =apple+2;        //Using inside a function
    console.log(apple);
}
add();



//Block scope
console.log(c);

if(true){
    var c=50;             // First declaration inside the block
}


fun();            //Function call befor function defintion

function fun(){
    console.log("hi");
}

//Anonymus functions and hoisting





function sun(){
    console.log("First function");
}
var sun = function(){
    console.log("Anonymous function");
}

function sun(){
    console.log("Second function");
}


sun();



//Function scope


// Declaring variables inside function and Using them globally will produce reference error
function jail(){
    var accust_name="sugan";
    console.log(accust_name);
}
jail();

console.log(accust_name);   //creates error message



//Simple scope accessibility rules:






function show(){             

   let rule=5;            //Declaring inside a function
   rule=4;
    console.log(rule);       //Using it in function
}
show();

 rule=5;
console.log(rule);    // Using it globally
  



// let ,var and const are same in global scope

 var monday=1;

 let tuesday=2;

 const wednesday=3;

 console.log(monday,tuesday,wednesday);    ///using globally

 function week(){
 
     console.log(monday);                //Using inside a function
     
 
     console.log(tuesday);

     console.log(wednesday);
 }
week();


// let , const and var in block scope

if(true){                   
    var jan=1;                   ///Declaring in block-scope
    let feb=2;
    const mar=3;
     
    console.log(jan,feb,mar);      
}
console.log(jan);           //var will log the value
                       
console.log(feb);           //let  will give reference error

console.log(mar);           //const will also give reference error   




//Hoisting var

console.log(jun);
var jun=55;


//Histing let
console.log(jul);
let jul=34;

console.log(aug);
const aug=100;


*/


// let, var and const are same in function scope

function games(){
    var football=1;              //declaring inside functons
    let cricket=2;
    const hockey=3;

    console.log(football);        //can work inside a function
    console.log(cricket);          
    console.log(hockey);
}
games();

console.log(fotball);          //cannot acces it globaly
























































