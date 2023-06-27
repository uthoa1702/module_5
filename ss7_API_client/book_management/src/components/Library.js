import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import axios from "axios";
import {Link} from "react-router-dom";




export function Library() {

const [books,setBook] = useState([]);

useEffect(() => {
    const fetchApi = async () => {
        const result = await bookService.findAll()
        setBook(result)
    }
    fetchApi()
},[])




    return(
        <>
            <div>
                <h1>
                    Library
                </h1>
                <br/>
            </div>
            <div>
                <Link to='/addBook' className='btn btn-success'>Create new book</Link>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>

                </tr>
                </thead>
                <tbody>

                    {
                        books.map((book) => (
                            <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <Link className='btn btn-warning'  to={`/updateBook/${book.id}`}>Edit</Link>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </>
    )


}