import React, {useState} from "react";
import Plus from "../assets/icon-plus.svg"
import Minus from "../assets/icon-minus.svg"
export default function FaqItems(props){

const [isFaq , setIsFaq] = React.useState(false)

function answerShown(){
    setIsFaq(prevAns => !prevAns)
}



    return ( 
        <>
        <div className="faqItems active">
            <div className="question-img">
            <h5 className="questions " onClick={answerShown}>{props.question}</h5>
            <img  src={isFaq? Minus:Plus } alt={isFaq? "Plus icon" : "Minus Icon"} onClick={() => setIsFaq(!isFaq)} />
            </div>
            {isFaq && <p className="answers" >{props.answer}</p>}
        </div>
        </>
    )
}
