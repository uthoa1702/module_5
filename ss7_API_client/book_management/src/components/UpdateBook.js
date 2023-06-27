import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as bookService from '../service/BookService';
import {useNavigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'
import {useParams} from "react-router-dom";

export function UpdateBook() {


    const [book, setBook] = useState()
    const navigate = useNavigate()
    const param = useParams()

    console.log(param)
    let r = bookService.findById(param)
    console.log("asdasd"+r)

    useEffect(() => {
        const findById = async () => {
        const result = await bookService.findById(param)
            setBook( result.data)
            console.log(result.data)

        }
        findById()
    },[param.id])
    console.log(book)
    const handleSubmit = async (values) => {
        try {

            await bookService.save(values)
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    };


    return (
        <Formik
            initialValues={{
                title: book.title ,
                quantity: book.quantity
            }}
            onSubmit={(values, {setSubmitting}) => {
                setSubmitting(false)
                const update = async () => {
                    // await bookService.update(values)
                    // toast.success(<h2>Update Success</h2>)
                    navigate("/")
                }
                update();
            }
            }
        >
            <div>
                <h1>Update Book</h1>
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field name='title'  id='title' type='text'/>
                    <br/>
                    <label htmlFor="quantity">Quantity</label>
                    <Field name='quantity' id='quantity' type='text'/>
                    <button className='btn btn-success' type='submit'>Submit</button>
                </Form>

            </div>
        </Formik>
    );
}
