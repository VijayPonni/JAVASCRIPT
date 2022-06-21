//incrementing and decreament

let miles = [5,12,75,2,5];

//Add up all nubers using a for-loop

let A=0;
for(let i=0;i<5;i++)
{
    A+=miles[i];
   

} console.log(A);

//Add up all numbers using reducer:Array.reduce method

const R = (accumulator , value ) => accumulator + value;
const result = miles.reduce(R);
console.log(result);


/* //Add 10 elements to the page
for(let i=0;i<10;i++){
    //creating a new html element
    let element = document.createElement("div");

    //insert inner html into the element 
    element.innerHTML = "element"+i;
    console.log(element);
   


    //add the created element to the document
    //document.appendChild(element);


}

*/

// Ex;1 for loop

for(let j=0;j<5;j++){
    console.log("hi");
}
//Multiple satements

for (let i=0;i<4;i++){
    let sum=i+1;    
   console.log(sum);
}

let counter=0;

function inc(){
    counter++;
}

for (let i=0;i<10;i++,inc());  //body-less  for loop
                               //We called the function 10 times using for-loop

console.log(counter);

for(var i=0;i<5;i++){ let x=i; console.log(x);}


//for(var i=0;i<5;i++) let x=i;

//Nested for-loop

for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
    
        console.log(i,j);
    }

}

for(let i=0;i<1;i++){
    let loop = "loop.";
    console.log(loop);
}

//Without continue keyword
for(let i=0;i<4;i++){
    console.log(i);
 }

//continue keyword

for(let i=0;i<4;i++){
    if(i==1)
    continue;
    console.log(i);

}
console.log("Here after..");

for(let i=0;;i++){
    
    console.log(i);
    break;
    
}

//loop without conditional statemnt


for (let i=0; ;i++)    //Here we don't have conditional statement
{
console.log("hi i am conditional loop..." + i );
if(i>5)                //We set condtion inside the body of for..loop using break statement.
break;
}


let c=0;
mark : for( let i=0;i<5;i++){
    inner : for (let j=0;j<5;j++){
        c++;
        if(i==2)
        break inner;
    }
}
console.log(c);

//labled block statements

vijay :{
    console.log("Hi i am before breaking block");
    break vijay;                               
    console.log("Hi i am after breaking block");  // Execution flow will not reach this statement.
}

console.log("....consider here after.......");

//generators function show():

function* show(){    //generator function declaration using *
    
    yield '1';  
    yield 'hi'     //yield is the special keyword in generator function to display something.
 
}
let d = show();      //rename the function with new name

console.log(d.next().value);     
console.log(d.next().value);                               //This is the one way generator function call() using 
                                       //function_name.next().value

 //for(let value of show())
 //console.log(value); 


function * dis(){
    yield 1;
    yield 'hi';
}
let gen = dis();
console.log(gen.next().value);   //This will only display 1
console.log(gen.next().value);   //This will display 'hi'








function * dis(){
    yield 1;
    yield 'hi';
}

for (let gun of dis()){
    console.log(gun);
}

let string=" hi i am 12!";
 for(let char of string){
     console.log(char);
 }


let array=[1,46,45,27];
for(let a of array){
    console.log(a);
}



console.log("----consider ----");
let enumerable = {
    property : 1,
    method : () => {
        console.log("Hi ");
    }
};

for (let key of Object.keys(enumerable))
console.log(key);

for(let value of Object.values(enumerable))
console.log(value);

for(let entry of Object.entries(enumerable))
console.log(entry);

let book={
    name:"Aadu",
    Language:"Tamil",
    read : () =>{
        console.log("I have read it");
    }
}
for(let b in book){
    console.log(b,book[b]);
}


//while loop 

let count=0;

while(count++ < 1000){
    if(count>2)   //Inner condition
    continue;        //It omits the current iteration
    console.log(count);

















































