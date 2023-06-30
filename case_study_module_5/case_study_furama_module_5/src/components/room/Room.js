import '../css/css-card.css'
import '../css/css-pagination.css'
import React, {useEffect, useState} from "react";
import {Footer} from "../footer/Footer";
import {SlideHome} from "../header/SlideHome";
import {Link} from "react-router-dom";
import {Header} from "../header/Header";
import * as roomService from "../service/RoomService"
import * as Swal from "sweetalert2";

export function Room() {
    const [rooms, setRoom] = useState()


    const showList = async () => {
        const room = await roomService.findAll()
        setRoom(room)
    }

    // showing list
    useEffect(() => {

        showList()
    }, [])

    if (!rooms) {
        return null
    }


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
                await roomService.deleteById(id)
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
                    <h1 className="fw-light">Our Rooms</h1>
                    <div>
                        <Link to='/addRoom' className="btn btn-dark px-3">Create A New Room</Link>
                    </div>


                    {
                       rooms &&  rooms.map((room) => (


                            <div key={room.id}
                                 style={{width: 330, margin: 10, display: "inline-block"}}
                                 className="card"
                            >
                                <div style={{textAlign: "left"}} className="inner-card">
                                    {" "}
                                    <img
                                        src={room.image}
                                        className="img-fluid rounded"
                                    />
                                    <div className="d-flex justify-content-between align-items-center mt-3 px-2">
                                        <h4>{room.name} </h4>{" "}
                                        <span className="heart">
            <i className="fa fa-heart"/>
          </span>
                                    </div>
                                    <div className="mt-2 px-2">
                                        {" "}
                                        <small>
                                            {room.includedService}
                                        </small>{" "}
                                    </div>
                                    <div className="px-2">
                                        <h3> $ {room.price}</h3>
                                    </div>
                                    <div className="px-2 mt-3">
                                        {" "}
                                        <Link to={`/updateRoom/${room.id}`}
                                              className="btn btn-dark px-3">Edit</Link>{" "}
                                        <button className="btn btn-outline-dark px-3" onClick={() => {
                                            deleteConfirmation(room.id, room.name)
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