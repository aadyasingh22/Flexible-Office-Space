import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const fetchUserData = async () => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/getbyid/` + id);
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserData(data)
    }

    useEffect(() => {
        fetchUserData()
    }, []);

    const submitForm = async (values) => {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/user/update/` + id, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('User Updated successfully', {
                variant: 'success',
                anchorOrigin: {
                    horizontal: 'center',
                    vertical: 'top'
                }
            })
            navigate('/manageusers')
        }
        console.log(values);
    }

  return (
    <div className='flex justify-center my-20'>
            <div className='container mx-auto sm:px-4'>
                <div className="flex flex-wrap ">
                    <div className="md:w-1/3 pr-4 pl-4 mx-auto flex items-center">
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                            <div className="flex-auto p-6">
                            <span className='text-4xl font-medium'>Update Users</span>

                                {
                                    userData !== null ? (
                                        <Formik
                                            initialValues={userData}
                                            onSubmit={submitForm}
                                        >
                                            {(addForm) => (
                                                <form className='my-5' onSubmit={addForm.handleSubmit}>
                                                    <label className='form-label'>First Name</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.firstName}</span>
                                                    <input id='firstName' onChange={addForm.handleChange} value={addForm.values.firstName} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                                                    <label className='form-label'>Last Name</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.lastName}</span>
                                                    <input id='lastName' onChange={addForm.handleChange} value={addForm.values.lastName} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                                                    <label className='form-label'>Email</label>
                                                    <span style={{ fontSize: 10, marginLeft: 10, color: 'red' }}>{addForm.errors.email}</span>
                                                    <input id='email' onChange={addForm.handleChange} value={addForm.values.email} className='block appearance-none w-full py-1 px-2 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded mb-3' type="text" />
                                                    

                                                    <button className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 w-full">Update</button>
                                                </form>
                                            )}
                                        </Formik>
                                    ) :
                                        <h1>Loading...</h1>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default UpdateUser