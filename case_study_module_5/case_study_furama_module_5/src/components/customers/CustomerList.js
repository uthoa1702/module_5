import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import React from "react";


export function CustomerList() {
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
                <button className="btn btn-success">Create</button>
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
                        {/*            <th>Day of Birth</th>*/}
                        {/*            <th>Identification Number</th>*/}
                        <th>Phone</th>
                        {/*            <th>Email</th>*/}
                        <th>Type of Customer</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Samso Nigore</td>
                        <td>Male</td>
                        <td>0708098364</td>
                        <td>Diamond</td>
                        <td>
                            <button className="btn btn-warning">Edit</button>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
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