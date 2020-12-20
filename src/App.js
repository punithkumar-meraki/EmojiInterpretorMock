import React,{useState} from "react";
import "./styles.css";
var emojiDictionary ={
  "A":"Apple",
  "B":"Ball",
  "C":"Cat",
  "D":"Dog",
};

var emojisweknow =Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("")

  function inputHandler(event){
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);

  }
function emojiClickHandler(emoji){
  var meaning = emojiDictionary[emoji];
  setMeaning(meaning);

}
  




  return (
    <div className="App">
      <h1>Know More</h1>
      <input onChange={inputHandler} />
      <h2>{meaning}</h2>
      {emojisweknow.map(function(emoji){
        return(
         <span onClick ={()=>emojiClickHandler(emoji)}
         style={{padding:"1rem",fontsize:"1rem",cursor:"pointer"}}
         >{emoji}
         </span>
          

        );
      })}

      
     
      
      
      
      
  
    </div>
  );
}
