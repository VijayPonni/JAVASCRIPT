let fruit = [
    {name:"Apple",count:23,},
    {name:"Orange",count:20,},
    {name:"PineApple",count:1,},
    {name:"Watermelon",count:10,},
    {name:"Pomogranate",count:50,},
    {name:"Banana",count:50,},

];
console.log("Array before sorting:/n");
console.log(fruit);

console.log("Array after sorting:/n");

fruit.sort(function(a,b){
    if(a.count < b.count)
    return -1;
    if(a.count > b.count)
    return 1;
    return 0;

});
console.log(fruit);



/* let my_sort = (a,b) => a.count - b.count;

let sorted = fruit.sort(my_sort);
console.log(sorted);
*/

//for ..each method

let animals = ['dog','cat','lion','snake'];

let show = (item,index,object) => {
    console.log(item,index,object);
}

animals.forEach(show);



let numbers = [1,4,6];
let add5 = (item,index) => {
    item+=5;
    console.log(item,index);
}
numbers.forEach(add5);

//array.every

let array = [2,4,6,8,10,12];

let res = array.every(odd);

function odd(item) {
    return item%2==0;   //Checking wheather all numbers are even
}

console.log(res);       //True



let birds=['crow','crow','crow','hen'];

let fly = (item) => {
    return item==='crow'           //Check wheather every element in arry is 'crow'
}

let result = birds.every(fly);

console.log(result); //It will return false as the last element is not 'crow'


//array.some

let arr = [1,3,5,7,9,12];

let r = arr.some(even);

function even(item) {
    return item%2==0;   //Checking wheather any of the number is even
}

console.log(r);       //true because 12 is even in the array




let alpha= ['z,','w','r','j','q'];

let f = alpha.some(isVowel);

function isVowel(item){
    return (item== 'a') || (item== 'e') || (item== 'i') || (item== 'o') || (item== 'u')  //Checking whether a single element in array is vowel or not
}
console.log(f);  //It will eturn false as no one in array is not vowel


//array.filter

let num=[0,1,10,12,37,67,32];  //Original array

let oddn=num.filter(fun);

function fun(item){
    return item%2!=0;          //To gather all odd numbers
}

let evenn = num.filter(sun);

function sun(item){
    return item%2==0;           //To gather all even numbers
}

console.log(oddn);            //It prints new  oddnumber array

console.log(evenn);           //It prints new  even number array

console.log(num);              // it prints unchanged original array


//array.map

let elements=[100,200,300,400,500];

let divide = (item) => {  return item/10 };   // Divide 10 for each element

let final = elements.map(divide);            // Using Array.map

console.log(final);                           //Array after map

console.log(elements);                       //Original array


let multiply = (item) => { console.log(  item * 2 ) };   // multiply each value with 2

 elements.forEach(multiply);                             //Using forEach (Original array is changed)


//array.reduce

let integers=[1,4,36,289,354];

let print = integers.reduce( (accumulator,currentValue) => { return accumulator+ currentValue;  } );
// here acc=1 ,curr=4 => acc=5
//      acc=5 ,curr=36 => acc=41
//      acc=41 ,curr=289 => acc=330
//      acc=330 ,curr=354 => acc=684
console.log(print);

//array.flat
let multi=[1,2,3,[4,5,6,[7,8,9,10,1037]]];

console.log(multi.flat());
















