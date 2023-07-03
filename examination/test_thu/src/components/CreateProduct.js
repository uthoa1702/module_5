import {ErrorMessage, Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import * as typeService from '../components/service/ProductTypeService'
import * as productService from '../components/service/ProductService'
import {useNavigate} from "react-router-dom";
import * as Swal from "sweetalert2";
import * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'


export const CreateProduct = () => {
    const  [day,setDay] =useState(new  Date())
    const [type, setType] = useState([])
    const navigate = useNavigate()

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
    }, [])

    return (
        <>
        <h1>Create product</h1>

        <Formik
            initialValues={{
                name: '',
                price: '',
                type: '',
                day:'',
                dayEnd:''
            }}
            validationSchema={yup.object({
                name: yup.string().required('Need to be filled'),
                price: yup.number().required('Need to be filled').min(0),
                type: yup.number().required('Need to be filled'),
                day: yup.date().min(new Date(),'ko chon qua khu').test(
                    'name',
                    'khong dươc chọn quá 30 ngày kể từ hôm nay',
                    function (value) {
                        const selectedDay = new Date(value)
                        const check = new Date().setDate(new Date().getDate() + 30)
                        setDay(selectedDay)
                        return  selectedDay <= check

                    }
                ),
                dayEnd: yup.date().min(day,'asdasdqasd')

            })}
            onSubmit={(values) => {
                const res = async () => {

                        console.log(values)
                        await productService.save(values)
                        await navigate('/')
                        await Swal.fire({
                            title: 'Success',
                            icon: "success",
                            text: 'Created Successfully'
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
                <label>Day start</label>
                <Field type='date' name='day'/>
                <ErrorMessage name='day' component='span'/><label>Day end</label>
                <Field type='date' name='dayEnd'/>
                <ErrorMessage name='dayEnd' component='span'/>
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