import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from 'react'
import * as productService from "./service/ProductService";
import * as orderService from "./service/OrderService";
import {useNavigate} from 'react-router-dom'
import * as Swal from 'sweetalert2'
import * as yup from 'yup'

export const CreateOrder = () => {
    const [pro, setPro] = useState([])
    const [selectedPro, setSelectedPro] = useState(0)
    const navigate = useNavigate()
    const showList = async () => {
        try {
            const pro = await productService.findAll()
            await setPro(pro)

        } catch (e) {
            console.log(e
            )
        }
    }
    useEffect(() => {
        showList()
    }, [])

const getProduct = async (id) => {
        const res =  await pro.find((p)=>p.id==id)
   await setSelectedPro( res)
    console.log(res)
}
    return (
        <>
            <h1 className='center'>Create Order</h1>
            <br/>
            <div className='center'>
                <Formik initialValues={{
                    product: selectedPro,
                    date: '',

                    price: 0,
                    total: 0,

                    quantity: 0,
                }}
                        validationSchema={yup.object({
                            date: yup.date().required("Need to be filled").max(new Date(), 'Not in the future'),
                            product: yup.number().required("Need to be filled"),
                            quantity: yup.number().required("Need to be filled").min(1, 'It should be more than 0')
                        })}
                        onSubmit={(values) => {
                            const res = async () => {
                                values.product = +values.product
                                values.price = pro.find(async (p) => p.id == values.product)?.price
                                values.total =await values.price * values.quantity
                                await orderService.save(values)
                                navigate('/')
                                Swal.fire({
                                    title: 'Created Successfully',
                                    icon: "success"
                                })
                            }
                            res()
                        }}>

                    <Form>
                        <label>Date</label>
                        <br/>
                        <Field type='date' name='date'/>
                        <ErrorMessage name='date' component='span'/>
                        <br/>
                        <br/>

                        <Field as='select' name='product' onClick={(event)=>{
                            getProduct(event.target.value)
                        }}>
                            <option value="">--select product--</option>
                            {
                                pro && pro.map((p) => (
                                        <option key={p.id} value={p.id}>{p.name}</option>
                                    )
                                )
                            }
                        </Field>
                        <ErrorMessage name='product' component='span'/>

                        <br/>
                        <br/>


                        <label>Quantity</label>
                        <br/>

                        <Field type='number' name='quantity'/>
                        <ErrorMessage name='quantity' component='span'/>

                        <br/>
                        <br/>
                        <Field type='hidden' name='price'/>
                        <Field type='hidden' name='total'/>

                        <button className='btn btn-success ' type='submit'>Submit</button>
                    </Form>
                </Formik>
            </div>

        </>
    )
}