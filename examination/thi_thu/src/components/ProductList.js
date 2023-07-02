import React, {useEffect, useState} from "react";
import * as productService from '../components/service/ProductService'
import * as productTypeService from '../components/service/ProductTypeService'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import * as Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";


export const ProductList = () => {

    const [products, setProduct] = useState([]);
    const [type, setType] = useState([]);

    const showProductList = async () => {
        const res = await productService.findAll();
        setProduct(res)
    }
    const showProductTypeList = async () => {
        const res = await productTypeService.findAll();
        setType(res)
    }
    useEffect(() => {
        showProductList();
        showProductTypeList();
    }, [])

    if (!products) {
        return null
    }


    const deleteInformation = (id, name) => {
        Swal.fire({
            title: 'Delete',
            icon: "warning",
            text: `Are you sure to remove ${name} ?`,
            confirmButtonText: 'Confirm',
            confirmButtonColor: 'red',
            cancelButtonColor: 'grey'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await productService.deleteById(id)
                await showProductList()
                await Swal.fire('Removed', `${name} has been removed`, "success")
            }
        })
    }

    return (
        <>
            <h1>Product List</h1>
            <Link to='/create' className='btn btn-success'>Create</Link>
            <Formik initialValues={{
                name: '',
                type: ''
            }} onSubmit={(values) => {
                const res = async () => {
                    const result = await productService.search(values)
                    await setProduct(result)
                }
                res()
            }}>
                <Form>
                    <Field name='name' type='text'/>
                    <Field className='form-select-sm' name='type' as='select'>
                        <option value="">Product Type</option>
                        {
                            type && type.map((ty) => (
                                <option key={ty.id} value={ty.id}>{ty?.name}</option>
                            ))
                        }
                    </Field>

                    <button type='submit' className='btn btn-dark'>Search</button>
                </Form>
            </Formik>
            <table className='table-hover table'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((pro) => (
                        <tr key={pro.id}>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td>{pro.price}</td>
                            <td>{type.find((ty) => ty.id == pro.type)?.name}</td>
                            <td>
                                <Link className='btn btn-warning' to={`/edit/${pro.id}`}>Edit</Link>
                                <button className='btn btn-danger' onClick={() => {
                                    deleteInformation(pro.id, pro.name)
                                }}>delete
                                </button>
                            </td>
                        </tr>

                    ))
                }

                </tbody>
            </table>
        </>
    )
}