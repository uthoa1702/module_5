import {Header} from "../header/Header";
import React, {useEffect, useState} from "react";
import {Footer} from "../footer/Footer";
import * as customerService from '../service/customer/customerService'
import * as facilitiesService from '../service/facilities/FacilitiesService'
import * as contractService from '../service/contract/ContractService'
import {Link} from "react-router-dom";

export const ContractList = () => {
    const [contract, setContract] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [facilities, setFacilities] = useState([]);

    const getCustomerList = async () => {
        try {
            const res = await customerService.findAll();
            setCustomer(res)
        }catch (e) {
            console.log(e)
        }
    }
    const getContractList = async () => {
        try {
            const res = await contractService.findAll();
            setContract(res)
        }catch (e) {
            console.log(e)
        }
    }

    const getFacilitiesList = async () => {
        try {
            const res = await facilitiesService.findAll();
            setFacilities(res)
        }catch (e) {
            console.log(e)
        }
    }





    useEffect(() => {
        getContractList()
        getCustomerList()
        getFacilitiesList()
    },[])


if (!contract) {
    return null
}





    return (


        <>
            <Header/>
            <div style={{paddingTop: 15}} className="container">
                <div
                    className="row header"
                    style={{textAlign: "center", color: "black", marginTop: 150}}
                >
                    <h1>CONTRACT LIST</h1>
                </div>
                <Link to='/addContract' className="btn btn-success">Create</Link>
                <table
                    id="example"
                    className="table table-hover table-striped table-bordered"
                    style={{width: "100%", marginBottom: 100}}
                >
                    <thead>


                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Service</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Deposit</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        contract.map((contract)=>(
                            <tr key={contract.id}>
                                <td>{contract.id}</td>
                                <td>{customer.find((cus)=>cus.id == contract.customer)?.name}</td>
                                {/*{customerType.find((type) => type.id == cus.typeOfCustomer)?.name}*/}
                                <td>{facilities.find((fac)=>fac.id == contract.service)?.name}</td>
                                <td>{contract.startDate}</td>
                                <td>{contract.endDate}</td>
                                <td>{contract.deposit}</td>
                                <td>{contract.total}</td>
                            </tr>
                            )



                        )
                    }

                    </tbody>
                </table>
                {/*        pagination */}
                <div className="page-content page-container" id="page-content">
                    <div>
                        <div className="row container d-flex justify-content-center">
                            {/*                <div class="col-md-4 col-sm-6 grid-margin stretch-card">*/}
                            <div>
                                <div className="card-body">
                                    {/*                                <h4 class="card-title">Flat Pagination Round</h4>*/}
                                    {/*                                <p class="card-description">Flat pagination round Example</p>*/}
                                    <nav>
                                        <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    <i className="fa fa-angle-left"/>
                                                </a>
                                            </li>
                                            <li className="page-item active">
                                                <a className="page-link" href="#" data-abc="true">
                                                    1
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    2
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    3
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    4
                                                </a>
                                            </li>
                                            <li className="page-item">
                                                <a className="page-link" href="#" data-abc="true">
                                                    <i className="fa fa-angle-right"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/*                    </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>

    )
}