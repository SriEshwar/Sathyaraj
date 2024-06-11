import React from "react";

function Result({secretNum,term}){

    let result;

    if(term){
    if(secretNum > term){
        result = "Lower"
    }else if(secretNum < term){
        result = "Higher"
    }else if(secretNum == term){
        result = "You identified the correct number"
    }else{
        result = "Enter valid input"
    }
}

    return <h3>You guessed : {result}</h3>
}

export default Result;