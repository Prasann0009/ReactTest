import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const colors = ["blue","red","black","orange"];

const App = ()=>{
      const [index,setColor] = useState(0);
     const changeColor = ()=>{
        let newIndex = index===colors.length-1?0:index+1;
        setColor(newIndex);
     }
       return (
        <div className="changecolor" style={{backgroundColor:colors[index],border:"5px solid black"}}>
            <button onClick={changeColor}>Change Color</button>
        </div>
       );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
