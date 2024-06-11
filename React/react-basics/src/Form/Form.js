import { useState } from "react";

function MyForm(){

    // const [name,setName] = useState("");
    // const [age,setAge] = useState("");
    // const [email,setEmail] = useState("");
    // console.log(name)

    const [input,setInput]=useState({phone : "+91",about:"I am a student"});

    function handleSubmit(event){
        event.preventDefault();  //it will prevent from browser refresh
        console.log('Form submitted!')
        // console.log("Current state",name,age,email)
        console.log(input)
    }

    function handleChange(event){

        const name = event.target.name
        const value = event.target.value

        setInput((previousState) => {
            return {...previousState,[name] : value} //when ever we are adding new property to the object at that time we use square bracket
        })
    }


    return <form onSubmit={handleSubmit}>
        <label>Enter your name : <input type="text" name="name" onChange={handleChange}/> </label> <br/>
        <label>Enter your age : <input type="text" name="age" onChange={handleChange}/> </label> <br/>
        <label>Enter your email : <input type="email" name="email" onChange={handleChange}/> </label> <br/>
        <label>Enter your phone number : <input type="text" name="phone" onChange={handleChange}/> </label> <br/>
        <label>Choose your Country : 
            <select name="country" onChange={handleChange} value={input.country}>
                <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
            </select></label> <br/>
        <label>Enter about you : <textarea name="about" value={input.about} onChange={handleChange}></textarea> </label> <br/>
        <input type="submit" value="Submit Form"/>
    </form>
}

export default MyForm;

//<label>Enter your email : <input type="email" onChange={(emailEvent) => {setInput((previousState) => { return {...previousState,email : emailEvent.target.value}})}}/> </label> <br/>
//<select name="country" onChange={handleChange} value={input.country}>
