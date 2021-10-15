import React from "react";
import "./synonyms.css";

export default function Synonyms(props) {
  console.log(props.synonyms);
  if (props.synonyms) {
    return (
      <div className="synonyms">
        {/*<strong> Synonyms:</strong>*/}
    {/*phonetics: Array(1)
0:
audio: "//ssl.gstatic.com/dictionary/static/sounds/20200429/sunset--_gb_1.mp3"
text: "ˈsʌnsɛt" */}
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
