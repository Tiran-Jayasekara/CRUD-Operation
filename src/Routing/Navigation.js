import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Form } from 'react-bootstrap';
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Update from "../Pages/Update";
import Delete from "../Pages/Delete";

const Navigation = () =>{
    return(
        <div className="App">
        <Router>
        <Routes>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/Login" element={<Login />}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Update" element={<Update />}/>
            <Route path="/Delete" element={<Delete />}/>
        </Routes>
        <Form />
      </Router>
      
        </div>
    );
}
export default Navigation;