import './App.css';
import {Header} from "./components/header/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";



function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ADDD" element={<Header/>}/>
            </Routes>

        </>
    );
}

export default App;
