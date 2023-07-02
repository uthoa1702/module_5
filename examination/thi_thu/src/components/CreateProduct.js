import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as typeService from '../components/service/ProductTypeService'
import * as productService from '../components/service/ProductService'
import {useNavigate} from "react-router";
import * as Swal from "sweetalert2";
import * as yup from 'yup'



export const CreateProduct = () => {

    const [type, setType] = useState([]);
    const navigate = useNavigate();

    const showType = async () => {
        try {
            const res = await typeService.findAll();
            setType(res)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        showType()
    }, [])


    return (
        <>
            <h1>Create A New Product</h1>
            <Formik initialValues={{
                name: '',
                price: '',
                type: ''
            }}
                    validationSchema={yup.object({
                        name: yup.string().required('Need  to be filled'),
                        price: yup.number().required('Need to be filled').min(0),
                        type: yup.number().required("Need to be chosen")
                    })}
                    onSubmit={(values) => {
                        const res = async () => {
                            await productService.save(values)
                            navigate('/')
                            await Swal.fire(
                                {
                                    title: 'Success',
                                    icon: 'success',
                                    text: `Created a new ${values.name}`
                                }
                            )
                        }
                        res()
                    }
                    }>


                <Form>
                    <label>Name</label>
                    <Field type='text' name='name'/>
                    <ErrorMessage name='name' component='span'/>
<br/>
                    <label>Price</label>
                    <Field type='number' name='price'/>
                    <ErrorMessage  name='price' component='span'/>
<br/>
                    <Field as='select' name='type'>
                        <option value="">--Select Type--</option>
                        {
                            type && type.map((t) => (
                                <option key={t.id} value={t.id}>{t.name}</option>
                            ))
                        }
                    </Field>
                    <ErrorMessage name='type' component='span'/>
                    <br/>
                    <button type='submit'>Submit</button>
                </Form>

            </Formik>
        </>
    )
}