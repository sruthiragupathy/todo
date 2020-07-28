import React, { Fragment } from "react";
import "./todo.css";
import {Link,withRouter } from "react-router-dom";


const currentTab = (history,path)=>{
    
    if(history.location.pathname===path){
        return {color:"darkblue"}
    }

}


const Todo = ({history}) =>{
    return(
        <Fragment>
        <h2>#todo</h2>
        <div className = "menu">
            <Link style={currentTab(history,"/")} to = "/" className="menu-item">All</Link>
            <Link style={currentTab(history,"/todo/active")} to = "/todo/active" className="menu-item">Active</Link>
            <Link style={currentTab(history,"/todo/completed")} to = "/todo/completed" className="menu-item">Completed</Link>
            
        </div>
        </Fragment>

    )
}

export default withRouter(Todo);