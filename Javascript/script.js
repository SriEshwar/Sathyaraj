// website => mdn web doc

/*var add=(value1,value2)=>{
    return value1+value2;
}

let oddOrEven = (value) => {
    return value%2 == 0 ? "even" : "odd"
 }
 
 const sum=value=>value+2             // we can use this function with no round brackets
 console.log(sum(2))

 var numberArray=[1,2,3,4];

for(let i=5;i<=10;i++){
    numberArray.push(i);
}

console.log(numberArray.splice(4,10));

var numberArraySplice=numberArray.splice(0,4);
console.log(numberArraySplice); 

var numberArray2=[1,2,3,4,5];
for(var element of numberArray2){
    console.log(element);
}*/

//spread operation

/*var object={                                                                            
    name:"Raja",
    age:26,
    marks:90
}   
var object2={...object};  //copy of that obj
var{name:n,age}=obj  //n is own name and age is key
console.log(n)
console.log(age)


var mixedArray=[1,2,3,0,undefined,4,5,null,0,false]
var result=mixedArray.filter((element) =>{
    return !!(element);                   //It will filter the true value
})

var numberArray=[1,3,5,3,5,2,10]
console.log(numberArray.sort().reverse())             // It will sort based on the 1st letter
console.log(numberArray.sort((value1,value2) => {return value1-value2}))  // this is the algo for ascending order for int data type
console.log(numberArray.sort((value1,value2) => {return value2-value1}))  // It is for descending */

/*var message="hello world"
const countwords=(message)=>{
    return message.split(" ").length
}
const capitalizeFirstLtter=(str1)=>{
    const messageSplit=message.split(" ")
    const capitalizeWord=messageSplit.map((message)=>{
        return message.charAt(0).toUpperCase() + message.slice(1)
    });

    return capitalizeWord.join(" ");
}
console.log(capitalizeFirstLtter(message))
const reverseWords=(message)=>{
    return message.split(' ').reverse().join(" ")
}*/

/*const studentsDetail=[{
    name:"tony",
    age:20,
    grade:9.5
}]
students.push({
    name:"Raj",
    age:21,
    grade:9.0
})
students.push({
    name:"sathya",
    age:22,
    grade:9.6
})
const studentsDetailFilterGrade=studentsDetail.filter((student)=>{   //filter an object  find will return only one element
    return student.grade>9
})
console.log(studentsDetailFilterGrade.sort((a,b)=>{
   return a.grade-b.grade 
}))

console.log(gradestudents.name)

const studentNames=studentsDetailFilterGrade.map((element)=>{                            //It will take only the name sin the object
    return element.name
})
console.log(studentNames.join(", "))                             //It is used to join the arrays to string 
const clickFunction=()=> {                                //Button function
    
    document.getElementById('topper').innerHTML=`Topper is : ${result[1].name}`
}*/

//Promise

/*const myPromise=() => new Promise((resolve,reject)=>{     //Promise function  
    setTimeout(()=>{                                // resolve and reject is a syntac
        const condition=true
        if(condition){
            resolve("success!")
        }else{
            reject("Error : something went wrong!")
        }
    },2000)      //simulating a 2 sec delay
});*/
/*console.log("start")
myPromise.then((result)=>{                           //then == resolve
    console.log(result);
}).catch((error)=>{                                  //catch == error
    console.log(error);
})
console.log("end")*/
//-------------------------------------------------------
/*console.log("start")

myPromise().then((result)=>{                           //myPromise return 
    console.log(result)
    return Promise.resolve(1)                          //return will flow to down without return we want give in the side
}).then((resolve)=>{
    console.log("then 2 =>",resolve)
    return Promise.reject("hello")
}).catch((error)=>{                                 
    console.log(error);
})

const fn=async()=>{
    console.log("Start")                               //wait until myPromises executed
    try{
        const wait=await myPromise()
        console.log(resolve);
    }catch(error){
        console.log(error);
    }
}
console.log("end") */
//---------------------------------------------------------

