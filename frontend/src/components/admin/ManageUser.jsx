import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userList, setuserList] = useState([]);

    const getUserData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/getall`);
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setuserList(data);
    }

    useEffect(() => {

        //when component opens
        getUserData();
    }, [])

    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/delete/`+id, {
            method: 'DELETE'
        });
    
        console.log(res.status);
    
        if (res.status === 200) {
            getUserData();
            toast.success('User Blocked Successfully!')
        }
    };

  return (
    <div className='vh-100 bg-body-secondary'>
            <div className="container mx-auto sm:px-4 py-4">
                <h1 className="text-center">Manage Users</h1>

                <table className='w-full max-w-full mb-4 bg-transparent bg-gray-900'>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList.map((user, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user._id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={"/admin/updateusers/" + user._id} className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteUser(user._id) }} className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700'>Block</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>
        </div>
  )
}

export default ManageUser