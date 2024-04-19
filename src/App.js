import React, { useState } from "react";

const FlamesApp = () => {
  const [name1,setName1] = useState('');
  const [name2,setName2] = useState('');
  const [relationship,setRelationship] = useState('');

  const calculateRelationship = ()=>{
    const uniqueName1 = removeCommonLetters(name1,name2);
    const uniqueName2 = removeCommonLetters(name2,name1);

    const sumOfLengths = (uniqueName1.length +uniqueName2.length) % 6;

    switch(sumOfLengths)
    {
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      default:
        setRelationship("Siblings");
        break;
    }
  }
 const clearForm = ()=>{
     setName1('');
     setName2('');
     setRelationship('');
 }

 const removeCommonLetters = (str1, str2) => {
  const count1 = {};
  for (const char of str2) {
    count1[char] = (count1[char] || 0) + 1;
  }

  let result = '';
  for (const char of str1) {
    if (!count1[char]) {
      result += char;
    } else {
      count1[char]--;
    }
  }
  return result;
};

  return (
    <div id="main">
    
        <input
          type="text"
          value={name1}
          data-testid="input1"
          placeholder="Enter first name"
          onChange={(e)=>setName1(e.target.value)}
        />
        <input
          type="text"
          value={name2}
          data-testid="input2"
          placeholder="Enter second name"
          onChange={(e)=>setName2(e.target.value)}
        />
        <button type="submit" data-testid="calculate_relationship" onClick={calculateRelationship}>
          Calculate Relationship Future
        </button>
        <button type="reset" data-testid="clear" onClick={clearForm}>
          Clear
        </button>
        <h3 data-testid="answer">{relationship}</h3>
    
    </div>
  );
};

export default FlamesApp;

// const TableWithSearch = ({ data }) => {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Function to handle changes in the search input
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Filtering the data based on the search query
//   const filteredData = data.filter(item =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={handleSearchInputChange}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map(item => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TableWithSearch;

// const Golf  = ()=>{
//     const [ballVisible,setBallVisible] = useState(false);
//     const [ballPosition,setBallPosition] = useState(0);

//    useEffect(()=>{
//     const handleKeyDown = (event)=>{
//       if(event.key === 'ArrowRight')
//       {
//         setBallPosition((prev)=>prev+5);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return ()=>{
//       document.removeEventListener('keydown', handleKeyDown);
//     }
//    },[]);

//   const buttonClickHandler = ()=>{
//     setBallVisible(true);
//   }

//   const Render = ()=>{
//     if(ballVisible)
//     {
//       return <div className='ball' style={{left:ballPosition+'px'}}></div>
//     }
//     else
//     {
//       return <button className='start' onClick={buttonClickHandler}>Start</button>
//     }
//   };

//   return (
//       <div className='container'>
//          {<Render />}
//       </div>
//     )
// }

// export default Golf;
// class Golf extends Component
// {
//   constructor(props) {
//     super(props)
//     this.state = {
//         renderBall: false,
//         posi : 0,
//         ballPosition: { left: "0px" }
//     };
//     this.renderChoice = this.renderBallOrButton.bind(this)
//     this.buttonClickHandler = this.buttonClickHandler.bind(this)
// };

// buttonClickHandler() {
//     this.setState({
//         renderBall: true
//       });
// }
// renderBallOrButton() {
// if (this.state.renderBall) {
//     return <div className="ball" style={this.state.ballPosition}></div>
// } else {
//     return <button onClick={this.buttonClickHandler} >Start</button>
// }
// }

// // bind ArrowRight keydown event
// handleKeyDown = (event) => {
//   if (event.key === 'ArrowRight') {
//     this.setState((prevState) => ({
//       ballPosition: {
//         left: parseInt(prevState.ballPosition.left) + 5 + 'px'
//       }
//     }));
//   }
// };

// componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown);
// }

// componentWillUnmount() {
//   document.removeEventListener('keydown', this.handleKeyDown);
// }

// render() {
//     return (
//         <div className="playground">
//             {this.renderBallOrButton()}
//         </div>
//     )
// }
// }

// export default Golf;
// class Golf extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       ballVisible: false,
//       ballPosition: 0
//     };
//   }

//   componentDidMount() {
//     document.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = (event) => {
//     if (event.key === 'ArrowRight') {
//       this.setState((prevState) => ({
//         ballPosition: prevState.ballPosition + 5
//       }));
//     }
//   };

//   buttonClickHandler = () => {
//     this.setState({
//       ballVisible: true
//     });
//   };

//   renderChoice = () => {
//     const { ballVisible, ballPosition } = this.state;
//     if (ballVisible) {
//       return <div className="ball" style={{ left: ballPosition + 'px' }}></div>;
//     } else {
//       return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
//     }
//   };

//   render() {
//     return (
//       <div className="container">
//         {this.renderChoice()}
//       </div>
//     );
//   }
// }

// export default Golf;

// Todo List Code Below

// let id = 0;

// const TodoList = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [EditTaskId,setEditTaskId] = useState(null);

//   const addTask = () => {
//     let found = false;
//     for (let i = 0; i < tasks.length; i++) {
//       if (tasks[i] === inputValue) {
//         alert("Task already added");
//         found = true;
//       }
//     }
//     if (!found) {
//         setTasks([...tasks,{title:inputValue,id: ++id}]);
//         setInputValue('');
//     }

//   };

//   const removeTask = (taskId) => {
//        const remainingTasks = tasks.filter(task => task.id !== taskId);
//        setTasks(remainingTasks);
//   }

//   const EditTask = (taskId) => {
//         const {title} = tasks.find(task=>task.id===taskId);
//         setInputValue(title);
//         setEditTaskId(taskId);
//   }

//   return (
//     <>
//       <div className="todo_input">
//         <span>To-Do List</span>
//         <div>
//           <input
//             className="input_text"
//             value={inputValue}
//             placeholder="Enter Task"
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//           <button onClick={addTask}>{EditTaskId ? 'Edit Todo' : 'Add Todo'}</button>
//         </div>
//       </div>
//       <div className="todo_list">
//         <ul>
//         {
//             tasks.map(task=>{
//                 return(<li>
//                     <span>{task.id}.) {task.title}</span>
//                     <div>
//                     <button onClick={()=> EditTask(task.id)}>Edit</button>
//                     <button onClick={()=> removeTask(task.id)}>Delete</button>
//                     </div>

//                   </li>)

//             })
//         }
//         </ul>
//       </div>
//     </>
//   );
// };

// export default TodoList;
