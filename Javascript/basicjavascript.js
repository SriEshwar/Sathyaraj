// console.log('hello')

// let number=prompt("Type a number")
// console.log(Number(number)+10)

// console.log(Math.ceil(Math.random()*3)+1)

// let string ="hello i am a string "
// let string2="Hello i am string 2"

// let mixedArray=["1",2,0.2,"word",'s'];

// mixedArray.pop()
// console.log(mixedArray)

// let person={
//     name:"Sathya",
//     age:22,
//     location:"pollachi",
//     printName(){
//      console.log(this.name)   
//     }
// }
// let person2=new Object();
// person2.name="raj"
// person2.age=22
// person2.location="pollachi"

// console.log(person)
// console.log(person2)
// person.printName()

// let property="age"
// person[property]=21
// console.log(person)

// console.log(findProduct(1,2)) //Hoisting
// function findProduct(a,b){   //function declaration
//     return a*b
// }
// console.log(findProduct)
// console.log(typeof findProduct)

// let num=10
// let isEven=function(num){  //function expression 
//     return num%2==0
// }
// console.log(isEven(num))

// arrow function
// let volume=(length,breadth,height)=>{
//     return length*breadth*height
// }
// console.log(volume(2,3,4))

// foreach
// let numberArray=[1,2,3,4,5]

// numberArray.forEach(value=>console.log(value))  //we define a function in thet forEach method we can give another function name also
// numberArray.forEach((value,index,array)=>{
//     console.log(`${value} ${index} ${array}`)
// })
// numberArray.forEach(print)
// function print(value){
//     console.log(value)
// }

// function outer(){
//     let name="sathya"
//     function inner(){
//         console.log("Hello i am inner function")
//     }
//     return inner
// }
// let callInner=outer()
// callInner()

// let map=new Map()

// map.set('a',1)
// map.set('b',2)
// console.log(map)

// for(let [key,value] of map){
//     console.log(`${key} ${value}`)
// }
// map.forEach((value,key)=>{
//     console.log(`${key} ${value}`)
// })

// let array=[1,2,3,4,5]
// let multipliedNumber=array.map(convert)
// console.log(multipliedNumber)
// function convert(value){
//     return value*2
// }

// let numberArray2=[10,10,12,29,29]
// let total=numberArray2.reduce((total,currentValue)=>total=total+currentValue)
// console.log(total)

//---------
//synchronous and asynchronous

// console.log('step 1')
// console.log('step 2')
// console.log('step 3')

// setTimeout(()=> console.log('step 11'),2000)