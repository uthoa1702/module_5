import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import * as bookService from "../service/BookService"
import {Link} from "react-router-dom";




export function Library() {

const [books,setBook] = useState([]);
    const [idDelete,setIdDelete]=useState();
    const [nameDelete,setNameDelete]=useState();

    const handleDelete=async (id)=>{
        await bookService.deleteBook(id);
        const result=await bookService.findAll();
        setBook(result);
    }
    const deleteInfor=async (id,name)=>{
        setIdDelete(id)
        setNameDelete(name)
    }
    const fetchApi = async () => {
        const result = await bookService.findAll()
        setBook(result)
    }
useEffect(() => {

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
                                <button style={{marginLeft:"10px"}} type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>deleteInfor(book.id,book.title)}>
                                    Delete
                                </button>
                            </td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        </div>
                        <div className="modal-body">
                            Do you want to delete this <span>{nameDelete}</span>?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <button type="submit" className="btn btn-danger"  data-bs-dismiss="modal" onClick={()=>handleDelete(idDelete)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}