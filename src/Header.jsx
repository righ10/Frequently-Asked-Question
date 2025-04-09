import React from "react";
import Star from "../asset/icon-star.svg"

export default function Header(){
    return (<div className="Header">
        <img className="star" src={Star} alt="Star-icon"/>
        <h1>FAQ</h1>

        </div>
    )
}
