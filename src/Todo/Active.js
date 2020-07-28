import React from "react";
import Todo from "../Todo"
import Form from "../Form";


const Active = () =>{
    return (
        <div className="todo">
        <Todo/>
        <Form active = {true}/>
        </div>
    )
}
export default Active;