import React from "react";
import Todo from "../Todo"
import Form from "../Form";
import "../todo.css"


const All = () =>{
    return (
        <div className="todo">
            <Todo/>
            <Form all = "true"/>
        
        </div>
    )
}
export default All;