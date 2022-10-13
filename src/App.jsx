import {useState } from "react";
import "./App.css";

let id = "";
function App() {
  const [time, setTime] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [disableBtn,setDisableBtn] = useState(false);

  const setInputValueHandler = (value)=>{
    setInputValue(value);
  }
 
  const setTimeHandler = ()=>{
    if(!id){
      if(!isNaN(inputValue) && inputValue.replaceAll(" ","")){
        setTime(inputValue);
        setInputValue("")
      }
      setDisableBtn(true);
      id = setInterval(()=>{
          setTime(prev=>{
            if(prev > 0){
              return prev - 1;
            }else{
              clearInterval(id);
              setDisableBtn(false);
              return 0;
            }
          })
      },1000)
    }
  }
const Stop = () =>{
  clearInterval(id) ;
}
const Continue = () =>{
  // setTime(id);
  alert ("hi")
}
const Reset = () =>{
  setTime(0);
  
  
}
  return (
    <div className="container">
      <div className="space">
        <input className="input"
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValueHandler(e.target.value)
          }}
        />
        <button className="button" onClick={setTimeHandler} disabled = {disableBtn}>Set Time</button>
      </div>
      <div>
        <span className="time">Time : {time}</span>
        <button className="button" onClick={Stop}>Stop</button>
        <button className="button" onClick={Continue}>Continue</button>
  <div className="btn">
        <button className="button" onClick={Reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;