// website => mdn web doc

/*var a=(b,c)=>{
    return b+c;
}

let oore = (a) => {
    return a%2 == 0 ? "even" : "odd"
 }
 
 const sum=a=>a+2             // we can use this function with no round brackets
 console.log(sum(2))

 var arr=[1,2,3,4];

for(let i=5;i<=10;i++){
    arr.push(i);
}

console.log(arr.splice(4,10));

var slarr=arr.splice(0,4);
console.log(slarr); 

var arr=[1,2,3,4,5];
for(var element of arr){
    console.log(element);
}*/

//spread operation

/*var obj={                                                                            
    name:"Raja",
    age:26,
    marks:90
}   
var obj2={...obj};  //copy of that obj
var{name:n,age}=obj  //n is own name and age is key
console.log(n)
console.log(age)


var arr1=[1,2,3,0,undefined,4,5,null,0,false]
var result=arr1.filter((el) =>{
    return !!(el);                   //It will filter the true value
})

var arr=[1,3,5,3,5,2,10]
console.log(arr.sort().reverse())             // It will sort based on the 1st letter
console.log(arr.sort((a,b) => {return a-b}))  // this is the algo for ascending order for int data type
console.log(arr.sort((a,b) => {return b-a}))  // It is for descending */

/*var str="hello world"
const countwords=(str)=>{
    return str.split(" ").length
}
const capitalizeFirstLtter=(str1)=>{
    const strsplit=str1.split(" ")
    const capitalizeWord=strsplit.map((word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1)
    });

    return capitalizeWord.join(" ");
}
console.log(capitalizeFirstLtter(str))
const reverseWords=(str1)=>{
    return str.split(' ').reverse().join(" ")
}*/

/*const students=[{
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
const studentsFilter=students.filter((student)=>{   //filter an object  find will return only one element
    return student.grade>9
})
console.log(studentsFilter.sort((a,b)=>{
   return a.grade-b.grade 
}))
const gradestudents=students.filter((student)=>{
    return student.grade==9
})
console.log(gradestudents.name)
const result=students.filter((student)=> {                //It will take filter the object
    return student.grade>9
})
const names=result.map((el)=>{                            //It will take only the name sin the object
    return el.name
})
console.log(names.join(", "))                             //It is used to join the arrays to string 
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
});
/*console.log("start")
myPromise.then((result)=>{                           //then == resolve
    console.log(result);
}).catch((error)=>{                                  //catch == error
    console.log(error);
})
console.log("end")*/
//-------------------------------------------------------
/* console.log("start")
myPromise().then((result)=>{                           //myPromise return 
    console.log(result)
    return Promise.resolve(1)                          //return will flow to down without return we want give in the side
}).then((res)=>{
    console.log("then 2 =>",res)
    return Promise.reject("hello")
}).catch((error)=>{                                 
    console.log(error);
})
const fn=async()=>{
    console.log("Start")                               //wait until myPromises executed
    try{
        const res=await myPromise()
        console.log(res);
    }catch(err){
        console.log(err);
    }
}
console.log("end") */
//---------------------------------------------------------

