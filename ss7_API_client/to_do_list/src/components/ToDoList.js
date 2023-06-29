import React, {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {ColorRing} from "react-loader-spinner";
import * as service from './service/ToDoService'


export function ToDoList() {


    const [thingsToDo, setThingsToDo] = useState([]);
    const fetchData = async () => {
        const re = await service.getThings();
        setThingsToDo(re);
    };

    useEffect(() => {
        fetchData();
    }, [thingsToDo]);






    return(
        <>
        <h1>To Do List</h1>
            <Formik initialValues={{
                title: ''
            }}
                    onSubmit={(values,{setSubmitting, resetForm}) => {
                const create = async () => {
                    setSubmitting(false)
                    await axios.post('http://localhost:8080/things', values)
                    toast.success(`added ${values.title}`)
                    console.log(values)
                    resetForm()

                }
                create();

            } }>
                {
                    ({isSubmitting}) => (
                        <Form>
                            <Field type="text" name='title'/>
                            {
                                isSubmitting ?
                                    <ColorRing
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
                                    :  <button type='submit'>Add</button>

                            }
                        </Form>

                    )
                }

            </Formik>

            <ul>
                {
                    thingsToDo.map(thing => (
                        <li key={thing.id}> {thing.title}</li>))
                    }

            </ul>
        </>
    )
}