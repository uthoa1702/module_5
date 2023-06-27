import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as bookService from '../service/BookService';
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export function CreateBook() {
    const [books, setBook] = useState([]);
    const navigate = useNavigate();

    return (
            <Formik
                initialValues={{
                    title: '',
                    quantity: ''
                }}
                onSubmit={values => {
                    const fetchApi = async () => {
                        await bookService.save(values);
                        navigate("/")
                        toast(`Created ${values.title}`)




                    };
                    fetchApi();
                }}
            >
                <div>
                    <h1>Create New Book</h1>
                    <Form>
                        <label htmlFor="title">Title</label>
                        <Field name='title' id='title' type='text' />
                        <br/>
                        <label htmlFor="quantity">Quantity</label>
                        <Field name='quantity' id='quantity' type='text' />
                        <button className='btn btn-success' type='submit'>Submit</button>
                    </Form>

                </div>
            </Formik>
    );
}
