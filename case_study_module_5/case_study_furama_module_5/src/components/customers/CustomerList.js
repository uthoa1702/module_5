import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as customerService from '../service/customer/customerService'
import * as customerTypeService from '../service/customer/customerTypeService'
import Swal from "sweetalert2";
import * as houseService from "../service/HouseService";


export function CustomerList() {
    const [customers, setCustomer] = useState([]);
    const [customerType, setCustomerType] = useState([]);
    const fetchData = async () => {
        try {
            const customerData = await customerService.findAll();
            setCustomer(customerData);

            const customerTypeData = await customerTypeService.findAll();
            setCustomerType(customerTypeData);

            console.log(customerData)
            console.log(customerTypeData)
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {


        fetchData();
    }, []);



    // xoa customer
    const deleteCustomerConfirmation = (id, name) => {
        Swal.fire({
            title: 'Confirmation',
            text: `Are you sure to remove ${name} ?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            cancelButtonColor: '#6d6d6d',
            confirmButtonColor: '#ff0000',

            cancelButtonText: 'Cancel',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await customerService.deleteById(id)
                await fetchData()
                await Swal.fire('Deleted!', `Removed ${name}.`, 'success');


            }
        })

    }

    if (!customers) {
        return (<h1>sad</h1>)
    }

    return (
        <>
            <Header/>
            <div style={{paddingTop: 15}} className="container">
                <div
                    className="row header"
                    style={{textAlign: "center", color: "black", marginTop: 150}}
                >
                    <h1>CUSTOMER LIST</h1>
                </div>
                <Link to='/createCustomer' className="btn btn-success">Create</Link>
                <table
                    id="example"
                    className="table table-hover table-striped table-bordered"
                    style={{width: "100%", marginBottom: 100}}
                >
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Day of Birth</th>
                        <th>Identification Number</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Type of Customer</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        customers.map((cus) => (
                                <tr key={cus.id}>
                                    <td>{cus.id}</td>
                                    <td>{cus.name}</td>
                                    <td>{cus.gender === 1 ? 'Male' : cus.gender === 0 ? 'Female' : 'Other'}</td>
                                    <td>{cus.birthday}</td>
                                    <td>{cus.cccd}</td>
                                    <td>{cus.email}</td>
                                    <td>{cus.phone}</td>
                                    <td>{customerType.find((type) => type.id == cus.typeOfCustomer)?.name}</td>
                                    {/*<td>{ async () => {*/}
                                    {/*    const result = await customerTypeService.findById(cus.typeOfCustomer)*/}
                                    {/*    return result.name*/}
                                    {/*} }</td>*/}
                                    <td>
                                        <Link className="btn btn-warning" to={`/updateCustomer/${cus.id}`}>Edit</Link>
                                        <button onClick={()=>{deleteCustomerConfirmation(cus.id,cus.name)}} className="btn btn-danger">Delete</button>
                                    </td>
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