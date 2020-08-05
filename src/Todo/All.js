import React,{useState} from "react";
import Todo from "../Todo"
import Form from "../Form";
import "../todo.css"


const All = () =>{
    const [all,setAll] = useState();
   
    const allCount = (countFromForm)=>{
        setAll(countFromForm.all);
        console.log(all);
       
    }
    return (
        <div className="todo">
            <Todo all={all}/>
            <Form all = "true" allCount = {allCount}/>
        
        </div>
    )
}
export default All;