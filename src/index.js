import React,{useState,useRef, useEffect} from "react"; 
import ReactDOM from "react-dom/client";
import FlamesApp, { Tabletest } from "./App";
// import TableWithSearch from "./App";
// import {Data} from "./data";
// import FlamesApp from "./App"
// import Golf from "./App";
// import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const UseRef = ()=>{
//     const inputRef = useRef(null);

//     const placeholdername = ()=>{
//            console.log(inputRef.current.placeholder);
//     }

//     useEffect(()=>{
//          console.log(inputRef.current.placeholder);
//     },[])
//     return (
//         <>
//           <input placeholder="Enter Name" name="name" ref={inputRef}/>
//           <button onClick={placeholdername}>Check</button>
//         </>
//     )
// }
// root.render(<TableWithSearch/>);
root.render(<FlamesApp/>);


// const colors = ["blue","red","black","orange"];

// const App = ()=>{
//       const [index,setColor] = useState(0);
//      const changeColor = ()=>{
//         let newIndex = index===colors.length-1?0:index+1;
//         setColor(newIndex);
//      }
//        return (
//         <div className="changecolor" style={{backgroundColor:colors[index],border:"5px solid black"}}>
//             <button onClick={changeColor}>Change Color</button>
//         </div>
//        );
// }

// const App = ()=>{
    
//     const [inputvalue,setInput] = useState("");
    
//     const onChangeText = (event)=>{
//         setInput(event.target.value);
//     }
//     return (
//         <>
//         <label htmlFor="name">Enter your name:</label><br></br><br></br>
//         <input id="name" onChange={onChangeText}/>
//         {inputvalue==""?<p></p>:<p>{`Hello ${inputvalue}!`}</p>}
//         </>    
//     );
// }


