import { useEffect, useState } from "react"

 function Timer(){
     
    const [count,setCount] = useState(0);
    
    useEffect(() => {
        console.log("Screen rendered")
        // checkCount()
        // setCount(1)
        setTimeout(() => {
            setCount((previoesValue) => {return previoesValue+1})
        },1000)

    })//It is optional  //it identify the changing of that value

    // function checkCount(){
    //     if(count>10){
    //         setCount(1)
    //     }
    // }

    function updateCount(){
        setCount((previousCount) => {
            return previousCount+1
        })
    }

    return <>
    <h1>I have rendered count {count} times! </h1>
    <button onClick={updateCount}>Increase count</button></>
 }

 export default Timer;