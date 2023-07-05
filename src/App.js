import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"

import {Routes,Route} from "react-router-dom"

import Header from "./Pages/Header";
import SignUp from "./Pages/SignUp";
import ShowTable from "./Pages/ShowTable";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";

const App = () => {
    return(
        // <Header></Header>

        <Routes>
            <Route path="" element={<Header/>} />
            <Route path="/login" element={<Header/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/show" element={<ShowTable/>} />
            <Route path="/dash" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    );
}

export default App;