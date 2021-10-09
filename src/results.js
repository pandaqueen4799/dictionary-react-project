import React from "react";
import Meaning from "./meaning";

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
    return ( <div className="results">
        <h2>
            {props.results.word}
        </h2>
        {props.results.meanings.map(function (meaning, index) {
          //  return (  meaning.definitions[0].definition );
          return (
            <div key={index}>
                <Meaning meaning={meaning} />
                </div>
          );
        })}
        </div>
        );
    } else {
            return null;
        }
}