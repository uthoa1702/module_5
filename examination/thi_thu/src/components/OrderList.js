import 'bootstrap/dist/css/bootstrap.min.css'
import {useEffect, useState} from 'react'
import * as orderService from '../components/service/OrderService'
import {Link} from "react-router-dom";
import * as Swal from 'sweetalert2'


export const OrderList = () => {
    const [order, setOrder] = useState([]);
    // const [product, setProduct] = useState([]);


    const showList = async () => {
        try {
            // const pro = await productService.findAll()
            //
            // await setProduct(pro)
            const order = await orderService.findAll()
            console.log(order)
            await setOrder(order)
        } catch (e) {
            console.log(e
            )
        }
    }
    useEffect(() => {
        showList()
    }, [])


    // const showTop = async (limit) => {
    //     try {
    //         const res = await orderService.showTop(limit)
    //         setOrder(res)
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    function showDeleteInformation(id) {
        const res = async () => {
            Swal.fire({
                showConfirmButton: true,
                showCancelButton: true,
                title: "Delete",
                icon:"warning",

            }).then(async (isD)=>{
                if(isD.isConfirmed){
                    await orderService.deleteById(id)
                    showList()
                    Swal.fire("Success",'',"success")
                }
            })
        }
        res()
    }

    return (
        <>
            <h1>List</h1>
            <Link to={'/create'} className='btn btn-success'>Create</Link>
            <br/>
            {/*<Formik initialValues={{*/}
            {/*    date: '',*/}
            {/*    product: ''*/}
            {/*}} onSubmit={(values) => {*/}
            {/*    const res = async () => {*/}
            {/*        const result = await orderService.search(values)*/}
            {/*        setOrder(result)*/}
            {/*    }*/}
            {/*    res()*/}
            {/*}}>*/}
            {/*    <Form>*/}
            {/*        <Field name='date' type='date'/>*/}
            {/*        <Field name='product' as='select'>*/}
            {/*            <option value="">--select product--</option>*/}
            {/*            /!*{*!/*/}
            {/*            /!*    product && product.map((p) => (*!/*/}
            {/*            /!*        <option key={p.id} value={p.id}>{p.name}</option>*!/*/}
            {/*            /!*    ))*!/*/}
            {/*            /!*}*!/*/}
            {/*        </Field>*/}
            {/*        <button type='submit' className='btn btn-primary'>Search</button>*/}
            {/*        <button type='reset' className='btn btn'>Reset</button>*/}
            {/*    </Form>*/}
            {/*</Formik>*/}
            <br/>


            {/*<button onClick={() => showTop(5)} className='btn btn-dark'>Show Top 5 </button>*/}
            <table className='table table-hover'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    order && order.map((ord) => (
                        <tr key={ord.id}>
                            <td> {ord.id}</td>
                            <td> {ord.date}</td>
                            <td> {ord.product.name}</td>
                            <td> {ord.price}</td>
                            <td>{ord.quantity}</td>
                            <td>{ord.total}</td>
                            <td>
                                <button onClick={() => showDeleteInformation(ord.id)}>Delete</button>
                            </td>
                        </tr>
                    ))

                }
                </tbody>
            </table>
        </>
    )
}