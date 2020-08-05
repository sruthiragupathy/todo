import React,{useState} from "react";
import Todo from "../Todo"
import Form from "../Form";


const Active = () =>{
    const [active,setActive] = useState();
    
    const activeCount = (activefromform) =>{
        setActive(activefromform.active);
    }
    
    return (
        <div className="todo">
        <Todo active={active}/>
        <Form active = "true" activeCount={activeCount}/>
        </div>
    )
}
export default Active;