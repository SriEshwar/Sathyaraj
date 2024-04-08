"use strict";
//typescript converts the code to javascript and it will show some error in ur code it may occure in the future
Object.defineProperty(exports, "__esModule", { value: true });
/*function doSomething(){
    for(var i=0;i<5;i++){            var keybord is used to allow the for loop varaible to access to the entire function
        console.log(i)               let wont do that
    }
    console.log('Finally',i)
}
doSomething();*/
/*--------------------------------*/
/*let numbers:number;                         //it is used to define the datatype of the variable
let strings:string;
let bool:boolean;
let numberArray:number[]=[1,2,3,4,5];
let mixed:any[]=[1,'a',true,0.1];

enum color{Red=1,Yellow = 2,Blue = 3}
let backgroundcolor=color.Blue*/
/*----------------*/
//Type assertion  it is used to convert the variable to constant data type
/*let log= (log) => console.log(log)*/
//to create our own type
//cohesion
/*interface Point{
    x:number,y:number,z:number    // if we need to define function within the interface for that we use class
    draw:()=> void
}
let triangle=(point : Point)=>{
    //
}
let someFunction()=>{

}
triangle({x:1,y:2,z:3,draw:someFunction})
*/
//class
/* let shape=new Point();                //we need to assign a memory for this to access.It will copy all the point and class and stored in the shape variable
shape.x=5;
shape.y=10;
shape.z=11;
shape.draw();*/
var point_1 = require("./point");
var shape = new point_1.Point(1, 3);
shape.drawTriangle();
