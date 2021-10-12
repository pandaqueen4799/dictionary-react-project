import React from "react";

export default function Synonyms(props) {
    console.log(props.synonyms);
    if (props.synonyms) {
    return (
         <div className="synonyms">
         <ul>
        {props.synonyms.map(function(synonyms, index)
        {
            return (
                <li key={index} >
                {synonyms}
                </li>
            );
        })}
        </ul>
        </div>
        );
     } else {
        return null;
    } 
}