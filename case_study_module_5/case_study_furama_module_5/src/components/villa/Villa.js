import '../css/css-card.css'
import '../css/css-pagination.css'
import React, {useEffect, useState} from "react";
import {Footer} from "../footer/Footer";
import {SlideHome} from "../header/SlideHome";
import {Link} from "react-router-dom";
import {Header} from "../header/Header";
import * as villaService from "../service/VillaService"
import Swal from "sweetalert2";
import * as roomService from "../service/RoomService";

export function Villa() {
    const [villas, setVilla] = useState([])
    const showList = async () => {
        const villas = await villaService.findAll()
        setVilla(villas)
    }
    useEffect(() => {

        showList()
    }, [])

    // delete item
    const deleteConfirmation = (id, name) => {
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
                await villaService.deleteById(id)
                await showList()
                await Swal.fire('Deleted!', `Removed ${name}.`, 'success');


            }
        })

    }
    if (!villas) {
        return null
    }
    return (
        <>
            <Header/>
            <SlideHome/>
            <section className="py-5">

                <div style={{textAlign: "center"}} className="container">
                    <h1 className="fw-light">Our Villas</h1>
                    <div>
                        <Link to='/addVilla' className="btn btn-dark px-3">Create A New Villa</Link>
                    </div>


                    {
                        villas.map((villa) => (


                            <div key={villa.id}
                                 style={{width: 330, margin: 10, display: "inline-block"}}
                                 className="card"
                            >
                                <div style={{textAlign: "left"}} className="inner-card">
                                    {" "}
                                    <img
                                        src={villa.image}
                                        className="img-fluid rounded"
                                    />
                                    <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                                        <h4>{villa.name} </h4>{" "}
                                        <span className="heart">
            <i className="fa fa-heart"/>
          </span>
                                    </div>
                                    <div className="mt-2 px-2">
                                        {" "}
                                        <small>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium
                                        </small>{" "}
                                    </div>
                                    <div className="px-2">
                                        <h3> $ {villa.price}</h3>
                                    </div>
                                    <div className="px-2 mt-3">
                                        {" "}
                                        <Link to={`/UpdateVilla/${villa.id}`}
                                              className="btn btn-dark px-3">Edit</Link>{" "}
                                        <button className="btn btn-outline-dark px-3" onClick={() => {
                                            deleteConfirmation(villa.id, villa.name)
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