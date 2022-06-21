//Bitwise AND

let a=3;         //converted  as 0011

let b=5;           //coverted as 0101

console.log(a & b);       // res 0001  --> 1


//Bitwise OR

let c=10;              // converted as 1010

let d= 8;              // converted as 1000

console.log(c | d)             // res 1010  --> 10

//Bitwise XOR

let e=6;              // converted as 0110

let f= 9;              //converted as 1001

console.log(e ^ f)             // res 1111 -->  15

//Bitwise NOT

let g=5;              // converted as 00000000000000000000000000000101 (5)
                      // Since JavaScript uses 32 bits signed integers


console.log( ~g)      // res 11111111111111111111111111111010 (~5 = -6) 


//Bitwise Leftshift

let h=5;              // converted as 00000000000000000000000000000101 (5)
                      // Since JavaScript uses 32 bits signed integers


console.log( h << 1)  // 00000000000000000000000000000101  (5)
                      // 00000000000000000000000000001010  (1 left shift of 5) --> 10

 
//Bitwise Rightshift 

let i=5;              // converted as 00000000000000000000000000000101 (5)
                      // Since JavaScript uses 32 bits signed integers


console.log( h >> 1)  // 00000000000000000000000000000101  (5)
                      // 00000000000000000000000000000010  (1 right shift of 5) --> 2


// ternary

 let z = (1===1) && (0==1) ? console.log("hi") : console.log("hello");

//delete

let obj={
    initial : "S",
    Name : "Vijay",
    Age:20
}



console.log(obj);     //Before delete
delete obj.Name;
console.log(obj);      //After delete

"use Strict";
let variable =29;
console.log(variable);  //before deleting
delete variable;
console.log(variable);   // After delete

// in

let sorry = {
    name :"vijay"
}
console.log("name" in { name : "vijay"});


let array = [ 1 , 2,  "hi" ];
console.log("length" in array);
console.log(0 in [ 1 , 2,  "hi" ] );
console.log(1 in [ 1 , 2,  "hi" ] );
console.log(2 in [ 1 , 2,  "hi" ] );
console.log(3 in [ 1 , 2,  "hi" ] );

let obj2={
    name: "vijay",
    age:2
}

console.log("length" in obj2);
console.log("length" in {"length" :1});


function obj3(){
    this.name="vijay",
    this.age=20
}

const obj4 = new obj3();

console.log(obj4);

console.log("constructor" in obj3 );
console.log("prototype" in obj3);
