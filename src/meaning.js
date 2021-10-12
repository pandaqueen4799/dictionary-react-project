import React from "react";
import Synonyms from "./synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function(definitions, index){
          return (
            <div key={index}>
              <p>
                <strong>Definition:</strong> {definitions.definition}
                <br />
                <strong> Example:</strong>
                <em> {definitions.example} </em>
                <br />
                <Synonyms synonyms={definitions.synonyms} />
              </p>
            </div>
          );
      })}
    </div>
  );
}
