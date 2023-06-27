import './App.css';
import {Library} from "./components/Library";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import {CreateBook} from "./components/CreateBook";
import {ToastContainer} from "react-toastify";
import {UpdateBook} from "./components/UpdateBook";



function App() {
  return (
    <>

        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/addBook' element={<CreateBook/>}/>
            <Route path='/updateBook/:id' element={<UpdateBook/>}/>
        </Routes>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />

    </>
  );
}

export default App;
