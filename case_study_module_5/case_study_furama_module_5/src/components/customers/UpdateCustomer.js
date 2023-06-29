import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import React, {useEffect, useState} from "react";
import * as customerTypeService from '../service/customer/customerTypeService'
import * as customerService from '../service/customer/customerService'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useNavigate, useParams} from "react-router";
import Swal from "sweetalert2";
import * as yup from 'yup'
import '../css/css-form.css'


export function UpdateCustomer() {
    const [customerType, setCustomerType] = useState([])
    const [customer, setCustomer] = useState()
    const navigate = useNavigate()
    const params = useParams()

    const getType = async () => {
        try {
            const result = await customerTypeService.findAll();
            setCustomerType(result)

            const cus = await customerService.findById(params.id);
            setCustomer(cus)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getType();
    }, [])

    if (!customerType || ! customer) {
        return null
    }


    return (
        <>
            <Header/>
            <div style={{padding: 100}} className="">
                <div className=" text-center mt-5 ">
                    <h1>Create Customer Form</h1>
                </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className=" mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">


                                    <Formik initialValues={{
                                        id: customer.id,
                                        name: customer?.name,
                                        gender: customer?.gender,
                                        birthday: customer?.birthday,
                                        cccd: customer?.cccd,
                                        typeOfCustomer: customer?.typeOfCustomer,
                                        phone: customer?.phone,
                                        email: customer?.email,
                                        address: customer?.address
                                    }}
                                            validationSchema={yup.object({
                                                name: yup.string().required('Need to be filled'),
                                                gender: yup.string().required('Need to be chosen'),
                                                birthday: yup.string().required('Need to be chosen'),
                                                cccd: yup.number().required('Need to be filled'),
                                                typeOfCustomer: yup.number().min(1, 'Need to be chosen'),
                                                phone: yup.string().required('Need to be filled'),
                                                email: yup.string().required('Need to be filled'),
                                            })}
                                            onSubmit={(values) => {
                                                const res = async () => {
                                                    await customerService.update(values);
                                                    await navigate('/customers')
                                                    await Swal.fire({
                                                        title: 'Success',
                                                        text: `Updated a ${values.name} successfully`,
                                                        icon: 'success',
                                                        confirmButtonText: 'OK'
                                                    });


                                                }
                                                res();


                                            }}>


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
                                                            /><ErrorMessage name='name' component='span'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Day of
                                                                Birth <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="date"
                                                                name="birthday"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name='birthday' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Gender <span>*</span></label>
                                                            <Field
                                                                id="form_name"
                                                                as='select'
                                                                name="gender"
                                                                className="form-control"
                                                            >
                                                                <option value="" >Choose your gender</option>
                                                                <option value="0">Female</option>
                                                                <option value="1">Male</option>
                                                                <option value="2">Other</option>
                                                            </Field>
                                                            <ErrorMessage name='gender' component='span'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">
                                                                Identification Number <span>*</span>
                                                            </label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="number"
                                                                name="cccd"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name='cccd' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Phone <span>*</span></label>
                                                            <Field
                                                                id="form_name"
                                                                type="number"
                                                                name="phone"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name='phone' component='span'/>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">Email <span>*</span></label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="text"
                                                                name="email"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name='email' component='span'/>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="form_need">Type of
                                                                Customer <span>*</span></label>
                                                            <Field
                                                                as='select'
                                                                id="form_need"
                                                                name="typeOfCustomer"
                                                                className="form-control"
                                                            >
                                                                <option value={0} >
                                                                    --Select Type of Customer--
                                                                </option>
                                                                {
                                                                    customerType.map((type) => (
                                                                        <option key={type.id} value={parseInt(type.id)}>{type.name}</option>

                                                                    ))
                                                                }

                                                            </Field>
                                                            <ErrorMessage name='typeOfCustomer' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="form_message">Address</label>
                                                            <Field
                                                                type='textarea'
                                                                id="form_message"
                                                                name="address"
                                                                className="form-control"
                                                                rows={4}
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