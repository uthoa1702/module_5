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
import {AddRoom} from "./components/room/AddRoom";
import {Villa} from "./components/villa/Villa";
import {UpdateVilla} from "./components/villa/UpdateVilla";
import {ToastContainer} from "react-toastify";
import {UpdateRoom} from "./components/room/UpdateRoom";
import {AddVilla} from "./components/villa/AddVilla";
import {ContractList} from "./components/contracts/ContractList";
import {AddContract} from "./components/contracts/AddContract";




function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<House/>}/>
                <Route path="/services" element={<House/>}/>
                <Route path="/addHouse" element={<AddHouse/>}/>
                <Route path="/addRoom" element={<AddRoom/>}/>
                <Route path="/addVilla" element={<AddVilla/>}/>
                <Route path="/addContract" element={<AddContract/>}/>

                <Route path="/updateHouse/:id" element={<UpdateHouse/>}/>
                <Route path="/updateRoom/:id" element={<UpdateRoom/>}/>
                <Route path="/updateVilla/:id" element={<UpdateVilla/>}/>

                <Route path="/customers" element={<CustomerList/>}/>
                <Route path="/createCustomer" element={<CreateCustomer/>}/>

                <Route path="/updateCustomer/:id" element={<UpdateCustomer/>}/>
                <Route path="/houses" element={<House/>}/>
                <Route path="/rooms" element={<Room/>}/>
                <Route path="/villas" element={<Villa/>}/>
                <Route path="/contracts" element={<ContractList/>}/>
            </Routes>

        </>
    );
}

export default App;
