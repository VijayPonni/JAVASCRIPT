
/*

const a;   //shows error

const b =10;
b=12;
console.log(b);


const c=[];
c[0]=276;
c[1]=356;
c[2]=456;
console.log(c);
 c = [];         //  reassigning is not allowed

 */

 const obj ={
     property : 1 ,
     display : function (){
         console.log("hi")
     }
   
 }                              //Normal object with const keyword

 console.log(obj);              //prints available object

 obj.display();                   //Prints display function

 obj.property=3;           
 console.log(obj);    //We can update the property      

obj.display =  () => {
    console.log("hello");       //We can update the function
}
obj.display();

obj={                          //But we can't reassign ,It will show error
    property :35,
    show : function(){

    }
}









