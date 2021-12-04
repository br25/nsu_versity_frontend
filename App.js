import React from "react";
import "./app.less";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/login";
import Registration from "./auth/registration";
import Main from "./main";
import Test from "./test";


function App() {
  return (
    <BrowserRouter>
     
        <Test />
      
    </BrowserRouter>
  );
}

export default App;
