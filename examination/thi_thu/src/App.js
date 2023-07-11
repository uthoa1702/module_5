import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import {OrderList} from "./components/OrderList";
import {CreateOrder} from "./components/CreateOrder";
import {DemoEmail} from "./components/DemoEmail";

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<OrderList/>}/>
                <Route path='/create' element={<CreateOrder/>}/>
                {/*<Route path='/' element={<DemoEmail/>}/>*/}
            </Routes>

        </>
    );
}

export default App;
