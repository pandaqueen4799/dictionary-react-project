import React from "react";
import "./synonyms.css"

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {/*<strong> Synonyms:</strong>*/}
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
