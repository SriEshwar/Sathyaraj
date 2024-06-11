import { useState } from "react"

function List(){

    const [ list, setList ] = useState([])
    const [count,setCount] = useState(1)

    function addItem(){
        const itemName='Item'+count;
        setList((previousState) => { return [...previousState,itemName]})
        setCount((previousState) => { return previousState+1 })
    }

    console.log('current state',list)

    return <>
        <h1>Lists</h1>
        <button onClick={addItem}>Add item</button>
        <ul>{
            list.map((element,index) => <li key={index}>{element}</li>)
            }
        </ul></>
}

export default List;