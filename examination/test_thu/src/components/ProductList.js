import React, {useEffect, useState} from "react";
import * as productService from '../components/service/ProductService'
import * as productTypeService from '../components/service/ProductTypeService'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";
import * as Swal from "sweetalert2";
import {Field, Form, Formik} from "formik";

export const ProductList = () => {
    const [products, setProduct] = useState([]);
    const [productType, setProductType] = useState([]);


    const showProductList = async () => {
        try {
            const res = await productService.findAll();
            setProduct(res)
        } catch (e) {
            console.log(e)
        }
    }


    const showProductTypeList = async () => {
        try {
            const res = await productTypeService.findAll();
            setProductType(res)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        showProductList()
        showProductTypeList()
    }, [])

    const deleteInformation = (id, name) => {
        const res = async () => {
            try {
                await Swal.fire({
                    title: 'Delete Confirmation',
                    icon: "warning",
                    text: `Are you sure to removed ${name}`,
                    confirmButtonText: 'Delete',
                    confirmButtonColor: 'red',
                    cancelButtonText: 'Cancel',
                    cancelButtonColor: 'grey',
                    showCancelButton: true
                }).then(async (result) => {
                    if (result.isConfirmed) {
                        await productService.deleteById(id)
                        await showProductList();
                        await Swal.fire('Delete Successfully', `${name} has been deleted.`, 'success')

                    }

                })
            } catch (e) {
                console.log(e)
            }
        }
        res()
    }
    return (
        <>

            <h1>Product List</h1>
            <Formik initialValues={{
                name: '',
                type: ''
            }} onSubmit={(values) => {
                const searcher = async () => {
                    const res = await productService.search(values.name, values.type)
                    await setProduct(res)
                    console.log(res)
                }
                searcher()

            }}>
                <Form>
                    <Field type='text' name='name'/>
                    <Field as='select' name='type'>
                        <option value="">--Type--</option>
                        {
                            productType && productType.map((t) => (
                                <option value={t.id}>{t.name}</option>
                            ))
                        }
                    </Field>
                    <button type="submit">Search</button>
                </Form>
            </Formik>
            <Link to='/create' className='btn btn-success'>create</Link>
            <table className='table table-hover'>
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
                    products && products.map((pro) => (
                        <tr key={pro.id}>
                            <td>{pro.id}</td>
                            <td>{pro.name}</td>
                            <td>{pro.price}</td>
                            <td>{productType.find((type) => type.id == pro.type)?.name}</td>
                            <td><Link className='btn btn-warning' to={`/edit/${pro.id}`}>Edit</Link></td>
                            <td>
                                <button className='btn btn-danger'
                                        onClick={() => deleteInformation(pro.id, pro.name)}>Delete
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