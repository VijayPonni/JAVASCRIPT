/*  var plus =  function (){
    var counter=0;
      return function() {
        counter +=1;
        return counter;
    }

} 
();

console.log(plus());
console.log(plus());
console.log(plus());





function global(){
  console.log("I am global function");
  function inner(){
      console.log("I am inner function");
  } inner();
}
global();




function sendEmail(sub,message,from){

  let msg = ` "${sub}" > "${message}" received from ${from}.`;


  let send = function(){
  

    console.log(msg);
  }
  send();

}
sendEmail("Re: Subject","Good news","Vijay");


function india(from ,sub,message){

  let msg = `"${sub}" > "${message}" received from ${from}.`;

    let send = function(){

   console.log(msg);

  }
   return send;
  
}
//Creating refernce to india
let ref = india ('tamil','RE : Subject','Good news.');

//calling by refernce name
ref();

 
let print ,set, increase,decrease;
function manager(){
  console.log("manager();");
  let number = 15;
  print = function(){
    console.log(number);
  }
  
  set = function(value){
      number=value;
    }
    increase = function(){
      number++;
    }
    decrease=function(){
      number--;
    }
  

  
}
manager();

print();
for (let i=0;i<200;i++)
increase();
print();
decrease();

print();
set(134);
print();

let new_print = print;
manager();
print();
new_print();
*/

let get = null;            //placeholder for global getter function

function closure() {

 this. inc = 0;
  get = () =>  console.log(this.inc);   this.inc;   //getter

  function increase(){
     this.inc++; 
     console.log(this.inc);
  }
  function decrease(){
    this.inc--;
    console.log(this.inc);
  }
  function set(v){
    this.inc = v;
    console.log(v);
  }
  function reset(){
    this.inc=0;
    console.log(this.inc);

  }
  function del(){
    delete this.inc;       //becomes undefined
    this.inc=null;          //additionally reset it to null
    console.log(this.inc);
    //console.log("this.inc deleted");
  }
  function readd(){
    //if null or undefined
    if(!this.inc)
    this.inc="re-added";
  }
  //return all methods at once
  return [increase , decrease, set ,reset , del, readd];
}



let f=closure();   //Initialize closure



let inc= f[0];
let dec =f[1];
let set =f[2];
let res =f[3];
let del = f[4];
let add = f[5];

inc();
inc();
inc();
dec();
get();
set(7);
get();
res();
get();

//Delete property

del(0);
get();

//read property inc
add();
get();

res();
inc();
get();


function arity(a,b,c){   //function with 3 parameters

  console.log(`Type your firstname,middlename,lastname: ${a} , ${b} , ${c} .`);

}
arity('S','Vijay','');

let number_of_arguments = arity.length;  // function_name.length property returns the number of parameters in the function

console.log(number_of_arguments);



//currying

let planets = function(m){
  return function(n) {
    return "Favorite planets are " + m + " and " + n;
  };
};

let favoriteplanets = planets("Jupiter");

//Call the curried function with different arguments:

console.log(favoriteplanets("Earth"));
console.log(favoriteplanets("Mars"));
console.log(favoriteplanets("saturn"));

// Call the curried function with two arguments:
console.log(planets("Jupiter")("Mars"));



//Modern currying

let modern = (a) => (b) => "Plants are " + a + " and " + b;
console.log(planets("Venus")("Mars"));































