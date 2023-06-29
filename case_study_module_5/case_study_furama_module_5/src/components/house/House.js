import '../css/css-card.css'
import '../css/css-pagination.css'
import React, {useEffect, useState} from "react";
import {Footer} from "../footer/Footer";
import {SlideHome} from "../header/SlideHome";
import {Link} from "react-router-dom";
import {Header} from "../header/Header";
import * as houseService from "../service/HouseService"
import * as Swal from "sweetalert2";

export function House() {
    const [houses, setHouse] = useState()


    const showList = async () => {
        const houses = await houseService.findAll()
        setHouse(houses)
    }

    // showing list
    useEffect(() => {

        showList()
    }, [])

    if (!houses) {
        return null
    }


    // delete item
    const deleteHouseConfirmation = (id, name) => {
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
                await houseService.deleteById(id)
                await showList()
                await Swal.fire('Deleted!', `Removed ${name}.`, 'success');


            }
        })

    }


    return (
        <>
            <Header/>
            <SlideHome/>
            <section className="py-5">

                <div style={{textAlign: "center"}} className="container">
                    <h1 className="fw-light">Our Houses</h1>
                    <div>
                        <Link to='/addService' className="btn btn-dark px-3">Add Service</Link>
                    </div>


                    {
                        houses && houses.map((house) => (


                            <div key={house.id}
                                 style={{width: 330, margin: 10, display: "inline-block"}}
                                 className="card"
                            >
                                <div style={{textAlign: "left"}} className="inner-card">
                                    {" "}
                                    <img
                                        src={house.image}
                                        className="img-fluid rounded"
                                    />
                                    <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                                        <h4>{house.name} </h4>{" "}
                                        <span className="heart">
            <i className="fa fa-heart"/>
          </span>
                                    </div>
                                    <div className="mt-2 px-2">
                                        {" "}
                                        <small>
                                            {house.otherService}
                                        </small>{" "}
                                    </div>
                                    <div className="px-2">
                                        <h3> $ {house.price}</h3>
                                    </div>
                                    <div className="px-2 mt-3">
                                        {" "}
                                        <Link to={`/updateHouse/${house.id}`}
                                              className="btn btn-dark px-3">Edit</Link>{" "}
                                        <button className="btn btn-outline-dark px-3" onClick={() => {
                                            deleteHouseConfirmation(house.id, house.name)
                                        }}>Delete
                                        </button>
                                        {" "}
                                    </div>
                                </div>
                            </div>


                        ))
                    }


                    {/*        <p class="lead">The background images for the slider are set directly in the HTML using inline CSS. The images*/}
                    {/*            in this snippet are from <a href="https://unsplash.com">Unsplash</a>!</p>*/}
                    {/*        pagination */}
                    <div className="page-content page-container" id="page-content">
                        <div className="padding">
                            <div className="row container d-flex justify-content-center">
                                <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                                    <div className="card">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )

}