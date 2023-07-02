import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as contractService from '../service/contract/ContractService'
import * as customerService from '../service/customer/customerService'
import * as facilitiesService from '../service/facilities/FacilitiesService'
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import * as yup from 'yup'
import '../css/css-form.css'

export const AddContract = () => {
    const [customer, setCustomer] = useState([]);
    const [facility, setFacility] = useState([]);
    const [chosenFac, setChosenFacility] = useState();
    const navigate = useNavigate()
    const [total, setTotal] = useState(0)

    const fetchApi = async () => {
        const cus = await customerService.findAll()
        setCustomer(cus)
        const fac = await facilitiesService.findAll()
        setFacility(fac)
        console.log(fac)
    }


    const serviceChosen = async (event) => {
        await setChosenFacility(event.target.value)
        const getTotal = facility.find((fac) => fac.id == event.target.value)
        await console.log(chosenFac)
        await console.log(getTotal.price)
        if (getTotal) {
            setTotal(getTotal.price)
        }

    }
    useEffect(() => {
        fetchApi()
        // serviceChosen(id)
    }, [chosenFac])
// if (total){
//     set
// }

    return (
        <>
            <Header/>


            <div style={{padding: 100}} className="">
                <div className=" text-center mt-5 ">
                    <h1>Create Contract Form</h1>
                </div>
                <div className="row ">
                    <div className="col-lg-7 mx-auto">
                        <div className=" mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="">

                                    <Formik initialValues={{
                                        customer: '',
                                        service: '',
                                        startDate: '',
                                        endDate: '',
                                        deposit: '',
                                        total: ''

                                    }}
                                            validationSchema={yup.object({
                                                customer: yup.number().required('Please Choose'),
                                                service: yup.number().required('Please Choose'),
                                                startDate: yup.string().required('Please Choose'),
                                                endDate: yup.string().required('Please Choose'),
                                                deposit: yup.number().required('Please fill').min(0),
                                            })}
                                            onSubmit={(values) => {
                                                const res = async () => {
                                                    await contractService.save(values)
                                                    await navigate('/contracts')
                                                    await Swal.fire({
                                                        title: 'Success',
                                                        text: 'Created a new contract successfully',
                                                        icon: 'success',
                                                        confirmButtonText: 'OK'
                                                    });
                                                }
                                                res()

                                            }

                                            }>
                                        <Form id="contact-form" role="form">
                                            <div className="controls">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Start Date *</label>
                                                            <Field
                                                                id="form_name"
                                                                type="date"
                                                                name="startDate"
                                                                className="form-control"
                                                                data-error="Firstname is required."
                                                            />
                                                            <ErrorMessage name='startDate' component='span'/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="form_lastname">End Date *</label>
                                                            <Field
                                                                id="form_lastname"
                                                                type="date"
                                                                name="endDate"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name='endDate' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <Field
                                                                as='select'
                                                                id="form_need"
                                                                name="customer"
                                                                className="form-control"
                                                            >
                                                                <option value="">
                                                                    --Select Customer--
                                                                </option>
                                                                {
                                                                    customer && customer.map((cus) => (
                                                                            <option key={cus.id}
                                                                                    value={cus.id}>{cus.name}</option>

                                                                        )
                                                                    )
                                                                }

                                                            </Field>
                                                            <ErrorMessage name='customer' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <Field
                                                                as='select'
                                                                onClick={serviceChosen}
                                                                id="form_need"
                                                                name="service"
                                                                className="form-control"
                                                            >
                                                                <option value="">
                                                                    --Select Service--
                                                                </option>
                                                                {
                                                                    facility && facility.map((fac) => (
                                                                        <option key={fac.id}
                                                                                value={fac.id}>{fac.name}</option>
                                                                    ))
                                                                }

                                                            </Field>
                                                            <ErrorMessage name='service' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label htmlFor="form_name">Deposit *</label>
                                                            <Field
                                                                id="form_name"
                                                                type="number"
                                                                name="deposit"
                                                                className="form-control"
                                                            />
                                                            <ErrorMessage name='deposit' component='span'/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Total</label>
                                                            <h3
                                                            >{facility.find((fac) => fac.id == chosenFac)?.price}</h3>

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