import './App.css';
import React from "react";
import {ContactForm} from "./components/ContactForm";
import {ToastContainer} from "react-toastify";
import {FlappyBird} from "./components/FlappyBird";



const App = () => {
    return (
        <div className="app">
            <h1>Caro Game</h1>
            <FlappyBird />
        </div>
    );
};

export default App;
