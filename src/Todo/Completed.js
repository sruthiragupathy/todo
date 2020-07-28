import React from "react";
import Todo from "../Todo"
import Form from "../Form";

const Completed = () =>{
    return (
        <div className="todo">
        <Todo/>
        <Form completed = {true}/>
        </div>
    )
}
export default Completed;