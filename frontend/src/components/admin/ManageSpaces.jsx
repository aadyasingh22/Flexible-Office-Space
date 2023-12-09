import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const ManageSpaces = () => {

    const [spaceList, setspaceList] = useState([]);

    const getSpaceData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/getall`);
        console.log(res.status);
        const data = await res.json();
        console.table(data);
        setspaceList(data);
    }

    useEffect(() => {

        //when component opens
        getSpaceData();
    }, [])

    const deleteSpace = async (id) => {
        console.log(id);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/space/delete/`+id, {
            method: 'DELETE'
        });

        console.log(res.status);

        if (res.status === 200) {
            getSpaceData();
            toast.success('Data Deleted Successfully!')
        }

    };

    return (
        <div className='vh-100 bg-body-secondary'>
            <div className="container mx-auto sm:px-4 py-4">
                <h1 className="text-center">Manage Spaces</h1>

                <table className='w-full max-w-full mb-4 bg-transparent bg-gray-900'>
                    <thead>
                        <tr>
                            <th>S. No.</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Area</th>
                            <th>Cost</th>
                            <th>Services</th>
                            <th>Created At</th>
                            <th colSpan={2}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            spaceList.map((space, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{space._id}</td>
                                    <td>{space.title}</td>
                                    <td>{space.description}</td>
                                    <td>{space.area}</td>
                                    <td>{space.cost}</td>
                                    <td>{space.services}</td>
                                    <td>{space.createdat}</td>
                                    <td>
                                        <Link to={"/admin/updatespaces/" + space._id} className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600'>Edit</Link>
                                    </td>
                                    <td>
                                        <button onClick={() => { deleteSpace(space._id) }} className='inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-red-600 text-white hover:bg-red-700'>Delete</button>
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

export default ManageSpaces