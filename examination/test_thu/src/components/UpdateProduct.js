import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as typeService from '../components/service/ProductTypeService'
import * as productService from '../components/service/ProductService'
import {useNavigate} from "react-router-dom";
import * as Swal from "sweetalert2";
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useParams} from "react-router-dom";


export const UpdateProduct = () => {
    const [type, setType] = useState([])
    const [product, setProduct] = useState()
    const params = useParams()
    const navigate = useNavigate()

    const findById = async () => {
        try{
            const res = await productService.findById(params.id)
            await setProduct(res)

        }catch (e) {
            console.log(e)
        }
    }
    const showType = async () => {
        try {
            const res = await typeService.findAll()
            setType(res)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        showType()
        findById()
    }, [])

if (!product) {
    return null
}
    return (
        <>
            <h1>Update product</h1>

            <Formik
                initialValues={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    type: product.type
                }}
                validationSchema={yup.object({
                    name: yup.string().required('Need to be filled'),
                    price: yup.number().required('Need to be filled').min(0),
                    type: yup.number().required('Need to be filled'),

                })}
                onSubmit={(values) => {
                    const res = async () => {

                        console.log(values)
                        await productService.update(values)
                        await navigate('/')
                        await Swal.fire({
                            title: 'Success',
                            icon: "success",
                            text: 'Updated Successfully'
                        })

                    }
                    res()
                }}>

                <Form>
                    <label>Name</label>
                    <Field type='text' name='name'/>
                    <ErrorMessage name='name' component='span'/>
                    <br/>

                    <label>Price</label>
                    <Field type='number' name='price'/>
                    <ErrorMessage name='price' component='span'/>
                    <br/>


                    <Field as='select' name='type'>
                        <option value="">--Select type--</option>
                        {
                            type && type.map((ty) => (
                                <option value={ty.id} key={ty.id}>{ty.name}</option>
                            ))
                        }
                    </Field>
                    <ErrorMessage name='type' component='span'/>
                    <br/>


                    <button className='btn btn-success' type="submit">Submit</button>

                </Form>

            </Formik>
        </>
    )
}

