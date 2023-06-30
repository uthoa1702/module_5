import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as villaService from '../service/VillaService.js'
import {useNavigate} from "react-router-dom";
import * as yup from 'yup'
import '../css/css-form.css'
import * as Swal from "sweetalert2";


export function AddVilla() {
    const navigate = useNavigate();


    return (
        <>
            <Header/>


            <div style={{padding: 100}} className="">
                <div className=" text-center mt-5 ">
                    <h1>Create Villa Form</h1>
                </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className=" mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">


                                    <Formik initialValues={{
                                        name: '',
                                        area: '',
                                        price: '',
                                        max: '',
                                        typeOfRent: '',
                                        standard: '',
                                        otherService: '',
                                        floor: '',
                                        image: '',
                                        poolArea: '',
                                        type: "Villa"
                                    }}
                                            validationSchema={yup.object({
                                                name: yup.string().required('Need to be filled'),
                                                area: yup.number().required('Need to be filled').min(0),
                                                floor: yup.number().required('Need to be filled').min(1),
                                                price: yup.number().required('Need to be filled').min(0),
                                                max: yup.number().required('Need to be filled').min(0),
                                                typeOfRent: yup.string().required("Need to be chosen")

                                            })}
                                            onSubmit={((values) => {
                                                const res = async () => {
                                                    await villaService.save(values)
                                                    await navigate('/villas')

                                                    // await toast.success(`Created ${result.name} successfully!`)
                                                    await Swal.fire({
                                                        title: 'Success',
                                                        text: 'Created a new House successfully',
                                                        icon: 'success',
                                                        confirmButtonText: 'OK'
                                                    });

                                                }
                                                res()
                                            })}>
                                        <Form id="contact-form" role="form">
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Name <span>*</span></label>
                                                            <Field
                                                                id="form_name"
                                                                type="text"
                                                                name="name"
                                                                className="form-control"
                                                                data-error="Firstname is required."
                                                            />
                                                            <ErrorMessage name='name' component='span'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Area <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="text"
                                                                name="area"
                                                                className="form-control"
                                                                data-error="Lastname is required."
                                                            />
                                                            <ErrorMessage name='area' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Floor <span>*</span></label>
                                                            <Field
                                                                id="form_name"
                                                                type="text"
                                                                name="floor"
                                                                className="form-control"
                                                                data-error="Firstname is required."
                                                            />
                                                            <ErrorMessage name='floor' component='span'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Standard <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="text"
                                                                name="standard"
                                                                className="form-control"
                                                                data-error="Lastname is required."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Price <span>*</span></label>
                                                            <Field
                                                                id="form_name"
                                                                type="number"
                                                                name="price"
                                                                className="form-control"
                                                                data-error="Firstname is required."
                                                            />
                                                            <ErrorMessage name='price' component='span'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Number of People <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="text"
                                                                name="max"
                                                                className="form-control"
                                                                data-error="Lastname is required."
                                                            />
                                                            <ErrorMessage name='max' component='span'/>
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
                                                            <label htmlFor="form_need">Type of Rent <span>*</span></label>
                                                            <Field as='select'
                                                                   id="form_need"
                                                                   name="typeOfRent"
                                                                   className="form-control"
                                                                   data-error="Please specify your need."
                                                            >
                                                                <option value="" selected="" disabled="">
                                                                    --Select Type of Rent--
                                                                </option>
                                                                <option value="year">Year</option>
                                                                <option value="month">Month</option>
                                                                <option value="day">Day</option>
                                                                <option value="hour">Hours</option>
                                                            </Field>
                                                            <ErrorMessage name='typeOfRent' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Image <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="text"
                                                                name="image"
                                                                className="form-control"
                                                                data-error="Lastname is required."
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='row'>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Pool Area <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="number"
                                                                name="poolArea"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="form_message">Other Service </label>
                                                            <Field
                                                                as='textarea'
                                                                id="form_message"
                                                                name="otherService"
                                                                className="form-control"
                                                                rows={4}
                                                                data-error="Please, leave us a message."
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-success btn-send  pt-2 btn-block
                      "
                                                        >Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </Formik>


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