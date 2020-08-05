import React, { Fragment } from "react";
import "./todo.css";
import {Link,withRouter } from "react-router-dom";
import { getCount } from "./Count";


const currentTab = (history,path)=>{
    
    if(history.location.pathname===path){
        return {color:"darkblue"}
    }

}

const circle = (history,path) =>{
    if(history.location.pathname===path){
        return{
            height: "25px",
            width: "25px",
            
            border:"1px solid darkblue",
            borderRadius: "50%",
            display: "inline-block",
            textAlign: "center"
              
        }
    }
    else{
        return{
            height: "25px",
            width: "25px",
            
            border:"1px solid silver",
            borderRadius: "50%",
            display: "inline-block",
            textAlign: "center"
              
        }

    }

}

const Todo = ({history,all,active,complete}) =>{
    
    const localArray = JSON.parse(localStorage.getItem('todos'))
    let count = getCount(localArray);
    
    return(
        <Fragment>
        <h2>#todo</h2>
        <div className = "menu">
            <Link style={currentTab(history,"/")} to = "/" className="menu-item">All <span style={circle(history,"/")}>{all?all:count.all}</span></Link>
            <Link style={currentTab(history,"/todo/active")} to = "/todo/active" className="menu-item">Active <span style={circle(history,"/todo/active")}>{active?active:count.active}</span></Link>
            <Link style={currentTab(history,"/todo/completed")} to = "/todo/completed" className="menu-item">Completed <span style={circle(history,"/todo/completed")}>{complete?complete:count.completed}</span></Link>
            
        </div>
        </Fragment>

    )
}

export default withRouter(Todo);