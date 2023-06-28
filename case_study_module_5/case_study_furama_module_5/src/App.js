import './App.css';
import {Header} from "./components/header/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {House} from "./components/house/House";
import {AddHouse} from "./components/house/AddHouse";
import {UpdateHouse} from "./components/house/UpdateHouse";
import {CustomerList} from "./components/customers/CustomerList";
import {CreateCustomer} from "./components/customers/CreateCustomer";
import {UpdateCustomer} from "./components/customers/UpdateCustomer";
import {Room} from "./components/room/Room";
import {Villa} from "./components/villa/Villa";




function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<House/>}/>
                <Route path="/services" element={<House/>}/>
                <Route path="/addService" element={<AddHouse/>}/>

                <Route path="/updateService" element={<UpdateHouse/>}/>

                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/createCustomer" element={<CreateCustomer/>}/>

                <Route path="/updateCustomer" element={<UpdateCustomer/>}/>
                <Route path="/houses" element={<House/>}/>
                <Route path="/rooms" element={<Room/>}/>
                <Route path="/villas" element={<Villa/>}/>
            </Routes>

        </>
    );
}

export default App;
