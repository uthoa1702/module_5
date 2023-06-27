import logo from './logo.svg';
import './App.css';
import {ToDoList} from "./components/ToDoList";
import React from "react";
import {ToastContainer} from "react-toastify";

function App() {
  return (
<>
<ToDoList/>
<ToastContainer/>
</>
  );
}

export default App;
