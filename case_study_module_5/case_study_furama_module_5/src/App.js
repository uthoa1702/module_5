import './App.css';
import {Header} from "./components/header/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "./components/home/Home";
import {AddService} from "./components/service/AddService";
import {UpdateService} from "./components/service/UpdateService";
import {CustomerList} from "./components/customers/CustomerList";
import {CreateCustomer} from "./components/customers/CreateCustomer";
import {UpdateCustomer} from "./components/customers/UpdateCustomer";




function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/services" element={<Home/>}/>
                <Route path="/addService" element={<AddService/>}/>

                <Route path="/updateService" element={<UpdateService/>}/>

                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/createCustomer" element={<CreateCustomer/>}/>

                <Route path="/updateCustomer" element={<UpdateCustomer/>}/>
            </Routes>

        </>
    );
}

export default App;
