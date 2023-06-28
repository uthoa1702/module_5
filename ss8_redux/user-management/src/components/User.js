import {useDispatch, useSelector} from "react-redux";
import {deleteById, getAllUserList} from "../redux/action/UserActions";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {useEffect, useState} from "react";


export function User() {

    const [showList, setShowList] = useState(false)


    function showDeleteConfirmation(id) {
        Swal.fire({
            title: 'Xác nhận xóa',
            text: 'Bạn có chắc chắn muốn xóa dữ liệu này?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonColor:'#6d6d6d',
            confirmButtonColor:'#ff0000',
            cancelButtonText: 'Hủy',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteByIdd(id)
                await getList()

                await Swal.fire('Đã xóa!', 'Dữ liệu đã được xóa thành công.', 'success');

            }
        });
    }

// Sử dụng hàm showDeleteConfirmation() để hiển thị thông báo xác nhận xóa


    const users = useSelector(state => state.users)
    const dispatch = useDispatch()


    const getList = () => {
        dispatch(getAllUserList())
    }
    getList()

    const deleteByIdd = (id) => {
        dispatch(deleteById(id))
    }
    // useEffect(() => getList(),[])

    return (
        <>
            <h1>
                Users
            </h1>
            <button onClick={() => setShowList(!showList)}>
                {showList ? 'Hide List' : 'Show List'}
            </button>
            {
                showList && (
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button style={{marginLeft: "10px"}} type="button" className="btn btn-danger"

                                                onClick={() => showDeleteConfirmation(user.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                )
            }
        </>

    )

}