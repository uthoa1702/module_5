import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import React from "react";


export function UpdateHouse() {
    return(
        <>
            <Header/>

            <div style={{ padding: 100 }} className="container">
                <div className=" text-center mt-5 ">
                    <h1>Update House Form</h1>
                </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form id="contact-form" role="form">
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_name">Name *</label>
                                                        <input
                                                            id="form_name"
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Firstname is required."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_lastname">Area *</label>
                                                        <input
                                                            id="form_lastname"
                                                            type="text"
                                                            name="surname"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Lastname is required."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_name">Floor *</label>
                                                        <input
                                                            id="form_name"
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Firstname is required."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_lastname">Standard *</label>
                                                        <input
                                                            id="form_lastname"
                                                            type="text"
                                                            name="surname"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Lastname is required."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_name">Price *</label>
                                                        <input
                                                            id="form_name"
                                                            type="text"
                                                            name="name"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Firstname is required."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_lastname">Number of People *</label>
                                                        <input
                                                            id="form_lastname"
                                                            type="text"
                                                            name="surname"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Lastname is required."
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                {/*                                    <div class="col-md-6">*/}
                                                {/*                                        <div hidden class="form-group">*/}
                                                {/*                                            <label for="form_email">Swimming Pool Area *</label>*/}
                                                {/*                                            <input id="form_email" type="email" name="email" class="form-control"  required="required" data-error="Valid email is required.">*/}
                                                {/*                                        </div>*/}
                                                {/*                                    </div>*/}
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_need">Type of Rent *</label>
                                                        <select
                                                            id="form_need"
                                                            name="need"
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Please specify your need."
                                                        >
                                                            <option value="" selected="" disabled="">
                                                                --Select Type of Rent--
                                                            </option>
                                                            <option>Year</option>
                                                            <option>Month</option>
                                                            <option>Day</option>
                                                            <option>Hours</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_message">Other Service </label>
                                                        <textarea
                                                            id="form_message"
                                                            name="message"
                                                            className="form-control"
                                                            rows={4}
                                                            required="required"
                                                            data-error="Please, leave us a message."
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input
                                                        type="submit"
                                                        className="btn btn-success btn-send  pt-2 btn-block
                      "
                                                        defaultValue="Submit"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /.8 */}
                    </div>
                    {/* /.row*/}
                </div>
            </div>



            <Footer/>
        </>
    )

}