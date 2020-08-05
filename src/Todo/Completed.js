import React,{useState} from "react";
import Todo from "../Todo"
import Form from "../Form";

const Completed = () =>{
    const [complete,setComplete] = useState();
    
    const completeCount = (completefromform) =>{
        setComplete(completefromform.completed);
    }
  
    return (
        <div className="todo">
        <Todo complete = {complete}/>
        <Form completed = "true" completeCount={completeCount}/>
        </div>
    )
}
export default Completed;