import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {toast} from 'react-toastify';
import {Dna} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';

export function ContactForm() {
    // const navigate = useNavigate();

    return (

        <>
            <Formik initialValues={{
                name: '',
                email: '',
                phone: '',
                message: ''

            }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Need to be filled"),
                        email: Yup.string().required("need to be filled").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
                        phone: Yup.number().required("need to be filled")
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            setSubmitting(false)
                            console.log(values)
                            toast.success(`Contact ${values.name} created`);
                            // navigate("/")
                        }, 1000)
                        console.log(values)
                    }}>
                {
                    ({isSubmitting}) => (
                        <div style={{width: '400px'}}>
                            <div><h1>Contact Form</h1></div>
                            <Form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <Field name='name' type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <ErrorMessage style={{color: 'red'}} component='span' name='name'/>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                    <Field name='email'
                                           type="text" className="form-control" id="exampleInputPassword1"/>
                                    <ErrorMessage component='span' style={{color: 'red'}} name='email'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                    <Field name='phone'
                                           type="text" className="form-control" id="exampleInputPassword1"/>
                                    <ErrorMessage component='span' style={{color: 'red'}} name='phone'/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                                    <Field type="text" className="form-control" id="exampleInputPassword1"
                                           name='message'/>
                                </div>

                                {isSubmitting ?
                                    <Dna
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"
                                    />
                                    :
                                    <button type="submit" className="btn btn-primary">Submit</button>


                                }
                            </Form>
                        </div>)


                }
            </Formik>
        </>
    )

}