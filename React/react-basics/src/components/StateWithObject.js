import { useState } from "react";

function Employee() {

    const [employee, setEmployee] = useState({
        name:"sathya",
        age:22,
        language:"javascript",
        role:"Developer",
        tools:"React"
    })

    function updateColor(){  //we need to give this function as a refrence
        setEmployee((previousState)=>{
            return {...previousState,age:23}  //three dots are called spread operator to copy the values
        })
    }

    return <>
    <h1>Employee details</h1>
    <p>name:{employee.name}</p>
    <p>age:{employee.age}</p>
    <p>language:{employee.language}</p>
    <p>role:{employee.role}</p>
    <p>tools:{employee.tools}</p>
    <button onClick={updateColor}>Change age</button>
    </>

}

export default Employee;