import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import {OrderList} from "./components/OrderList";
import {CreateOrder} from "./components/CreateOrder";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<OrderList/>}/>
                <Route path='/create' element={<CreateOrder/>}/>
            </Routes>

        </>
    );
}

export default App;
