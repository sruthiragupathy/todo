import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Active from './Todo/Active';
import All from './Todo/All';
import Completed from './Todo/Completed';



function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path ="/" exact component = {All}></Route>
      <Route path ="/todo/active" exact component = {Active}></Route>
      <Route path ="/todo/completed" exact component = {Completed}></Route>
    </Switch>

    </BrowserRouter>
    
  );
}

export default Routes;
