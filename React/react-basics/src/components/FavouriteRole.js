import { useState } from "react";

function FavouriteRole(){

    // let role = 'Developer';
    const [role,setRole] = useState('Developer')
    
    return <>
    <h1>My favourite Role is {role}</h1>
    <button onClick = {() => { setRole('Tester') }}>change the role </button></>
}

export default FavouriteRole;