import logo from './logo.svg';
import './App.css';
import {ProductList} from "./components/ProductList";
import React from "react";
import {Routes, Route} from 'react-router-dom'
import {CreateProduct} from "./components/CreateProduct";
import {EditProduct} from "./components/EditProduct";

function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/create' element={<CreateProduct/>}/>
            <Route path='/edit/:id' element={<EditProduct/>}/>
        </Routes>

    </>
  );
}

export default App;
