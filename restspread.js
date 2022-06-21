//let f=(...items) => items.map(item => console.log(item));
//f(1,2,3,4,5);
//console.log("hi");
/* function sum(a,b,...rest){
    return a+b;
    //console.log(rest);
    
}
//sum(1,3,7,8);
console.log(sum(1,3,6,7));


function sum(a,b){
    return a+b;
}
console.log(sum(1,6,));  


function sum(...args,a,b){
    console.log(args);
}
sum(1,3,5,6);


function sum(...args){
    console.log(args);
}
sum([1,3,5]);

function sum(...args){
    console.log(args);
}
sum(...[1,3,5]);

function print(a,...args){
    console.log(a);
    console.log(args);
}
print(...[1,2,3],4,5);
*/

function print2(a,b,c, ...args){     //...rest utilize the  remainig
   console.log(a);
   console.log(b);
   console.log(c);
    console.log(args);
}
print2(1,2,...[24,56],3,5,6);    //...spread attaching in middle to list 


console.log("----consider her after-----");

function sum(...arguments){
    let sum=0;
    for(let arg of arguments)
    sum += arg;
    return sum;
}
console.log(sum(1,2,5,49));



//Using reduce method

function sum(...args){
    return args.reduce((x,v) => x+v,0)
}
console.log(sum(1,3,5,7));

//Using Arrow functions
let add=(...a) => a.reduce((x,v) => x+v , 0);
console.log(add(100,200,376));


//flatering of array

let array1 = ["i","o","u"];         //array

const array2 = ["a","e",...array1];   //adding elements using spread 

console.log(array2);


//array declarations 

//Normal

let good = [1,3,4];  
console.log(good);

good[2]=26;
console.log(good);   //We can acces each elements within array

//Another method

 [a,c,d]=[10,35,67];
console.log(a,c,d);

c=44;                  //We can access elements seprately
console.log(c);    

[arr]=[2];
console.log(window.arr);

let [brr]=[4];
console.log(window.brr);




[a,b,...rest] = [1,4,56,83,67,89,23];
console.log(a,b);
console.log(a);
console.log(rest);

let colors ={
    red:1,
    blue:2,
    green:3,
    mildcolors:{
        orange:5,
        brown:2,
        yellow:6

    }

};

let {blue} = colors;  //Destructuring

console.log(blue);

let {red,green} = colors;  //Extracting multiple values
console.log(red+green);    //Adding extracted values



let { orange} = colors;  //We cannot access inner object elements directlt
console.log(orange);     //it returns undefined as orange is inner object property


let {yellow ,brown} = colors.mildcolors;         //We can access inner object element using this method
console.log(yellow);
console.log(brown);


let {pink} = colors;    //We cannot access unavailable property in object
console.log(pink);      //It returns undefined as pink is not available in object property


let { blue :darkblue} =colors;    //We can rename the property while destructure it
console.log(darkblue);            //here blue is renames as darkblue and called using new name

//Merging objects with ...spread

let husband = {
    name:"Ashok",
    hage:27,
    hwork : () => {
        console.log("He is a  lawyer");
    }
};                                          //obj 1

let wife= {
    name:"Nithya",
    wage:28,
    wwork : () => {
        console.log("she is a hotelmanager");
    }
};                                               // obj 2
let family = {
    ...husband,
    ...wife
    };                                         // merged obj 3  using ...spread

console.log(family);


let p={
   name:"ajith",
   details:{
       blood_group: "O +ve",
   }
};
let q={
    age:4,

};

let r={
    ...p,
    ...q

};
console.log(r);


let boys=["ashwin",20,"vishva",15];
let girls=["Nirmala",56,"Oviya",28];
let team = [...boys,...girls];

console.log(team);


















































