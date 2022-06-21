/*  console.log(null + {} +true + [] + [5]);  //return .toString() result  for each 

let a =Boolean(true);
console.log(a);
let b =Boolean([]);
console.log(b);
let c = Boolean({});
console.log(c);
let d= Boolean(false);
console.log(d);
let e = Boolean(NaN);
console.log(e);
let f =Boolean(null);
console.log(f);
let g = Boolean (Infinity);
console.log(g);
let h = Boolean (undefined);
console.log(h);
let i = Boolean ('');
console.log(i);
let j = Boolean (0);
console.log(j);            


//Unary minus , plus type coersion (String to Unary number)
const s ="text";
console.log(s);             //normal
console.log(+s);            //Can't change to number so returns NaN
console.log(-s);             //Can't change to number so returns NaN     

//Sring and number arithematic in + operator
1 + 2;            // + as arithematic
"hello" + "JS" ;     // + as String arithematic
+1 + -12;            // + Unary and arithematic

// opearor +  in string and number
"hello" + 20;   // It converts the  numeric as string and prosuce string o/p


//   assigning a variable to nothing will produce undefined
let bike ;
console.log(bike);

// Assigning a variable to undefined will produce undefined

let motor = undefined;
console.log(motor);

//Assinging a unknown value to null ,we can update the value later in program

let cycle=null;
console.log(cycle);

*/




// assigning null to a variable and create a new object for it later will not affect it.

let plane =null;

class helicopter{

    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
        this.features;
    }
     getFeatures(){

         if (this.features===null){
            
              console.log(this.features);
            
         }
         else 
         {
             this. features=2;
             console.log(this.features);
             
            }
         
     }
}
    
plane = new helicopter("AirIndia","AR005",2022);
plane.getFeatures();


    
    
     

    



